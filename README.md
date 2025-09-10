# Junzi Tech Solutions

Веб-приложение с несколькими страницами для демонстрации различных вариантов дизайна и функциональности.

## Структура маршрутизации

- `/` - Главная страница с выбором между Site и Landing
- `/site` - Основной сайт компании
- `/landing` - Лендинг страница
- `/form` - Форма для сбора данных

## Запуск проекта

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск продакшен версии
npm start
```

## Навигация

На всех страницах доступна навигационная панель в левом верхнем углу для быстрого переключения между страницами.

## Технологии

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI

## Структура проекта

```
src/
├── app/                    # App Router страницы
│   ├── landing/           # Маршрут /landing
│   ├── site/              # Маршрут /site
│   ├── form/              # Маршрут /form
│   └── layout.tsx         # Общий layout
├── pages/                 # Компоненты страниц
│   ├── landing/           # Компоненты Landing
│   └── site/              # Компоненты Site
├── components/            # Переиспользуемые компоненты
├── styles/                # Стили
└── utils/                 # Утилиты
```

## Особенности

- Все стили и зависимости корректно подключены
- Адаптивный дизайн
- Анимации с Framer Motion
- Аналитика (Google Tag Manager, Clarity)
- Темная/светлая тема

## 🚀 Features

- Modern UI components using Radix UI
- Form validation with React Hook Form and Zod
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Advanced form controls and inputs
- Toast notifications
- Mobile-friendly interface

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone git@gitlab.com:junzi-tech-solutions/junzi-form.git
cd junzi-form
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code linting

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form
- **Form Validation**: Zod
- **State Management**: React Query
- **Type Safety**: TypeScript
- **Routing**: Next.js Router
- **Icons**: Lucide React
- **Date Handling**: date-fns


## 📁 Project Structure

```
junzi-form/
├── src/              # Source files
├── public/           # Static files
├── .next/           # Next.js build output
├── node_modules/    # Dependencies
├── package.json     # Project configuration
├── next.config.js   # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json    # TypeScript configuration
```

### 📂 Source Code Structure (`src/`)

```
src/
├── api/             # API integration and endpoints
├── app/             # Next.js app directory (pages and layouts)
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # Reusable React components
├── config/          # Configuration files and constants
├── contexts/        # React context providers
├── data/            # Mock data and static content
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries and third-party integrations
├── pages/           # Next.js pages (if using pages directory)
├── services/        # Business logic and service layer
├── styles/          # Global styles and theme configuration
├── types/           # TypeScript type definitions
└── utils/           # Helper functions and utilities

Key files:
├── App.tsx          # Root application component
├── main.tsx         # Application entry point
├── global.css       # Global styles
└── index.css        # Base styles
```

#### 📑 Directory Details

- **`api/`**: Contains API integration code, including:
  - API endpoints configuration
  - API client setup
  - Request/response types
  - API utility functions

- **`app/`**: Next.js 13+ app directory containing:
  - Page components
  - Layout components
  - Route handlers
  - Loading and error states

- **`components/`**: Reusable UI components:
  - Form components
  - Layout components
  - UI elements
  - Component-specific styles
  - Component tests

- **`config/`**: Configuration files:
  - Environment variables
  - Feature flags
  - Application constants
  - Theme configuration

- **`contexts/`**: React context providers:
  - Theme context
  - Authentication context
  - Form state context
  - Other global state management

- **`hooks/`**: Custom React hooks:
  - Form handling hooks
  - Data fetching hooks
  - UI interaction hooks
  - State management hooks

- **`lib/`**: Third-party integrations and utilities:
  - API clients
  - Authentication
  - External service integrations
  - Shared utilities

- **`services/`**: Business logic layer:
  - Data processing
  - Business rules
  - Service integrations
  - State management logic

- **`styles/`**: Styling related files:
  - Global styles
  - Theme configuration
  - CSS modules
  - Tailwind configurations

- **`types/`**: TypeScript type definitions:
  - API types
  - Component props
  - State types
  - Utility types

- **`utils/`**: Helper functions:
  - Form validation
  - Data formatting
  - Common utilities
  - Helper functions

## 🔧 Configuration

The project uses several configuration files:

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration


## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.


