# Компоненты карточек кейсов

Этот модуль содержит набор компонентов для отображения кейсов и проектов в различных форматах.

## Компоненты

### CaseCard
Основной компонент карточки кейса с тремя вариантами отображения.

#### Props
- `caseStudy: CaseStudy` - объект с данными кейса
- `variant?: "featured" | "compact" | "grid"` - вариант отображения
- `className?: string` - дополнительные CSS классы

#### Варианты
- **featured** - большая карточка с горизонтальной компоновкой
- **grid** - карточка для сетки с изображением сверху
- **compact** - компактная карточка (по умолчанию)

#### Пример использования
```tsx
import { CaseCard } from '@/components/shared/case-card'

<CaseCard 
  caseStudy={caseData} 
  variant="featured" 
/>
```

### CaseCardGrid
Компонент для отображения сетки карточек кейсов.

#### Props
- `cases: CaseStudy[]` - массив кейсов
- `variant?: "featured" | "compact" | "grid"` - вариант карточек
- `columns?: 1 | 2 | 3 | 4` - количество колонок
- `className?: string` - дополнительные CSS классы

#### Пример использования
```tsx
import { CaseCardGrid } from '@/components/shared/case-card'

<CaseCardGrid 
  cases={casesData} 
  variant="grid" 
  columns={3} 
/>
```

### FeaturedCases
Компонент для отображения избранных кейсов с заголовком.

#### Props
- `cases: CaseStudy[]` - массив избранных кейсов
- `title?: string` - заголовок секции
- `subtitle?: string` - подзаголовок
- `className?: string` - дополнительные CSS классы

#### Пример использования
```tsx
import { FeaturedCases } from '@/components/shared/case-card'

<FeaturedCases 
  cases={featuredCases}
  title="Избранные проекты"
  subtitle="Наши самые значимые работы"
/>
```

### CaseStats
Компонент для отображения статистики кейсов.

#### Props
- `cases: CaseStudy[]` - массив кейсов для подсчета статистики
- `className?: string` - дополнительные CSS классы

#### Пример использования
```tsx
import { CaseStats } from '@/components/shared/case-card'

<CaseStats cases={allCases} />
```

## Структура данных CaseStudy

```typescript
interface CaseStudy {
  id: string
  slug: string
  title: string
  description: string
  category: string
  tags: string[]
  heroImage: string
  heroImageWidth: number
  heroImageHeight: number
  client: string
  timeline: string
  industry: string
  role: string
  challenge: string
  solution: string
  results: {
    title: string
    value: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    avatar: string
  }
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}
```

## Особенности

### Адаптивность
Все компоненты полностью адаптивны и корректно отображаются на всех устройствах.

### Производительность
- Использование `priority` для изображений выше сгиба
- Оптимизированные анимации с `will-change`
- Ленивая загрузка изображений

### Доступность
- Семантическая разметка
- Правильные ARIA атрибуты
- Поддержка клавиатурной навигации

### Темная тема
Все компоненты поддерживают темную тему через CSS переменные.

## Стилизация

Компоненты используют Tailwind CSS и поддерживают:
- Кастомные CSS классы через `className`
- CSS переменные для цветов
- Адаптивные breakpoints
- Анимации и переходы

## Примеры использования

### Страница всех кейсов
```tsx
import { CaseCardGrid, CaseStats } from '@/components/shared/case-card'

export default function CasesPage() {
  return (
    <div>
      <CaseStats cases={casesData} />
      <CaseCardGrid cases={casesData} variant="grid" columns={3} />
    </div>
  )
}
```

### Главная страница с избранными кейсами
```tsx
import { FeaturedCases, CaseCardGrid } from '@/components/shared/case-card'

export default function HomePage() {
  const featuredCases = casesData.slice(0, 3)
  const gridCases = casesData.slice(3, 6)
  
  return (
    <div>
      <FeaturedCases cases={featuredCases} />
      <CaseCardGrid cases={gridCases} variant="grid" columns={3} />
    </div>
  )
}
``` 