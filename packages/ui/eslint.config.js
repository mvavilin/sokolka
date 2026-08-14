import config from '@repo/eslint-config';

export default [
  ...config,
  {
    languageOptions: {
      parserOptions: {
        project: true,
      },
    },
  },
];
