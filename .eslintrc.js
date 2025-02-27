module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Add prettier as an ESLint rule
    'prettier/prettier': 'error',

    // Prevent usage of console statements in production code
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Enforce consistent quote style (warn for now to gradually adopt)
    quotes: ['warn', 'single', { avoidEscape: true }],

    // Enforce trailing commas for cleaner diffs (warn for now)
    'comma-dangle': ['warn', 'always-multiline'],

    // Enforce consistent spacing in brackets and parentheses
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],

    // No unnecessary semicolons
    'no-extra-semi': 'error',

    // Consistent spacing around keywords
    'keyword-spacing': ['error', { before: true, after: true }],

    // No multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],

    // Consistent object property spacing
    'object-curly-spacing': ['error', 'always'],

    // Consistent object literal trailing commas
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
  },
  ignorePatterns: ['node_modules/', '.next/', 'out/'],
};
