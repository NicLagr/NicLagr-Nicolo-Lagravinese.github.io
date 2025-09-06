import React, { useEffect, useState } from 'react';
import '../styles/winxp-cursors.css';

/**
 * Windows XP Cursor Manager Component
 * Manages cursor states and provides loading functionality
 */
const WinXPCursor = ({ children, enableLoadingCursor = true }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTimeout, setLoadingTimeout] = useState(null);

  useEffect(() => {
    // Add class to body to enable Windows XP cursors
    document.body.classList.add('winxp-cursors-enabled');
    
    // Hide the default browser cursor
    document.body.style.cursor = 'none';
    
    return () => {
      // Cleanup on unmount
      document.body.classList.remove('winxp-cursors-enabled');
      document.body.classList.remove('loading');
      document.body.style.cursor = 'auto';
    };
  }, []);

  useEffect(() => {
    if (!enableLoadingCursor) return;

    // Set up loading cursor for various loading events
    const handleLoadStart = () => {
      setIsLoading(true);
      document.body.classList.add('loading');
    };

    const handleLoadEnd = () => {
      // Add a small delay to prevent flickering
      if (loadingTimeout) clearTimeout(loadingTimeout);
      
      const timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('loading');
      }, 100);
      
      setLoadingTimeout(timeout);
    };

    // Listen for various loading events
    const handleFetchStart = () => handleLoadStart();
    const handleFetchEnd = () => handleLoadEnd();

    // Override fetch to show loading cursor
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      handleFetchStart();
      return originalFetch(...args)
        .then(response => {
          handleFetchEnd();
          return response;
        })
        .catch(error => {
          handleFetchEnd();
          throw error;
        });
    };

    // Listen for form submissions
    const handleFormSubmit = (e) => {
      handleLoadStart();
      // Set a timeout to remove loading cursor if no other events clear it
      setTimeout(() => {
        if (document.body.classList.contains('loading')) {
          handleLoadEnd();
        }
      }, 3000);
    };

    // Listen for link clicks that might cause navigation
    const handleLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && !target.href.startsWith('#') && !target.target) {
        handleLoadStart();
        // Navigation will handle removing the loading state
      }
    };

    // Add event listeners
    document.addEventListener('submit', handleFormSubmit);
    document.addEventListener('click', handleLinkClick);
    
    // Listen for page visibility changes
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleLoadEnd();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      // Cleanup
      window.fetch = originalFetch;
      document.removeEventListener('submit', handleFormSubmit);
      document.removeEventListener('click', handleLinkClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (loadingTimeout) {
        clearTimeout(loadingTimeout);
      }
    };
  }, [enableLoadingCursor, loadingTimeout]);

  // Expose methods for manual cursor control
  useEffect(() => {
    // Add global methods for manual cursor control
    window.WinXPCursor = {
      showLoading: () => {
        setIsLoading(true);
        document.body.classList.add('loading');
      },
      hideLoading: () => {
        setIsLoading(false);
        document.body.classList.remove('loading');
      },
      isLoading: () => isLoading
    };

    return () => {
      delete window.WinXPCursor;
    };
  }, [isLoading]);

  return (
    <>
      {children}
      {/* Optional loading indicator overlay */}
      {isLoading && (
        <div 
          className="cursor-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 9999999,
            cursor: 'url("../assets/cursors/hourglas.ani"), wait'
          }}
        />
      )}
    </>
  );
};

/**
 * Hook for manual cursor control
 */
export const useWinXPCursor = () => {
  const showLoading = () => {
    if (window.WinXPCursor) {
      window.WinXPCursor.showLoading();
    } else {
      document.body.classList.add('loading');
    }
  };

  const hideLoading = () => {
    if (window.WinXPCursor) {
      window.WinXPCursor.hideLoading();
    } else {
      document.body.classList.remove('loading');
    }
  };

  const isLoading = () => {
    if (window.WinXPCursor) {
      return window.WinXPCursor.isLoading();
    }
    return document.body.classList.contains('loading');
  };

  return { showLoading, hideLoading, isLoading };
};

export default WinXPCursor;
