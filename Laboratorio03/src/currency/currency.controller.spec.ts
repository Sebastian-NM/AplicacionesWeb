import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

describe('CurrencyController', () => {
  let controller: CurrencyController;
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CurrencyController],
      providers: [CurrencyService],
    }).overrideProvider(CurrencyService).useValue({
      getDollarEquivalent: jest.fn((colones: number) => Promise.resolve(colones / 500)),
    }).compile();

    controller = module.get<CurrencyController>(CurrencyController);
    service = module.get<CurrencyService>(CurrencyService);
  });

  it('debería retornar el equivalente en dólares cuando recibe un número válido', async () => {
    const result = await controller.getEquivalent(10000);
    expect(result).toEqual({
      colones: 10000,
      equivalente: 20.00,
    });
  });
});
