import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('dollarEquivalent')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get(':amount')
  async getEquivalent(
    @Param('amount', ParseFloatPipe) amount: number,
  ): Promise<{ colones: number; equivalente: number }> {
    const equivalente = await this.currencyService.getDollarEquivalent(amount);
    return {
      colones: amount,
      equivalente: parseFloat(equivalente.toFixed(2)),
    };
  }
}
