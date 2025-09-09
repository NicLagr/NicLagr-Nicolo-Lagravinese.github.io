import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import RetroHome from "../pages/home/RetroHome";
import WinXPCursor from "../components/WinXPCursor";
import "../styles/globals.css";


export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <WinXPCursor enableLoadingCursor={true}>
        <div className="min-h-screen bg-vw-deep text-vw-ink">
          {/* Skip link for accessibility */}
          <a 
            href="#main-content" 
            className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[10000] px-4 py-2 bg-vw-pink text-white rounded-md"
          >
            Skip to main content
          </a>
          
          {/* Use RetroHome as the main experience */}
          <RetroHome />
        </div>
      </WinXPCursor>
    </Router>
  );
}
