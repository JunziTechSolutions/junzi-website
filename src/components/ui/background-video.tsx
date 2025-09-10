'use client';

import React from 'react';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  opacity?: number;
  mobileGifSrc?: string;
}

export function BackgroundVideo({
  src,
  className = "",
  opacity = 0.4,
  mobileGifSrc = "/videos/mobile.gif",
}: BackgroundVideoProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ zIndex: 1 }}>
      {/* Mobile: GIF instead of video */}
      <img
        src={mobileGifSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none block sm:hidden"
        style={{ opacity }}
      />

      {/* Desktop/Tablet: video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden sm:block"
        style={{ opacity }}
        onLoadStart={() => console.log('Video loading started:', src)}
        onCanPlay={() => console.log('Video can play:', src)}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={src} type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}