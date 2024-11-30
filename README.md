# Next.js Project Template 

This repository provides a ready-to-use **frontend template skeleton** built with **Next.js**, designed to streamline development with modern tools and best practices. It includes TypeScript, Sass, Storybook, ESLint, Stylelint, and custom scripts for efficient component management and code quality assurance.

## Features

- **Next.js** as the main framework.
- **TypeScript** for static typing and enhanced development experience.
- **Sass** for powerful and modular CSS styling.
- **Storybook** for building, viewing, and testing UI components in isolation.
- **ESLint** for linting JavaScript and TypeScript files, ensuring code quality.
- **Stylelint** for linting and fixing styles in Sass files.
- **Plop.js** for automating the creation of new components.
- Built-in scripts for streamlined development workflows.

---

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the **postinstall** script to finalize setup:
   ```bash
   npm run postinstall
   ```

---

## Available Scripts

### Development & Build Commands

- **`dev`**: Starts the development server.
  ```bash
  npm run dev
  ```

- **`build`**: Builds the application for production.
  ```bash
  npm run build
  ```

- **`start`**: Starts the application in production mode.
  ```bash
  npm run start
  ```

### Linting & Formatting Commands

- **`lint`**: Runs ESLint to analyze code for potential issues.
  ```bash
  npm run lint
  ```

- **`lint:fix`**: Automatically fixes ESLint issues when possible.
  ```bash
  npm run lint:fix
  ```

- **`stylelint`**: Lints Sass styles for errors and best practices.
  ```bash
  npm run stylelint
  ```

- **`stylelint:fix`**: Fixes Stylelint errors automatically.
  ```bash
  npm run stylelint:fix
  ```

### TypeScript Commands

- **`typecheck`**: Checks the codebase for TypeScript type errors.
  ```bash
  npm run typecheck
  ```

### Storybook Commands

- **`storybook`**: Starts Storybook for isolated component development.
  ```bash
  npm run storybook
  ```

### Custom Scripts

- **`plop`**: Generates boilerplate files for new components.
  ```bash
  npm run plop
  ```
  Follow the prompts to create new components easily.