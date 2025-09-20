<template>
  <v-text-field
    v-model="newItem"
    label="What needs to be done?"
    @keyup.enter="submit"
    @click:append="submit"
    append-icon="mdi-plus"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newItem = ref('');
const emit = defineEmits<{ (event: 'add', payload: string): void }>();

function submit() {
  if (newItem.value.trim() !== '') {
    emit('add', newItem.value.trim());
    newItem.value = '';
  }
}
</script>
