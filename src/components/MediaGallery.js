import React, { useState } from 'react';

const MediaGallery = ({ media, title }) => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (mediaItem, type) => {
    setSelectedMedia({ ...mediaItem, type });
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedMedia(null);
  };

  const MediaItem = ({ src, alt, isVideo = false, className = '' }) => (
    <div 
      className={`relative aspect-video bg-gray-900 border-2 border-gray-700 overflow-hidden cursor-pointer hover:border-cyan-400 transition-colors duration-200 ${className}`}
      onClick={() => openLightbox({ src, alt }, isVideo ? 'video' : 'image')}
    >
      {isVideo ? (
        <video
          src={src}
          className="w-full h-full object-cover"
          muted
          loop
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
          Click to expand
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="space-y-6">
        {/* Hero Image */}
        {media.hero && (
          <div className="space-y-2">
            <h4 className="text-pink-300 font-mono text-sm uppercase tracking-wider">Featured</h4>
            <MediaItem
              src={media.hero}
              alt={`${title} hero image`}
              className="max-w-2xl"
            />
          </div>
        )}

        {/* Trailer */}
        {media.trailer && (
          <div className="space-y-2">
            <h4 className="text-pink-300 font-mono text-sm uppercase tracking-wider">Trailer</h4>
            <MediaItem
              src={media.trailer}
              alt={`${title} trailer`}
              isVideo
              className="max-w-2xl"
            />
          </div>
        )}

        {/* Gallery */}
        {media.gallery && media.gallery.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-pink-300 font-mono text-sm uppercase tracking-wider">Screenshots & Concept Art</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {media.gallery.map((src, index) => (
                <MediaItem
                  key={index}
                  src={src}
                  alt={`${title} screenshot ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && selectedMedia && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors duration-200 text-2xl font-mono z-10"
            >
              ✕ Close
            </button>

            {/* Media Content */}
            <div className="relative bg-gray-900 border-2 border-gray-600 overflow-hidden">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </div>

            {/* Caption */}
            <div className="text-center mt-2 text-gray-300 font-mono text-sm">
              {selectedMedia.alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGallery;
