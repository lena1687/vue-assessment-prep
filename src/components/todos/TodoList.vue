<template>
  <v-list v-for="option in list" :key="option.id">
    <TodoItem :item="option" @delete="emit('delete', $event)"></TodoItem>
  </v-list>
</template>

<script setup lang="ts">
import type { Todo } from '../../types/todo.ts';
import TodoItem from './TodoItem.vue';

defineProps<{ list: Todo[] }>();
const emit = defineEmits<{ (event: 'delete', id: string): void }>();
</script>
