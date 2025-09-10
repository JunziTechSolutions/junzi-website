# Microsoft Clarity - Настройка и использование

## Обзор

Microsoft Clarity настроен для работы на всех страницах сайта. Система включает в себя:

1. **Основной скрипт** - автоматически загружается на всех страницах
2. **Отслеживание навигации** - для SPA приложений
3. **Дополнительные компоненты** - для детального отслеживания

## Структура файлов

- `src/components/ClarityScript.tsx` - основной скрипт Clarity
- `src/components/analytics/ClarityTracker.tsx` - компонент для детального отслеживания
- `src/types/global.d.ts` - типы для TypeScript
- `src/app/layout.tsx` - подключение в корневом layout

## Автоматическое отслеживание

Скрипт автоматически отслеживает:
- Просмотры страниц
- Навигацию между страницами
- Взаимодействие пользователей
- Heatmaps и записи сессий

## Дополнительное отслеживание

### Использование ClarityTracker

```tsx
import { ClarityTracker } from "@/components/analytics/ClarityTracker";

export default function MyPage() {
  return (
    <>
      <ClarityTracker 
        pageName="Моя страница"
        customEvents={[
          { name: "page_loaded", data: { section: "main" } },
          { name: "user_action", data: { action: "view" } }
        ]}
      />
      {/* Содержимое страницы */}
    </>
  );
}
```

### Использование хука useClarity

```tsx
import { useClarity } from "@/components/analytics/ClarityTracker";

export default function MyComponent() {
  const { trackEvent, setPageName, setCustomData } = useClarity();

  const handleButtonClick = () => {
    trackEvent("button_clicked", { 
      button_name: "submit",
      page: "contact_form" 
    });
  };

  const handleFormSubmit = () => {
    trackEvent("form_submitted", { 
      form_type: "contact",
      fields_count: 5 
    });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Отправить</button>
      <form onSubmit={handleFormSubmit}>
        {/* Форма */}
      </form>
    </div>
  );
}
```

## Доступные методы

### trackEvent(eventName, data)
Отслеживает кастомные события.

### setPageName(pageName)
Устанавливает название страницы.

### setCustomData(key, value)
Устанавливает кастомные данные.

## Конфигурация

ID проекта Clarity: `pmsr9sz2vg`

Скрипт загружается с стратегией `afterInteractive` для оптимальной производительности.

## Проверка работы

1. Откройте консоль браузера
2. Проверьте наличие объекта `window.clarity`
3. Откройте панель Microsoft Clarity для просмотра данных

## Примечания

- Скрипт работает только в браузере (проверка `typeof window !== 'undefined'`)
- Все события отправляются асинхронно
- Данные обрабатываются с задержкой в панели Clarity 