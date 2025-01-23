import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
    exclude: ['node_modules', 'dist', 'tests/helpers', 'src/types', 'coverage/', '**/tests/helpers/*',
      '**/*.test.ts',  // Exclude all test files
      '**/node_modules/*'],
    directory: './coverage',
  },
});
