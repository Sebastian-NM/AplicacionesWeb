import { Test, TestingModule } from '@nestjs/testing';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CurrencyService],
    }).compile();

    service = module.get<CurrencyService>(CurrencyService);
  });

  it('debería retornar el equivalente en dólares cuando el valor del dólar es mockeado', async () => {
    // Mock manual del valor del dólar
    jest.spyOn(service, 'getDollarValue').mockResolvedValue(500);

    const resultado = await service.getDollarEquivalent(10000);
    expect(resultado).toBe(20); // 10000 / 500 = 20
  });
});
