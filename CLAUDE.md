# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Plyaz Landing Page - a Next.js 15 application with internationalization, built for showcasing Plyaz's fan-engagement platform. The project uses TypeScript, Tailwind CSS, and is managed with pnpm.

## Essential Commands

### Development
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Code Quality
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Auto-fix linting issues
- `pnpm type:check` - Run TypeScript type checking
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

### Testing
- `pnpm test` - Run tests once
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage
- `pnpm test:ui` - Open Vitest UI

## Architecture

### Directory Structure
- `src/app/[locale]/` - Next.js App Router pages with i18n support
- `src/components/` - React components (reusable UI elements)
- `src/constants/` - Constants for teams, missions, etc.
- `src/i18n/` - Internationalization configuration
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions
- `messages/` - Translation JSON files for each locale
- `public/assets/` - Static assets (SVGs, images)

### Key Technologies
- **Framework**: Next.js 15 with App Router and Turbopack
- **Styling**: Tailwind CSS v4
- **Internationalization**: next-intl with dynamic routing
- **State Management**: Components use local state (no global store detected)
- **Package Manager**: pnpm (required v8.0.0+)
- **Node Version**: v22.4.0+ required
- **Analytics**: Vercel Analytics integrated

### Path Aliases
- `@/*` → `./src/app/*`
- `@/components` → `./src/components`
- `@/public/*` → `./public/assets/*`
- `@/types` → `./src/types`
- `@/constants` → `./src/constants`

### Important Patterns
1. **Internationalization**: All pages are wrapped in `[locale]` dynamic routing
2. **Component Exports**: Components are re-exported through `src/components/index.ts`
3. **Private Packages**: Uses @plyaz scoped packages for shared functionality
4. **ESLint Config**: Uses @plyaz/devtools for consistent linting rules
5. **Testing**: Vitest configuration extends from @plyaz/devtools

### Development Workflow
1. Always run `pnpm lint` and `pnpm type:check` before committing
2. The project uses Vercel for deployment
3. Translations are managed through @plyaz/translations package
4. UI components from @plyaz/ui package are available