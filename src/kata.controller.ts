import { Controller, Get } from '@nestjs/common';

type Fn = (...params: number[]) => number;
@Controller()
export class AppController {
  constructor() {}

  memoize(fn: Fn): Fn {
    return function (...args) {
      return 0;
    };
  }

  /**
   * let callCount = 0;
   * const memoizedFn = memoize(function (a, b) {
   *	 callCount += 1;
   *   return a + b;
   * })
   * memoizedFn(2, 3) // 5
   * memoizedFn(2, 3) // 5
   * console.log(callCount) // 1
   */
}
