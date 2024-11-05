import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './kata.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Memoize sum function', () => {
    it('should memoize the function calls correctly', () => {
      let callCount = 0;

      const memoizedFn = appController.memoize((a, b) => {
        callCount += 1;
        return a + b;
      });

      // First call with (2, 3), should calculate and return 5
      expect(memoizedFn(2, 3)).toBe(5);

      // Second call with the same arguments (2, 3), should return the memoized result
      expect(memoizedFn(2, 3)).toBe(5);

      // Check if the actual function was called only once
      expect(callCount).toBe(1);

      // Third call with different arguments (1, 2), should calculate and return 3
      expect(memoizedFn(1, 2)).toBe(3);

      // Check that the function was called again for the new arguments
      expect(callCount).toBe(2);

      // Fourth call with previously seen arguments (2, 3), should return the memoized result
      expect(memoizedFn(2, 3)).toBe(5);

      // Ensure no additional calls to the original function
      expect(callCount).toBe(2);
    });
  });

  describe('Memoize factorial function', () => {
    it('should memoize the factorial function calls correctly', () => {
      let callCount = 0;

      const factorial = (n: number): number =>
        n <= 1 ? 1 : n * factorial(n - 1);

      const memoizedFactorial = appController.memoize((n) => {
        callCount += 1;
        return factorial(n);
      });

      // First call with (2), should calculate and return 2
      expect(memoizedFactorial(2)).toBe(2);

      // Second call with (3), should calculate and return 6
      expect(memoizedFactorial(3)).toBe(6);

      // Third call with (2), should return the memoized result
      expect(memoizedFactorial(2)).toBe(2);

      // Check if the function was only called twice
      expect(callCount).toBe(2);
    });
  });

  describe('Memoize fibonacci function', () => {
    it('should memoize the Fibonacci function calls correctly', () => {
      let callCount = 0;

      const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

      const memoizedFib = appController.memoize((n) => {
        callCount += 1;
        return fib(n);
      });

      // First call with (5), should calculate and return 8 (fib(5) = 8)
      expect(memoizedFib(5)).toBe(5);

      // Second call with (5), should return the memoized result
      expect(memoizedFib(5)).toBe(5);

      // Check if the function was only called once
      expect(callCount).toBe(1);
    });
  });
});
