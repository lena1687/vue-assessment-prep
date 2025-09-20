<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <v-card-title> Todo List </v-card-title>
          <v-card-text>
            <TodoForm @add="addTodo" />
            <TodoList :list="todos" @delete="deleteTodo" />
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo } from '../types/todo.ts';
import TodoForm from '../components/todos/TodoForm.vue';
import TodoList from '../components/todos/TodoList.vue';

const todos = ref<Todo[]>([]);

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
</script>
