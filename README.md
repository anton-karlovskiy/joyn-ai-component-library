# Joyn AI - React UI Component Library

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/joyn-ai/deploys)
[![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-4.11.0-blue.svg)](https://material-ui.com/)
[![Storybook](https://img.shields.io/badge/Storybook-6.0.21-ff69b4.svg)](https://storybook.js.org/)

> A modern React UI component library built with Material-UI, featuring custom design system components optimized for AI-powered applications.

## 🚀 Live Demo

**Experience Joyn AI Components:** [https://joyn-ai-component-library.vercel.app](https://joyn-ai-component-library.vercel.app)

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Usage](#-usage)
- [Components](#-components)
- [Design System](#-design-system)
- [Development](#-development)
- [Storybook](#-storybook)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🎨 Custom Design System** - Carefully crafted components following modern design principles
- **⚡ Material-UI Integration** - Built on top of Material-UI v4 for consistency and accessibility
- **🔧 TypeScript Ready** - Full TypeScript support with comprehensive prop definitions
- **📱 Responsive Design** - Mobile-first approach with responsive breakpoints
- **♿ Accessibility First** - WCAG compliant components with proper ARIA attributes
- **🎭 Storybook Integration** - Interactive component documentation and testing
- **🎯 SEO Optimized** - Built with performance and search engine optimization in mind
- **🚀 Production Ready** - Optimized bundle size and performance

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ 
- Yarn or npm
- Modern web browser

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/joyn-ai-prototype.git

# Navigate to project directory
cd joyn-ai-prototype

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn start
# or
npm start
```

## 📦 Usage

### Basic Button Component

```jsx
import React from 'react';
import JoynButton from './components/JoynButton';
import { ReactComponent as SaveIcon } from './assets/icons/svgs/save.svg';

function App() {
  return (
    <div>
      {/* Primary Button */}
      <JoynButton type="primary">
        Save Changes
      </JoynButton>

      {/* Button with Icon */}
      <JoynButton 
        type="primary" 
        startIcon={<SaveIcon />}
      >
        Save
      </JoynButton>

      {/* Loading State */}
      <JoynButton 
        type="primary" 
        loading
      >
        Processing...
      </JoynButton>
    </div>
  );
}
```

### Button Types

```jsx
// Primary Button (Main actions)
<JoynButton type="primary">Primary Action</JoynButton>

// Secondary Button (Secondary actions)
<JoynButton type="secondary">Secondary Action</JoynButton>

// Tertiary Button (Subtle actions)
<JoynButton type="tertiary">Tertiary Action</JoynButton>
```

## 🧩 Components

### JoynButton

A customizable button component with three variants and multiple states.

**Props:**
- `type`: `'primary' | 'secondary' | 'tertiary'` - Button variant
- `loading`: `boolean` - Shows loading spinner
- `disabled`: `boolean` - Disables the button
- `startIcon`: `ReactElement` - Icon at the start of button
- `endIcon`: `ReactElement` - Icon at the end of button
- `onClick`: `function` - Click handler
- `className`: `string` - Additional CSS classes

**Example:**
```jsx
<JoynButton 
  type="primary"
  loading={isLoading}
  startIcon={<SaveIcon />}
  onClick={handleSave}
>
  Save Document
</JoynButton>
```

## 🎨 Design System

### Color Palette

Our design system features a carefully curated color palette:

- **Primary**: `#424f62` - Main brand color for primary actions
- **Secondary**: `#45a49c` - Supporting color for secondary elements  
- **Error**: `#f3775b` - Error states and destructive actions
- **Warning**: `#fad97d` - Warning states and caution
- **Success**: `#6ab6af` - Success states and confirmations

### Typography

Built with the custom **Gustanlp** font family:

- **Headings**: 500-700 font weight, optimized for readability
- **Body Text**: 400 font weight, optimized for long-form content
- **Buttons**: 500 font weight, optimized for action clarity

### Spacing & Layout

- Consistent 8px grid system
- Responsive breakpoints for all screen sizes
- Optimized for both desktop and mobile experiences

## 🛠 Development

### Available Scripts

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Run linting
yarn lint

# Fix linting issues
yarn lint-fix

# Format code
yarn format

# Analyze bundle size
yarn analyze-webpack-bundle
```

### Storybook Development

```bash
# Start Storybook
yarn storybook

# Build Storybook
yarn build-storybook
```

## 📚 Storybook

Explore all components interactively in our Storybook:

```bash
yarn storybook
```

Visit: [http://localhost:6006](http://localhost:6006)

### Storybook Features

- **Interactive Component Playground** - Test components with live props
- **Design Tokens** - Visual design system documentation
- **Accessibility Testing** - Built-in accessibility checks
- **Responsive Testing** - Test components across different screen sizes

## 🚀 Deployment

### Netlify Deployment

```bash
# Deploy to Netlify
yarn netlify-deploy
```

**Live Site:** [https://joyn-ai-component-library.vercel.app](https://joyn-ai-component-library.vercel.app)

### Build Optimization

- **Code Splitting** - Automatic code splitting for optimal loading
- **Tree Shaking** - Unused code elimination
- **Bundle Analysis** - Built-in webpack bundle analyzer
- **Performance Monitoring** - Core Web Vitals optimization

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `yarn test`
5. Run linting: `yarn lint`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏷 Keywords

React, Material-UI, UI Components, Design System, TypeScript, Storybook, Accessibility, Responsive Design, AI, Machine Learning, Frontend, JavaScript, Web Development, Component Library, User Interface, UX Design

---

**Built with ❤️ by the Joyn AI Team**

*Optimized for modern web applications with a focus on performance, accessibility, and developer experience.*