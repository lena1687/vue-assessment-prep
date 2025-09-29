<template>
  <div>
    <v-container>
      <v-card class="custom-card">
        <v-card-title>Currency Converter</v-card-title>
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="2">
              <v-number-input
                :precision="2"
                control-variant="hidden"
                v-model="firstAmount"
                variant="outlined"
                autofocus
              />
            </v-col>
            <v-col cols="3">
              <v-select
                :items="currencyItems"
                v-model="firstCurrency"
                item-title="text"
                item-value="value"
                :loading="isLoadingCurrencyTypes"
                :error="isCurrencyError"
                :error-messages="isCurrencyErrorMessage?.message"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2">
              <v-number-input
                :precision="2"
                control-variant="hidden"
                v-model="secondAmount"
                variant="outlined"
              />
            </v-col>
            <v-col cols="3">
              <v-select
                :items="currencyItems"
                v-model="secondCurrency"
                item-title="text"
                item-value="value"
                :loading="isLoadingCurrencyTypes"
                :error="isCurrencyError"
                :error-messages="isCurrencyErrorMessage?.message"
                variant="outlined"
              />
            </v-col>
          </v-row>
          <div v-if="isExchangeError" class="text-red-600 mt-2">
            Failed to fetch exchange rate.
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useCurrencyQuery, useExchangeRateQuery } from '../query/currency.ts';

const {
  data: currencyList,
  isLoading: isLoadingCurrencyTypes,
  isError: isCurrencyError,
  error: isCurrencyErrorMessage,
} = useCurrencyQuery();

const firstCurrency = ref<string>('EUR');
const secondCurrency = ref<string>('USD');

const {
  data: exchangeRateFirstQuery,
  refetch: refetchExchangeRate,
  isError: isExchangeError,
} = useExchangeRateQuery(firstCurrency);

const firstAmount = ref<number>(1);
const secondAmount = computed({
  get() {
    if (exchangeRateFirstQuery?.value?.rates) {
      const rate = exchangeRateFirstQuery.value.rates[secondCurrency.value];
      if (rate) {
        return firstAmount.value * rate;
      }
    }
    return 0;
  },
  set(value: number) {
    if (exchangeRateFirstQuery?.value?.rates) {
      const rate = exchangeRateFirstQuery.value.rates[secondCurrency.value];
      if (rate) {
        firstAmount.value = value / rate;
      }
    }
  },
});

const currencyItems = computed<Record<string, string>[]>(() => {
  if (!currencyList.value) {
    return [];
  }
  return Object.entries(currencyList.value).map(([code, name]) => ({
    value: code,
    text: `${code} - ${name}`,
  }));
});

watch(
  [firstCurrency, secondCurrency],
  ([newFirst, newSecond], [oldFirst, oldSecond]) => {
    // Prevent selecting the same currency for both fields
    if (newFirst === newSecond) {
      firstCurrency.value = oldSecond;
      secondCurrency.value = oldFirst;
    }
    // refetch the exchange rate since the firstCurrency has changed direction.
    if (newFirst === oldSecond && newSecond === oldFirst) {
      refetchExchangeRate();
    }
  }
);
</script>

<style scoped></style>
