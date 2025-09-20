<template>
  <v-list>
    <TodoItem
      v-for="option in list"
      :key="option.id"
      :item="option"
      @delete="emit('delete', $event)"
      @toggle-completed="emit('toggle-completed', $event)"
    ></TodoItem>
  </v-list>
</template>

<script setup lang="ts">
import type { Todo } from '../../types/todo.ts';
import TodoItem from './TodoItem.vue';

defineProps<{ list: Todo[] }>();
const emit = defineEmits<{
  (event: 'delete', id: string): void;
  (event: 'toggle-completed', id: string): void;
}>();
</script>
