# Development Guide for AI Agents

## Project Structure

- `packages`: Packages
- `packages/*/src`: Plugin scripts with TypeScript
- `packages/*/tests`: Unit tests with Vitest

## Project Setup

- Install dependencies with `npm i`

## Code Style

### TypeScript

- Indents: 2 spaces
- String literals: single quotes
- No semicolons

## Commands

Basically, you should use npm scripts instead of executing the tools individually.

### Build

- `npm run build`: Build all projects with TypeScript

### Code Check / Fix

- `npm run check`: Run all checking tools
- `npm run check:eslint`: Lint with ESLint
- `npm run check:knip`: Check dependencies with Knip
- `npm run fix`: Run all fixing tools
- `npm run fix:eslint`: Format with ESLint
- `npm run fix:knip`: Fix dependencies with Knip

## Commit Messages

- Follow Conventional Commits
