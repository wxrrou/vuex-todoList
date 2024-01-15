import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入router
import store from './store'; // 引入store
import './style.css';

const app = createApp(App)

app
    .use(store) // 使用 store
    .use(router) // 使用 router
    .mount('#app')
