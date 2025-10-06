# View Transition API для Next.js

Этот проект реализует плавные анимации переходов между страницами с использованием View Transition API и Framer Motion.

## Компоненты

### 1. AnimatedNavigationButton
Компонент кнопки навигации с поддержкой анимаций.

```tsx
import { AnimatedNavigationButton } from "@/components/shared/buttons/AnimatedNavigationButton";

<AnimatedNavigationButton
  href="/cases/worthefy"
  variant="link"
  slideDirection="right"
  duration={300}
>
  View Case Study
</AnimatedNavigationButton>
```

**Пропсы:**
- `href` - URL для навигации
- `variant` - вариант кнопки ("link", "outline", "default", "ghost")
- `slideDirection` - направление анимации ("left" | "right")
- `duration` - длительность анимации в миллисекундах
- `icon` - иконка ("arrow-right" | "arrow-up-right")

### 2. BackButton
Кнопка "Назад" с анимированным переходом.

```tsx
import { BackButton } from "@/components/shared/buttons/BackButton";

<BackButton href="/cases" />
```

### 3. PageTransitionContainer
Контейнер для анимаций переходов между страницами.

```tsx
import { PageTransitionContainer } from "@/components/shared/PageTransitionContainer";

<PageTransitionContainer>
  {/* Содержимое страницы */}
</PageTransitionContainer>
```

## Утилиты

### navigateWithTransition
Функция для навигации с анимацией.

```tsx
import { navigateWithTransition } from "@/lib/viewTransition";

navigateWithTransition(router, "/cases/worthefy", {
  slideDirection: "right",
  duration: 300,
});
```

## CSS Анимации

Все анимации определены в `src/global.css`:

- `slide-out-left` - уход влево
- `slide-out-right` - уход вправо  
- `slide-in-left` - вход слева
- `slide-in-right` - вход справа

## Использование

### 1. Навигация с карточек кейсов
При клике на карточку кейса происходит анимация:
- Старая страница уходит влево
- Новая страница входит справа

### 2. Навигация между кейсами
- Кнопка "Previous" - анимация влево
- Кнопка "Next" - анимация вправо

### 3. Возврат на главную
- Кнопка "Back" - анимация влево
- Хлебные крошки - анимация влево

## Fallback

Для браузеров без поддержки View Transition API используется fallback с обычной навигацией.

## Настройка

### Изменение длительности анимации
```tsx
<AnimatedNavigationButton
  href="/cases/worthefy"
  duration={500} // 500ms вместо 300ms
>
  View Case Study
</AnimatedNavigationButton>
```

### Изменение направления анимации
```tsx
<AnimatedNavigationButton
  href="/cases/worthefy"
  slideDirection="left" // Вместо "right"
>
  View Case Study
</AnimatedNavigationButton>
```

## Совместимость

- ✅ Chrome 111+
- ✅ Edge 111+
- ✅ Safari 16.4+
- ⚠️ Firefox (fallback)

## Производительность

Анимации оптимизированы для плавности:
- Используется `transform` вместо `left/top`
- Анимации выполняются на GPU
- Минимальная задержка между переходами 

###