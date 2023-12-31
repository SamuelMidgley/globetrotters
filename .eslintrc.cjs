module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended", "eslint-config-prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn'
  }
};