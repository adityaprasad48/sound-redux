module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/no-unused-prop-types': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/ban-types': 'off',
    // Assignment to property of function parameter 'state'
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    // can write console
    'no-console': 'off',
    'no-alert': 'off',
    camelcase: 'off',

    '@typescript-eslint/no-explicit-any': ['off'],
    'react/require-default-props': 'off',
    // 'React' must be in scope
    'react/react-in-jsx-scope': 'off',
    'react/jsx-fragments': ['off'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    // disabling ts-ignore error
    // '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'latest',
    },
  },
};
