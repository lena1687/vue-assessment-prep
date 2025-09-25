<template>
  <div>
    <v-container>
      <v-card class="custom-card">
        <v-card-title>Calculator</v-card-title>
        <v-card-text>
          <v-text-field label="Result" readonly v-model="display" />
          <div class="grid">
            <div class="grid-row" v-for="(row, rIdx) in buttonList" :key="rIdx">
              <CalculatorButton
                v-for="button in row"
                :key="button.value"
                :item="button"
                @press="clickBtn"
                :color="button.color || 'primary'"
              />
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CalculatorButton, {
  type CalcButtonConfig,
} from '../components/calculator/CalculatorButton.vue';

const numbersBtn: CalcButtonConfig[][] = [
  [
    { label: 'C', value: 'C', color: 'gray' },
    { label: '+/-', value: '+/-', color: 'gray' },
    { label: '%', value: '%', color: 'gray' },
    { label: '/', value: '/', color: 'orange' },
  ],
  [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '*', value: '*', color: 'orange' },
  ],
  [
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '-', value: '-', color: 'orange' },
  ],
  [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '+', value: '+', color: 'orange' },
  ],
  [
    { label: '0', value: '0', wide: true },
    { label: '.', value: '.' },
    { label: '=', value: '=', color: 'orange' },
  ],
];

const buttonList = ref<CalcButtonConfig[][]>(numbersBtn);
const display = ref<string>('0');
let currentInput = ref<string>('');

function clickBtn(value: string) {
  if (value === 'C') {
    display.value = '0';
    currentInput.value = '';
  } else if (value === '%') {
    currentInput.value += '/100';
    display.value = currentInput.value;
  } else if (value === '+/-') {
    currentInput.value = `-(${currentInput.value})`;
    display.value = currentInput.value;
  } else if (value === '=') {
    const VALID_EXPRESSION_REGEX = /^[0-9+\-*/().\s]+$/;
    if (VALID_EXPRESSION_REGEX.test(currentInput.value)) {
      try {
        // alternatively, use a safer evaluation method or libraries  mathjs or expr-eval. They are:
        // Safer than eval or new Function.
        // Supports advanced mathematical functions (e.g., sin, cos, log).
        // Handles syntax errors gracefully.
        const result = new Function(`return ${currentInput.value}`)();
        display.value = String(result);
        currentInput.value = String(result);
      } catch (error) {
        console.log('Calculation error:', error);
        display.value = 'Error';
        currentInput.value = '';
      }
    }
  } else {
    const SYMBOLS_REGEX = /^[+\-*/.]$/;
    const isOperator = (value: string) => SYMBOLS_REGEX.test(value);
    if (!currentInput.value && isOperator(value)) {
      // Prevent starting with an operator
      return;
    }

    const lastChar = currentInput.value.slice(-1);
    if (isOperator(lastChar) && isOperator(value)) {
      // Prevent consecutive operators
      return;
    }
    currentInput.value += value;
    display.value = currentInput.value;
  }
}
</script>

<style scoped>
.custom-card {
  width: 350px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
}
.grid-row {
  display: contents;
}
.calc-button.wide {
  grid-column: span 2;
}
</style>
