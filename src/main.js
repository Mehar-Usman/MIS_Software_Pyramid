import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SoftPyramid from './views/SoftPyramid.vue';
import MISHome from './views/MISHome.vue';
import { createRouter , createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
     {
        path: "/",
        name: "LoginPage",
        component: SoftPyramid
     },
     {
        path: "/home",
        name: "homePage",
        component: MISHome
     },
    ],
})

createApp(App).use(router).mount('#app')
