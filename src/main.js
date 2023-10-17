import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SoftPyramid from './views/SoftPyramid.vue';
import MISHome from './views/MISHome.vue';
import ApplyLeave from "./views/ApplyLeave.vue";
import SalaryPage from "./views/SalaryPage.vue";
import CreateAction from './views/CreateActionPage.vue'
import Increments from './views/Increments.vue'
import DailyStatus from './views/DailyStatus.vue'
import leaves from './views/LeavesSoftPyramid.vue'
import Assets from './views/Assets.vue'
import Entertainment from './views/Entertainemet.vue'
import createdHook from './views/createdHook.vue'
import { createRouter, createWebHistory } from 'vue-router';

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
      {
         path: "/increments",
         name: "incrementPage",
         component: Increments
      },
      {
         path: "/dailyStatus",
         name: "CheckDailyStatus",
         component: DailyStatus
      },
      {
         path: "/leaves",
         name: "leaves of  softPyramid",
         component: leaves
      },
      {
         path: "/assets",
         name: "Assets page odf softPyramid",
         component: Assets
      },
      {
         path: "/entertainment",
         name: "entertainment page odf softPyramid",
         component: Entertainment
      },
      {
         path: "/createdHook",
         name: "createdHook",
         component: createdHook
      },
   ],
})
createApp(App).use(router).mount('#app')
