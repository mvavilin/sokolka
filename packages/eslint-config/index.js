import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,

  {
    files: ["**/*.{js,ts,tsx}"],

    languageOptions: {
      globals: globals.node,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },

    rules: {
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
]);
