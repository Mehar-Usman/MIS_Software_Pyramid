import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SoftPyramid from './views/SoftPyramid.vue';
import { createRouter , createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
     {
        path: "/",
        name: "LoginPage",
        component: SoftPyramid
     },
    ],
})

createApp(App).use(router).mount('#app')
