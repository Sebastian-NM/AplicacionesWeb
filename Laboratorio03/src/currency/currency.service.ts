import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';

interface HaciendaResponse {
  dolar: {
    venta: {
      fecha: string;
      valor: number;
    };
    compra: {
      fecha: string;
      valor: number;
    };
  };
  euro: unknown;
}

@Injectable()
export class CurrencyService implements OnModuleInit {
  private dollarValue: number | null = null;

  async onModuleInit() {
    await this.getDollarValue();
  }

  async getDollarValue(): Promise<number> {
    if (this.dollarValue !== null) {
      return this.dollarValue;
    }

    const response = await axios.get<HaciendaResponse>('https://api.hacienda.go.cr/indicadores/tc');
    const valorVenta = response.data?.dolar?.venta?.valor;

    if (!valorVenta || isNaN(valorVenta)) {
      throw new Error('No se pudo obtener el valor del dólar.');
    }

    this.dollarValue = valorVenta;
    return this.dollarValue;
  }

  async getDollarEquivalent(colones: number): Promise<number> {
    const dollar = await this.getDollarValue();
    return colones / dollar;
  }
}

