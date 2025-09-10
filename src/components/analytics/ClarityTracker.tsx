import { useEffect } from 'react';

interface ClarityTrackerProps {
  pageName?: string;
  customEvents?: Array<{
    name: string;
    data?: Record<string, any>;
  }>;
}

export const ClarityTracker: React.FC<ClarityTrackerProps> = ({ 
  pageName, 
  customEvents = [] 
}) => {
  useEffect(() => {
    // Отслеживаем просмотр страницы
    if (typeof window !== 'undefined' && window.clarity && pageName) {
      window.clarity("set", "page_name", pageName);
      window.clarity("set", "page_view", window.location.pathname);
    }

    // Отслеживаем кастомные события
    customEvents.forEach(event => {
      if (typeof window !== 'undefined' && window.clarity) {
        window.clarity("event", event.name, event.data);
      }
    });
  }, [pageName, customEvents]);

  return null; // Этот компонент не рендерит ничего
};

// Хук для удобного использования Clarity
export const useClarity = () => {
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("event", eventName, data);
    }
  };

  const setPageName = (pageName: string) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("set", "page_name", pageName);
    }
  };

  const setCustomData = (key: string, value: any) => {
    if (typeof window !== 'undefined' && window.clarity) {
      window.clarity("set", key, value);
    }
  };

  return {
    trackEvent,
    setPageName,
    setCustomData
  };
}; 