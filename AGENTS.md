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

## Tools

Basically, you should use npm scripts instead of executing the tools individually.

### Code Check / Fix

- `npm run check`: Run all checking tools
- `npm run check:lint`: Lint
- `npm run check:deps`: Check dependencies
- `npm run fix`: Run all fixing tools
- `npm run fix:fmt`: Format
- `npm run fix:deps`: Fix dependencies

## Commit Messages

- Follow Conventional Commits
