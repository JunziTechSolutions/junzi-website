'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Video } from 'lucide-react';
import styles from './VideoPlayer.module.css';

interface SimpleVideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  previewImage?: string; // URL изображения для preview
}

export default function SimpleVideoPlayer({
  src,
  title = "Video",
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  previewImage
}: SimpleVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className={`${styles.simpleVideoContainer} ${className} ${isPlaying ? styles.playing : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={src}
        title={title}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
      >
        Your browser does not support the video tag.
      </video>

      {/* Градиентный оверлей */}
      <div className={styles.videoOverlay}></div>

      {/* Preview изображение (если указано) */}
      {previewImage && !isPlaying && (
        <div className={styles.previewOverlay}>
          <img
            src={previewImage}
            alt="Video preview"
            className={styles.previewImage}
          />
        </div>
      )}

      {/* Текст "Нажмите для воспроизведения" */}
      {!isPlaying && (
        <div
          className={styles.playText}
          role="button"
          tabIndex={0}
          aria-label="Play video"
          onClick={togglePlay}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              togglePlay();
            }
          }}
        >
          Click to play
        </div>
      )}

      {/* Центральная кнопка Play/Pause с адаптивными размерами */}
      {(!isPlaying || (isPlaying && isHovered)) && (
        <button
          onClick={togglePlay}
          className={styles.centerButton}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          ) : (
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-[113px] xl:h-[113px]" 
              viewBox="0 0 113 113" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M56.4665 103.133C82.2398 103.133 103.133 82.2399 103.133 56.4666C103.133 30.6933 82.2398 9.79993 56.4665 9.79993C30.6932 9.79993 9.79987 30.6933 9.79987 56.4666C9.79987 82.2399 30.6932 103.133 56.4665 103.133Z" stroke="white" strokeWidth="2.13333"/>
              <path d="M44.7999 52.7324V60.2009C44.7999 67.291 44.7999 70.8358 46.9267 72.2689C49.0535 73.7016 51.9623 72.1163 57.7802 68.9458L64.6318 65.211C71.6327 61.3956 75.1332 59.4878 75.1332 56.4666C75.1332 53.4454 71.6327 51.5377 64.6318 47.7222L57.7802 43.9877C51.9623 40.817 49.0535 39.2316 46.9267 40.6645C44.7999 42.0973 44.7999 45.6423 44.7999 52.7324Z" fill="white"/>
            </svg>
          )}
        </button>
      )}
    </div>
  );
} 