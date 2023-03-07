module.exports = {
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'sort-imports': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'import/no-mutable-exports': 'error',
    'import/extensions': [
      'error',
      {
        css: 'always',
        json: 'always',
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        groups: [
          ['builtin', 'external', 'internal', 'type'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
        optionalDependencies: false,
      },
    ],
  },
};
