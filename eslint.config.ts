import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: { js, stylistic },
    extends: [js.configs.recommended, stylistic.configs.recommended],
  },
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    plugins: { tseslint },
    extends: [tseslint.configs.recommended],
  },
  {
    files: ['**/*.json'],
    ignores: ['**/package-lock.json', '**/tsconfig.json', '.vscode/settings.json'],
    plugins: { json },
    language: 'json/json',
    extends: [json.configs.recommended],
  },
  {
    files: ['**/*.jsonc', '**/tsconfig.json', '.vscode/settings.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: [json.configs.recommended],
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/commonmark',
    extends: [markdown.configs.recommended],
  },
])
