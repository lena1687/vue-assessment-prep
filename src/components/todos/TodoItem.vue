<template>
  <v-list-item :key="item.id">
    <template #prepend>
      <v-checkbox
        :model-value="item.completed"
        @change="$emit('toggle-completed', item.id)"
        hide-details
      />
    </template>

    <v-list-item-title>{{ item.text }}</v-list-item-title>

    <template #append>
      <v-btn icon size="x-small" @click="$emit('delete', item.id)"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import type { Todo } from '../../types/todo.ts';

defineProps<{ item: Todo }>();
defineEmits<{
  (event: 'delete', id: string): void;
  (event: 'toggle-completed', id: string): void;
}>();
</script>
