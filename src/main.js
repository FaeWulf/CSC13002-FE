import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/routers/index';
import './assets/css/style.css'
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.config.globalProperties.gUserName = '';
app.config.globalProperties.gUserType = 0;
app.use(router);
app.mount('#app');

export { app };
