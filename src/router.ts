import { createRouter, createWebHistory } from 'vue-router';
import UsersView from './views/UsersView.vue';
import TodoListView from './views/TodoListView.vue';

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', name: 'TabOne', component: UsersView },
  { path: '/todo-list', name: 'TodoList', component: TodoListView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
