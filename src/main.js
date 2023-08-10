import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SoftPyramid from './views/SoftPyramid.vue';
import MISHome from './views/MISHome.vue';
import ApplyLeave from "./views/ApplyLeave.vue";
import SalaryPage from "./views/SalaryPage.vue";
import CreateAction from './views/CreateActionPage.vue'
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
     {
      path: "/applyLeave",
      name: "leavePage",
      component: ApplyLeave
         },
   {
      path: "/salary",
      name: "SalaryPage",
      component: SalaryPage
       },
       {
         path: "/actionPage",
         name: "createAction",
         component: CreateAction
          },
    ],
})

createApp(App).use(router).mount('#app')
