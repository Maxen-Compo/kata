import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  romanToInteger(romanNumber: string): number {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    return 0;
  }
}
