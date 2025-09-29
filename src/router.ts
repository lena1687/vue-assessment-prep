import { createRouter, createWebHistory } from 'vue-router';
import UsersView from './views/UsersView.vue';
import TodoListView from './views/TodoListView.vue';
import CalculatorView from './views/CalculatorView.vue';
import CurrencyConverterView from './views/CurrencyConverterView.vue';

const routes = [
  { path: '/', redirect: '/users' },
  { path: '/users', name: 'TabOne', component: UsersView },
  { path: '/todo-list', name: 'TodoList', component: TodoListView },
  { path: '/calculator', name: 'Calculator', component: CalculatorView },
  {
    path: '/currency-converter',
    name: 'CurrencyConverter',
    component: CurrencyConverterView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
