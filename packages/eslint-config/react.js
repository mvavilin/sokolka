import { defineConfig, globalIgnores } from "eslint/config";

import globals from "globals";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import unicorn from "eslint-plugin-unicorn";

import baseConfig from "./index.js";

export default defineConfig([
  ...baseConfig,

  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,

  globalIgnores([
    "dist",
    "build",
    "node_modules",
    "**/vite-env.d.ts",
    "**/shared/ui/**",
  ]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    plugins: {
      prettier,
      unicorn,
    },

    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    rules: {
      ...unicorn.configs.recommended.rules,

      "@typescript-eslint/explicit-function-return-type": "error",
      "prettier/prettier": "error",
      "max-lines-per-function": [
        "error",
        {
          max: 40,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      "unicorn/consistent-compound-words": "off",
      "unicorn/filename-case": "off",
      "unicorn/prevent-abbreviations": "error",

      "unicorn/prefer-node-protocol": "error",
      "unicorn/prefer-array-some": "error",
      "unicorn/prefer-array-find": "error",
      "unicorn/prefer-array-flat-map": "error",
      "unicorn/prefer-array-index-of": "error",
      "unicorn/prefer-includes": "error",
      "unicorn/prefer-math-trunc": "error",
      "unicorn/prefer-negative-index": "error",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-set-has": "error",
      "unicorn/prefer-spread": "error",
      "unicorn/prefer-regexp-test": "error",
      "unicorn/prefer-modern-dom-apis": "error",
      "unicorn/prefer-modern-math-apis": "error",
      "unicorn/prefer-number-properties": "error",
      "unicorn/prefer-object-from-entries": "error",
      "unicorn/prefer-string-replace-all": "error",
      "unicorn/prefer-string-slice": "error",
      "unicorn/prefer-string-trim-start-end": "error",
      "unicorn/prefer-type-error": "error",

      "unicorn/throw-new-error": "error",
      "unicorn/consistent-destructuring": "error",
      "unicorn/no-await-in-promise-methods": "error",
      "unicorn/no-useless-fallback-in-spread": "error",
      "unicorn/no-zero-fractions": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/no-useless-undefined": "error",
      "unicorn/no-instanceof-array": "error",
      "unicorn/no-new-array": "error",
      "unicorn/no-new-buffer": "error",
      "unicorn/no-array-push-push": "error",

      "unicorn/prefer-switch": ["error", { minimumCases: 3 }],
    },

    linterOptions: {
      noInlineConfig: true,
    },
  },
]);
