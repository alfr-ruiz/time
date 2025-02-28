module.exports = {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  // Configuration to handle JavaScript/TypeScript module formats
  overrides: [
    {
      files: ['*.js', '*.cjs', '*.mjs', '*.ts', '*.cts', '*.mts'],
      options: {
        parser: 'typescript', // This ensures proper parsing of all JS/TS files
      },
    },
    {
      files: ['*.config.js', '*.config.mjs', 'postcss.config.js', 'tailwind.config.js'],
      options: {
        // Preserve CommonJS module format for configuration files
        quoteProps: 'consistent',
      },
    },
  ],
};
