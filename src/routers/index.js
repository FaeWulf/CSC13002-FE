import { createRouter, createWebHistory } from 'vue-router';

import Home from '../components/Home.vue';
import Search from '../components/Search.vue';
import Management from '../components/Management.vue';
import About from '../components/About.vue';

const routes = [
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/management', component: Management },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
