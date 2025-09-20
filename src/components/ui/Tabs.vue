<template>
  <v-tabs v-model="activeTab">
    <v-tab v-for="option in list" :key="option.id" :value="option.id">{{
      option.text
    }}</v-tab>
  </v-tabs>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface TabOption {
  id: string;
  text: string;
}

const props = defineProps<{ list: TabOption[]; modelValue: string }>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const activeTab = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
});
</script>
m
