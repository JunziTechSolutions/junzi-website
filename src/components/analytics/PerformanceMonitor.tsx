"use client";

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  isLowEndDevice: boolean;
  errors: string[];
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    isLowEndDevice: false,
    errors: []
  });

  useEffect(() => {
    const startTime = performance.now();
    
    // Определяем слабое устройство
    const isLowEndDevice = () => {
      const connection = (navigator as any).connection;
      const memory = (performance as any).memory;
      
      // Проверяем скорость соединения
      const isSlowConnection = connection && 
        (connection.effectiveType === 'slow-2g' || 
         connection.effectiveType === '2g' || 
         connection.effectiveType === '3g');
      
      // Проверяем доступную память
      const isLowMemory = memory && memory.jsHeapSizeLimit < 2147483648; // 2GB
      
      // Проверяем количество ядер
      const isLowCores = navigator.hardwareConcurrency < 4;
      
      return isSlowConnection || isLowMemory || isLowCores;
    };

    // Отслеживаем ошибки
    const handleError = (event: ErrorEvent) => {
      setMetrics(prev => ({
        ...prev,
        errors: [...prev.errors, `${event.message} at ${event.filename}:${event.lineno}`]
      }));
    };

    // Отслеживаем необработанные отклонения промисов
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      setMetrics(prev => ({
        ...prev,
        errors: [...prev.errors, `Unhandled promise rejection: ${event.reason}`]
      }));
    };

    // Добавляем слушатели ошибок
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    // Измеряем время загрузки
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      const memory = (performance as any).memory;
      
      setMetrics({
        loadTime,
        memoryUsage: memory ? memory.usedJSHeapSize / 1024 / 1024 : 0, // MB
        isLowEndDevice: isLowEndDevice(),
        errors: []
      });

      // Логируем метрики в консоль для отладки
      console.log('Performance Metrics:', {
        loadTime: `${loadTime.toFixed(2)}ms`,
        memoryUsage: `${((performance as any).memory?.usedJSHeapSize / 1024 / 1024 || 0).toFixed(2)}MB`,
        isLowEndDevice: isLowEndDevice(),
        userAgent: navigator.userAgent,
        connection: (navigator as any).connection?.effectiveType || 'unknown',
        cores: navigator.hardwareConcurrency || 'unknown'
      });
    };

    // Измеряем после полной загрузки страницы
    if (document.readyState === 'complete') {
      measureLoadTime();
    } else {
      window.addEventListener('load', measureLoadTime);
    }

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('load', measureLoadTime);
    };
  }, []);

  // Показываем предупреждение только в режиме разработки и если есть проблемы
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const hasIssues = metrics.isLowEndDevice || metrics.errors.length > 0 || metrics.loadTime > 3000;

  if (!hasIssues) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-100 border border-yellow-400 text-yellow-800 px-4 py-2 rounded-lg shadow-lg z-50 max-w-sm">
      <h3 className="font-bold text-sm mb-2">Performance Issues Detected:</h3>
      <ul className="text-xs space-y-1">
        {metrics.isLowEndDevice && (
          <li>• Low-end device detected</li>
        )}
        {metrics.loadTime > 3000 && (
          <li>• Slow load time: {metrics.loadTime.toFixed(0)}ms</li>
        )}
        {metrics.errors.length > 0 && (
          <li>• {metrics.errors.length} error(s) detected</li>
        )}
        {metrics.memoryUsage > 100 && (
          <li>• High memory usage: {metrics.memoryUsage.toFixed(1)}MB</li>
        )}
      </ul>
      <button 
        onClick={() => console.log('Full metrics:', metrics)}
        className="text-xs underline mt-2"
      >
        View details in console
      </button>
    </div>
  );
} 