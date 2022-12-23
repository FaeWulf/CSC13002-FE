import * as Vue from 'vue';
import App from './App.vue';
import router from '../src/routers/index';
import './assets/css/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = Vue.createApp(App);
app.config.globalProperties.gUserName = '';
app.config.globalProperties.gUserType = -1;
app.config.globalProperties.base_url = 'http://127.0.0.1:3000';
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');

export { app };
