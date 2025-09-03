import { fileURLToPath } from 'node:url'
import { defineConfig } from 'eslint/config'
import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import markdown from '@eslint/markdown'

export default defineConfig([
  includeIgnoreFile(fileURLToPath(new URL('.gitignore', import.meta.url))),
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
    ignores: ['**/package-lock.json', '**/tsconfig.json', '.vscode/*.json', '.renovaterc.json'],
    plugins: { json },
    language: 'json/json',
    extends: [json.configs.recommended],
  },
  {
    files: ['**/*.jsonc', '**/tsconfig.json', '.vscode/*.json', '.renovaterc.json'],
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
