// Import matchers from React Testing Library
import '@testing-library/jest-dom';
import { afterEach, beforeEach, vi } from 'vitest';

// Mock global fetch if used in your app
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// Suppress console warnings during tests
beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

// Reset mocks after each test
afterEach(() => {
  vi.restoreAllMocks();
});
