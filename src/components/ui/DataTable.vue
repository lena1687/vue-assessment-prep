<template>
  <v-card :title="title" flat>
    <v-data-table :headers="columns" :items="data || []" />
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

export interface Column {
  title: string;
  key: string;
  sortable?: boolean;
}

export interface DataItem {
  id?: string | number;
  [key: string]: string | number | undefined;
}

defineProps<{
  title: string;
  columns: Column[];
  data: DataItem[] | undefined;
}>();
</script>
