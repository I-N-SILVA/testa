# Plyaz Landing Page 
Plyaz Landing Page 🚀 The official gateway to Plyaz’s revolutionary fan-engagement platform. Showcases core features, interactive experiences, tokenized rewards, and NFT highlights. Designed for seamless exploration, user onboarding, and community building.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Release](https://img.shields.io/badge/release-v0.1.0-blue)]()
[![Node](https://img.shields.io/badge/node-v22.x-green)]()
[![Next.js](https://img.shields.io/badge/next.js-v15.x-black)]()
[![TypeScript](https://img.shields.io/badge/typescript-v5.x-blue)]()

## Overview

This repository contains the frontend codebase for Plyaz, a web3-enabled platform built on modern web technologies. The frontend is designed with scalability, performance, and security at its core.

## 🛠️ Tech Stack

[Full Details](https://plyaz.atlassian.net/wiki/spaces/SD/pages/655410/Plyaz+Tech+Stack)

## 📂 Repository Structure

```
Landing-Page/
├── .github/                  # GitHub workflows for CI/CD
├── public/                   # Static assets
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/           # Reusable React components
│   │   ├── common/           # Shared UI components
│   │   ├── features/         # Feature-specific components
│   │   └── layouts/          # Layout components
│   ├── config/               # Configuration files
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions and libraries
│   ├── services/             # API service functions
│   │   ├── api/              # REST API endpoints
│   │   └── web3/             # Blockchain service functions
│   ├── store/                # Zustand global state stores
│   ├── styles/               # Global styles and SCSS modules
│   └── types/                # TypeScript type definitions
├── .env.example              # Example environment variables
├── .eslintrc.js              # ESLint configuration
├── .gitignore                # Git ignore rules
├── jest.config.js            # Jest testing configuration
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── README.md                 # This file
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js v22.x or later
- pnpm (preferred) or npm
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Plyaz-Official/Web-App.git
   cd frontend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a local environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Pull Requests, Branching, Commit Convention

- [Docs](https://plyaz.atlassian.net/wiki/spaces/SD/pages/1146927/Pull+Request+Branching+Commit+Requirements)

## 🔄 CI/CD Pipeline & Release Schedule

Our CI/CD pipeline is built with GitHub Actions:

- [Deployment Process](https://plyaz.atlassian.net/wiki/spaces/SD/pages/1212418/Deployment)

## 📚 Documentation

Detailed documentation is available in Confluence:

**Frontend**
- [Frontend Architecture](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950287/Frontend+Architecture)
- [Frontend Private Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/753800/Frontend+Private+Package+Dependencies?atlOrigin=eyJpIjoiZWQ0ODM5OGZjMDYzNGU2YTk3NDgyNWVkYzBkY2Q1MjAiLCJwIjoiYyJ9)
- [Frontend Data Flow Architecture](https://plyaz.atlassian.net/wiki/spaces/SD/pages/753750/Frontend+Data+Flow+Architecture?atlOrigin=eyJpIjoiMGVjOWRhOGYxNTc1NGFlNWEyOWIwNGZiODA5ZTYzYWIiLCJwIjoiYyJ9)

**Frontend Packages**
- [Hooks Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/655510/Hooks+Package?atlOrigin=eyJpIjoiNTU5ZDMyYmY5YmY1NDlkNWFiMDAzY2FmZDM1M2JhY2QiLCJwIjoiYyJ9)
- [UI Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/655450/UI+Package?atlOrigin=eyJpIjoiZTk0Nzk0NDM3NmRmNGYyM2IyYjIyMGMxN2E4Njk2ODUiLCJwIjoiYyJ9)
- [Store Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/786490/Store+Package?atlOrigin=eyJpIjoiMTQwZWRmN2I1MWYxNDAwNmIyNzQwNTcyMGEwMzI4NzkiLCJwIjoiYyJ9)

**Shared**
- [What are Shared Packages?](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950482/What+are+Shared+Packages?atlOrigin=eyJpIjoiYjYyZDlmNDQ1NmRjNDdjZDg0MjU5ZTMwYjg0NTkxZGEiLCJwIjoiYyJ9)
- [API Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950316/API+Package?atlOrigin=eyJpIjoiMTBjNTNhMjVkMDRlNDE1NzkwNTQxNzM1NTA0ZGI2NzYiLCJwIjoiYyJ9)
- [Config Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950387/Config+Package?atlOrigin=eyJpIjoiZjM3NWZlMTBhZjMxNDk1NGFhZjkxYjEwZmM2NGJkZWMiLCJwIjoiYyJ9)
- [Types Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950359/Types+Package?atlOrigin=eyJpIjoiNjgyMTZiMzIxYTE1NDMwN2JlYmZkYjBiMjY3ODI1YWQiLCJwIjoiYyJ9)
- [Wen3 Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950332/Web3+Package?atlOrigin=eyJpIjoiOWQzZTBhNjM1NDA2NGQwOWI1NjY1ZGE0YjFmZTRmYTUiLCJwIjoiYyJ9)
- [Config Package](https://plyaz.atlassian.net/wiki/spaces/SD/pages/950387/Config+Package?atlOrigin=eyJpIjoiZjM3NWZlMTBhZjMxNDk1NGFhZjkxYjEwZmM2NGJkZWMiLCJwIjoiYyJ9)

**Processes**
- [Deployment Process](https://plyaz.atlassian.net/wiki/spaces/SD/pages/1212418/Deployment)

**Architecture & Strategies**
- [Testing Strategy](https://plyaz.atlassian.net/wiki/spaces/SD/pages/1310734/Testing+Strategy)

## 📈 Roadmap

Coming soon
