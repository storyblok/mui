module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2017,
  },
  extends: [
    'prettier',
    'eslint:recommended',
  ],
  plugins: [
    'prettier',
    'prefer-arrow',
    'functional'
  ],
  rules: {
    'no-var': 'error',
    'prettier/prettier': ['warn'],
    'prefer-arrow/prefer-arrow-functions': 'error',
    'functional/immutable-data': 'error',
    'functional/no-let': 'error',
    'functional/no-class': 'error',
    'functional/no-mixed-type': 'error',
    'functional/no-this-expression': 'error',
    'functional/no-loop-statement': 'error',
    'functional/no-promise-reject': 'error',
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
}
