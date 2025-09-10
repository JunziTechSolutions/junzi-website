'use client';

import React from 'react';

export function VideoTest() {
  return (
    <div className="relative w-full h-96 bg-gray-900 rounded-lg overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.8 }}
        onLoadStart={() => console.log('Test video loading started')}
        onCanPlay={() => console.log('Test video can play')}
        onError={(e) => console.error('Test video error:', e)}
      >
        <source src="/videos/animation.mp4" type="video/mp4" />
        Видео не поддерживается
      </video>
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-white text-center">
          <h3 className="text-xl font-bold mb-2">Тест видео</h3>
          <p>Если вы видите анимацию, видео работает</p>
        </div>
      </div>
    </div>
  );
} 