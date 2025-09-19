<template>
  <div>
    <nav>
      <router-link to="/users">Users</router-link> |
      <router-link to="/todo-list">Todo List</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>
