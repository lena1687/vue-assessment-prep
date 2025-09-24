<template>
  <v-btn
    @click="handleClick"
    :class="['calc-button', { wide: item.wide }]"
    :color="item.color"
    >{{ item.label }}</v-btn
  >
</template>

<script setup lang="ts">
export interface CalcButtonConfig {
  label: string;
  value: string;
  color?: string;
  wide?: boolean;
}
const props = defineProps<{ item: CalcButtonConfig }>();
const emit = defineEmits<{ (event: 'press', payload: string): void }>();

function handleClick() {
  emit('press', props.item.value);
}
</script>
