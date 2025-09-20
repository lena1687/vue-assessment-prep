<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card-title> Todo List </v-card-title>
          <v-card-text>
            <TodoForm @add="addTodo" />
            <Tabs v-if="todos.length" :list="todoTabs" v-model="activeTab" />
            <TodoList
              :list="filteredTodos"
              @delete="deleteTodo"
              @toggle-completed="completeTodo"
            />
          </v-card-text>
          <v-card-actions>
            <span v-if="!filteredTodos.length">No {{ activeTab }} todos.</span>
            <v-row class="d-flex align-center justify-space-between">
              <v-col cols="6">
                <span v-if="filteredTodos.length && activeCount > 0">{{
                  activeCount + ' items left'
                }}</span>
              </v-col>
              <v-col cols="6">
                <v-btn
                  v-if="completedCount"
                  @click="clearCompleted"
                  class="text-none mb-4"
                  color="primary"
                  variant="flat"
                  >Clear Completed</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Todo } from '../types/todo.ts';
import TodoForm from '../components/todos/TodoForm.vue';
import TodoList from '../components/todos/TodoList.vue';
import Tabs from '../components/ui/Tabs.vue';

const todos = ref<Todo[]>([]);
const activeTab = ref('all');

const todoTabs = [
  { id: 'all', text: 'all' },
  { id: 'active', text: 'active' },
  { id: 'completed', text: 'completed' },
];

const filteredTodos = computed(() => {
  if (activeTab.value === 'active') {
    return todos.value.filter((todo) => !todo.completed);
  } else if (activeTab.value === 'completed') {
    return todos.value.filter((todo) => todo.completed);
  }
  return todos.value;
});

const activeCount = computed(() => {
  return todos.value.filter((todo) => !todo.completed).length;
});

const completedCount = computed(() => {
  return todos.value.filter((todo) => todo.completed).length;
});

function addTodo(text: string) {
  todos.value.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: new Date(),
  });
}

function deleteTodo(id: string) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

function completeTodo(id: string) {
  const checkedTodo = todos.value.find((todo) => todo.id === id);
  if (checkedTodo) {
    checkedTodo.completed = !checkedTodo.completed;
  }
}

function clearCompleted() {
  todos.value = todos.value.filter((todo) => !todo.completed);
}
</script>
