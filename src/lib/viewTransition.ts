// View Transition API утилита для Next.js
export const startViewTransition = (callback: () => void) => {
  // Проверяем поддержку View Transition API
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    return (document as any).startViewTransition(callback);
  } else {
    // Fallback для браузеров без поддержки View Transition API
    callback();
    return Promise.resolve();
  }
};

// Утилита для навигации с анимацией
export const navigateWithTransition = (
  router: any,
  href: string,
  options?: {
    slideDirection?: 'left' | 'right';
    duration?: number;
  }
) => {
  const { slideDirection = 'right', duration = 300 } = options || {};

  return startViewTransition(() => {
    // Добавляем CSS классы для анимации
    const root = document.documentElement;
    
    if (slideDirection === 'right') {
      // Старая страница уходит влево, новая приходит справа
      root.style.setProperty('--slide-out-direction', 'left');
      root.style.setProperty('--slide-in-direction', 'right');
    } else {
      // Старая страница уходит вправо, новая приходит слева
      root.style.setProperty('--slide-out-direction', 'right');
      root.style.setProperty('--slide-in-direction', 'left');
    }
    
    root.style.setProperty('--transition-duration', `${duration}ms`);
    
    // Выполняем навигацию
    router.push(href);
    
    // Удаляем CSS переменные после анимации
    setTimeout(() => {
      root.style.removeProperty('--slide-out-direction');
      root.style.removeProperty('--slide-in-direction');
      root.style.removeProperty('--transition-duration');
    }, duration);
  });
};

// CSS классы для анимаций
export const viewTransitionStyles = `
  @keyframes slide-out-left {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  @keyframes slide-out-right {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  @keyframes slide-in-left {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-right {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .view-transition-slide-out-left {
    animation: slide-out-left var(--transition-duration, 300ms) ease-in-out forwards;
  }

  .view-transition-slide-out-right {
    animation: slide-out-right var(--transition-duration, 300ms) ease-in-out forwards;
  }

  .view-transition-slide-in-left {
    animation: slide-in-left var(--transition-duration, 300ms) ease-in-out forwards;
  }

  .view-transition-slide-in-right {
    animation: slide-in-right var(--transition-duration, 300ms) ease-in-out forwards;
  }

  /* Плавные переходы для всех элементов */
  * {
    transition: all var(--transition-duration, 300ms) ease-in-out;
  }

  /* Специальные стили для карточек кейсов */
  .case-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  .case-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  /* Анимация для изображений */
  .case-image {
    transition: transform 0.5s ease-in-out;
  }

  .case-card:hover .case-image {
    transform: scale(1.05);
  }

  /* Плавные переходы для кнопок */
  .transition-button {
    transition: all 0.2s ease-in-out;
  }

  .transition-button:hover {
    transform: translateY(-1px);
  }
`; 