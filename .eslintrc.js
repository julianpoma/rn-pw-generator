module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
  ],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-native'],
  env: {
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  rules: {
    'sort-imports': [
      'error',
      {
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'no-shadow': 1,
    'no-param-reassign': 1,
    'no-console': 1,
    'implicit-arrow-linebreak': ['error', 'beside'],
    'prefer-arrow-callback': 2,
    'react/prop-types': 0,
    'react/destructuring-assignment': ['warn'],
    'react-native/no-color-literals': 0,
    'react/prefer-stateless-function': 1,
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, natural: false, minKeys: 2 },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
