'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Video } from 'lucide-react';
import styles from './VideoPlayer.module.css';

interface VideoPlayerProps {
  src: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  previewImage?: string; // URL изображения для preview
}

export default function VideoPlayer({
  src,
  title = "Video",
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = false,
  previewImage
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(!autoPlay);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewTime, setPreviewTime] = useState(0);
  const [previewPosition, setPreviewPosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    const handlePlay = () => {
      setIsPlaying(true);
      setShowControls(false);
    };
    const handlePause = () => {
      setIsPlaying(false);
      setShowControls(true);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handlePreview = (e: React.MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const time = percentage * duration;
    
    setPreviewTime(time);
    setPreviewPosition(percentage * 100);
    setShowPreview(true);
  };

  const handlePreviewEnd = () => {
    setShowPreview(false);
  };

  const generatePreview = (time: number) => {
    // Если есть статичное изображение, используем его
    if (previewImage) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (!video || !canvas) return;

    try {
      // Сохраняем текущее время
      const currentTime = video.currentTime;
      
      // Устанавливаем время для preview
      video.currentTime = time;
      
      // Ждем обновления видео
      const handleSeeked = () => {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = 120;
          canvas.height = 67.5;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        }
        
        // Возвращаем исходное время
        video.currentTime = currentTime;
        video.removeEventListener('seeked', handleSeeked);
      };
      
      video.addEventListener('seeked', handleSeeked);
    } catch (error) {
      console.warn('Preview generation failed:', error);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Генерируем preview при изменении previewTime (только если нет статичного изображения)
  useEffect(() => {
    if (showPreview && duration > 0 && !previewImage) {
      generatePreview(previewTime);
    }
  }, [previewTime, showPreview, duration, previewImage]);

  return (
    <div
      ref={containerRef}
      className={`${styles.videoContainer} ${className} ${isPlaying ? styles.playing : ''}`}
      onMouseMove={showControlsTemporarily}
      onMouseLeave={() => {
        if (isPlaying) {
          setShowControls(false);
        }
        setShowPreview(false);
      }}
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

      {/* Скрытый canvas для генерации preview (только если нет статичного изображения) */}
      {!previewImage && (
        <canvas
          ref={canvasRef}
          style={{ display: 'none' }}
          width={120}
          height={67.5}
        />
      )}

      {/* Градиентный оверлей для понимания что это видео */}
      <div className={styles.videoOverlay}></div>

      {/* Индикатор видео в правом верхнем углу */}
      <div className={styles.videoIndicator}>
        <Video className="w-4 h-4" />
        <div className={styles.recordingIndicator}></div>
      </div>

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

      {/* Overlay Controls */}
      <div className={`${styles.controls} ${showControls ? styles.visible : ''}`}>
        {/* Center Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={styles.centerButton}
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 text-white" />
          ) : (
            <Play className="w-8 h-8 text-white ml-1" />
          )}
        </button>

        {/* Bottom Controls Bar */}
        <div className={styles.controlsBar}>
          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            {/* Preview контейнер */}
            <div 
              className={`${styles.previewContainer} ${showPreview ? styles.visible : ''}`}
              style={{ left: `${previewPosition}%` }}
            >
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Video preview"
                  className={styles.previewImage}
                />
              ) : (
                <canvas
                  ref={canvasRef}
                  className={styles.previewImage}
                  width={120}
                  height={67.5}
                />
              )}
              <div className={styles.previewTime}>
                {formatTime(previewTime)}
              </div>
            </div>

            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              onMouseMove={handlePreview}
              onMouseLeave={handlePreviewEnd}
              className={styles.slider}
              style={{
                background: `linear-gradient(to right, #0b1e54 0%, #0b1e54 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />
          </div>

          {/* Control Buttons */}
          <div className={styles.controlsRow}>
            <div className={styles.controlsLeft}>
              <button
                onClick={togglePlay}
                className={styles.controlButton}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" />
                ) : (
                  <Play className="w-5 h-5 text-white" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className={styles.controlButton}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>

              <button
                onClick={restart}
                className={styles.controlButton}
              >
                <RotateCcw className="w-5 h-5 text-white" />
              </button>

              <span className={styles.timeDisplay}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <button
              onClick={toggleFullscreen}
              className={styles.controlButton}
            >
              <Maximize2 className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 