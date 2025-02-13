# Next.js Project Template 

This repository provides a ready-to-use **frontend template skeleton** built with **Next.js**, designed to streamline development with modern tools and best practices. It includes TypeScript, Sass, Storybook, ESLint, Stylelint, and custom scripts for efficient component management and code quality assurance.

## Features

- **Next.js** as the main framework.
- **TypeScript** for static typing and enhanced development experience.
- **Sass** for powerful and modular CSS styling.
- **Storybook** for building, viewing, and testing UI components in isolation.
- **ESLint** for linting JavaScript and TypeScript files, ensuring code quality.
- **Stylelint** for linting and fixing styles in Sass files.
- **Commitlint** for linting commit messages.
- **Plop.js** for automating the creation of new components.
- **Jest** as the testing library.
- Built-in scripts for streamlined development workflows.

## Installation

First install all dependencies to get started:
```bash
npm install
```

## Available Scripts

**Development & Build Commands**

```bash
npm run dev              # Starts the development server.
npm run build            # Builds the application for production.
npm run start            # Starts the application in production mode.
```

**Linting & Formatting Commands**

```bash
npm run lint             # Runs ESLint to analyze code for potential issues.
npm run lint:fix         # Automatically fixes ESLint issues when possible.
npm run stylelint        # Lints Sass styles for errors and best practices.
npm run stylelint:fix    # Fixes Stylelint errors automatically.
```

**TypeScript Commands**

```bash
npm run typecheck        # Checks the codebase for TypeScript type errors.
```

**Storybook Commands**

```bash
npm run storybook        # Starts Storybook for isolated component development.
```

**Custom Scripts**

```bash
npm run plop             # Generates boilerplate files for new components.
```

## Commiting

This project follows the semantic **commit messages convention** to ensure that commit messages are structured and meaningful. Semantic commit messages help in understanding the history of changes, automating versioning, and generating changelogs.

### Commit Message Format

Each commit message should consist of a **type**, an optional **scope**, and a **subject**:

```
<type>(<scope>): <subject> Example:
```

Examples: 

- `feature(auth): add login functionality`
- `fix(api): handle null response`
- `docs(readme): update installation instructions`
- `style: adjust padding`
- `refactor: simplify component structure`

### Message Types

When writing commit, lease use one of the following types:

- `feature` A new feature for the user.
- `fix` A bug fix for the user.
- `docs` Documentation only changes.
- `style` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor` A code change that neither fixes a bug nor adds a feature.
- `test` Adding missing tests or correcting existing tests.
- `chore` Other changes that don't modify src or test files.
- `revert` Reverts a previous commit.
- `build` Changes that affect the build system or external dependencies.
- `ci` Changes to our CI configuration files and scripts.
- `temp` Temporary changes that are not intended to be included in the final product.