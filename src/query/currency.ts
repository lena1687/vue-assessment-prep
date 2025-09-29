import axios from 'axios';
import { useQuery } from '@tanstack/vue-query';
import type { CurrencyData } from '../types/currency.ts';

export const fetchCurrencyTypes = async (): Promise<Record<string, string>> => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay to emulate the loader
  const res = await axios.get('https://api.frankfurter.app/currencies');
  return res.data;
};

export function useCurrencyQuery() {
  return useQuery<Record<string, string>>({
    queryKey: ['currencyTypes'],
    queryFn: fetchCurrencyTypes,
  });
}

export const fetchExchangeRate = async (
  currency: string
): Promise<CurrencyData> => {
  const res = await axios.get(
    `https://api.frankfurter.app/latest?base=${currency}`
  );
  return res.data;
};

export function useExchangeRateQuery(currencyRef: { value: string }) {
  return useQuery<CurrencyData>({
    queryKey: ['exchangeRate', currencyRef],
    queryFn: () => fetchExchangeRate(currencyRef.value),
    enabled: !!currencyRef.value,
  });
}
