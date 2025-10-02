# 📊 Responsive Expandable Table

[![CI Pipeline](https://github.com/esmanhoto/responsive-table/actions/workflows/ci.yml/badge.svg)](https://github.com/esmanhoto/responsive-table/actions/workflows/ci.yml)

A modern, accessible, and responsive expandable table component built with React and TypeScript. Features comprehensive E2E testing, development workflow, and follows modern web accessibility standards.

## ✨ Features

- 🎯 **Responsive Design** - Adapts to different screen sizes with intelligent column layouts
- ♿ **Accessibility First** - Full ARIA support, keyboard navigation, screen reader compatible
- 🧪 **Comprehensive Testing** - E2E tests with Cypress, automated CI/CD pipeline
- 🎨 **Modern Styling** - CSS Modules with responsive breakpoints and smooth animations
- 📱 **Mobile Optimized** - Touch-friendly interactions and mobile-first approach
- 🔧 **Professional Tooling** - ESLint, Prettier, TypeScript, automated quality checks

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test:open

# Build for production
npm run build
```

## 🛠️ Available Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm run lint`         | Run ESLint checks            |
| `npm run lint:fix`     | Fix ESLint issues            |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run test`         | Run Cypress tests (headless) |
| `npm run test:open`    | Open Cypress UI              |

## 🏗️ Tech Stack

**Frontend:**

- ⚛️ React 19 with TypeScript
- ⚡ Vite for build tooling
- 🎨 CSS Modules for styling
- 📱 Responsive CSS Grid/Flexbox

**Development:**

- 🔍 ESLint + TypeScript ESLint
- 💅 Prettier for code formatting
- 🧪 Cypress for E2E testing
- ♿ eslint-plugin-jsx-a11y for accessibility

**CI/CD:**

- 🚀 GitHub Actions workflow
- ✅ Automated testing on PRs
- 🔒 Security auditing
- 📦 Build verification
