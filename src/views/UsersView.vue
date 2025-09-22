<template>
  <div>
    <v-container>
      <div v-if="isLoading">Loading users...</div>
      <div v-else-if="isError">{{ errorMessage }}</div>
      <DataTable title="Users" :data="safeUsers" :columns="columns" />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import DataTable, { type Column } from '../components/ui/DataTable.vue';
import { useUsersQuery } from '../query/users';

const columns: Column[] = [
  { title: 'Id', key: 'id', sortable: false },
  { title: 'Name', key: 'name' },
  { title: 'Username', key: 'username' },
  { title: 'Email', key: 'email' },
];

const { data: users, isLoading, isError, error } = useUsersQuery();

const safeUsers = computed(() => users.value ?? []);

const errorMessage = computed(
  () => error?.value?.message || 'Failed to load users'
);
</script>
