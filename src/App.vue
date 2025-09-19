<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer />
      <v-btn to="/users" variant="text" router>Users</v-btn>
      <v-btn to="/todo-list" variant="text" router>Todo List</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
