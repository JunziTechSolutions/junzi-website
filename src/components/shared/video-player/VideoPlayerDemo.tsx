'use client';

import React from 'react';
import VideoPlayer from './VideoPlayer';
import SimpleVideoPlayer from './SimpleVideoPlayer';
import { Modal } from '@/components/ui/modal';
import { useModal } from '@/components/landing/hooks/useModal';
import Form from '@/components/landing/form/Form';

export default function VideoPlayerDemo() {
  const { isOpen, isClosing, openModal, closeModal } = useModal();

  return (
    <div className="space-y-8">
      {/* Hero Section Example */}
      <div className="relative w-full h-screen bg-gray-900">
        <div className="absolute inset-0 z-10">
          <SimpleVideoPlayer
            src="/sample-video.mp4"
            title="Hero Video"
            className="w-full h-full"
            previewImage="/slider/slider.png"
            autoPlay={false}
            muted={false}
            loop={false}
          />
        </div>
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-4">Hero Section</h1>
            <p className="text-xl mb-8">Video background with sound</p>
            <button 
              onClick={openModal}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Open Form Modal
            </button>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="p-8 space-y-8 bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">Video Player Demo</h1>
        
        {/* Simple Video Player с preview изображением (без прогресс-бара) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Simple Video Player с Preview изображением</h2>
          <p className="text-gray-600">Упрощенная версия без прогресс-бара, с сменой иконки Play/Pause и звуком</p>
          <div className="w-full max-w-2xl mx-auto">
            <SimpleVideoPlayer
              src="/sample-video.mp4"
              title="Sample Video"
              className="w-full h-64"
              previewImage="/slider/slider.png"
              muted={false}
            />
          </div>
        </div>

        {/* Full Video Player с статичным preview изображением */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Full Video Player с Preview изображением</h2>
          <p className="text-gray-600">Полная версия с элементами управления, preview и звуком</p>
          <div className="w-full max-w-4xl mx-auto">
            <VideoPlayer
              src="/sample-video.mp4"
              title="Sample Video"
              className="w-full h-96"
              previewImage="/slider/slider.png"
              muted={false}
            />
          </div>
        </div>

        {/* Full Video Player без preview изображения (генерирует кадры) */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Full Video Player без Preview изображения</h2>
          <p className="text-gray-600">Генерирует preview кадры из видео со звуком</p>
          <div className="w-full max-w-4xl mx-auto">
            <VideoPlayer
              src="/sample-video.mp4"
              title="Sample Video"
              className="w-full h-96"
              muted={false}
            />
          </div>
        </div>

        {/* Simple Video Player без preview изображения */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Simple Video Player без Preview изображения</h2>
          <p className="text-gray-600">Упрощенная версия без preview изображения со звуком</p>
          <div className="w-full max-w-2xl mx-auto">
            <SimpleVideoPlayer
              src="/sample-video.mp4"
              title="Sample Video"
              className="w-full h-64"
              muted={false}
            />
          </div>
        </div>

        {/* Modal Demo Button */}
        <div className="text-center pt-8">
          <button 
            onClick={openModal}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Открыть модальное окно с формой и видео со звуком
          </button>
        </div>
      </div>

      {/* Modal with Form */}
      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal} className="max-w-4xl">
        <Form />
      </Modal>
    </div>
  );
} 