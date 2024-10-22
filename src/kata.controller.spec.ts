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

  describe('Convert Roman to Integer', () => {
    it('Roman numerals 1', () => {
      expect(appController.romanToInteger('XLI')).toBe(41);
    });
    it('Roman numerals 2', () => {
      expect(appController.romanToInteger('CCXXXVI')).toBe(236);
    });
    it('Roman numerals 3', () => {
      expect(appController.romanToInteger('DCCXLV')).toBe(745);
    });
    it('Roman numerals 4', () => {
      expect(appController.romanToInteger('LXVI')).toBe(66);
    });
    it('Roman numerals 5', () => {
      expect(appController.romanToInteger('CDXLVII')).toBe(447);
    });
    it('Roman numerals 6', () => {
      expect(appController.romanToInteger('LXXXIX')).toBe(89);
    });
  });
});
