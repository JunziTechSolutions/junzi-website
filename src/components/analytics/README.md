# Аналитика и отслеживание для Junzi Form

Этот директория содержит компоненты для интеграции Google Tag Manager, Google Analytics и Microsoft Clarity в приложение.

## Установка

Для полной интеграции аналитики, добавьте следующие компоненты в соответствующие места вашего приложения:

### 1. Добавьте ExternalScripts в ваш layout.tsx

```tsx
// src/app/layout.tsx
import ExternalScripts from '@/components/analytics/ExternalScripts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ExternalScripts />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 2. Добавьте GoogleTagManagerNoScript в начало body

```tsx
// src/app/layout.tsx
import ExternalScripts from '@/components/analytics/ExternalScripts';
import GoogleTagManagerNoScript from '@/components/analytics/GoogleTagManagerNoScript';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ExternalScripts />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        {children}
      </body>
    </html>
  );
}
```

### 3. Добавьте GTMRouteListener в корневой компонент приложения

```tsx
// src/app/layout.tsx или любой корневой компонент
import GTMRouteListener from '@/components/analytics/GTMRouteListener';

export default function App() {
  return (
    <>
      <GTMRouteListener />
      {/* Остальное содержимое приложения */}
    </>
  );
}
```

## События для отслеживания

Для отправки пользовательских событий в Google Tag Manager используйте следующий код:

```js
// Отправка события
if (typeof window !== 'undefined' && window.dataLayer) {
  window.dataLayer.push({
    event: 'form_step_completed', 
    step_number: 1,
    step_name: 'User Information'
  });
}
```

## Отслеживаемые события

- `pageview` - просмотр страницы (отправляется автоматически при изменении маршрута)
- `form_step_view` - просмотр шага формы
- `form_step_completed` - заполнение шага формы
- `form_submission` - отправка формы 