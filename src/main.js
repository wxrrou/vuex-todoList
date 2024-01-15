import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import store from './store'; // 引入store


createApp(App)
    .use(store)
    .mount('#app')
