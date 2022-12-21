import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/routers/index';
import './assets/css/style.css'

const app = createApp(App);
app.config.globalProperties.gUserName = '';
app.config.globalProperties.gUserType = -1;
app.use(router);
app.mount('#app');

export { app };
