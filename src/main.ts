import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';

// Vuetify
import 'vuetify/lib/styles/main.css';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
});

app.use(router);
app.use(VueQueryPlugin);
app.use(vuetify);
app.mount('#app');
