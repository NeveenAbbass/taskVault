import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/tailwind.css';
import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomPage.vue';
import UserDashboard from './pages/UserDashboard.vue';
import Overview from './components/Overview.vue';
import SingleTask from './components/SingleTask.vue';
import Settings from './components/Settings.vue';

import store from './store';
import VueApexCharts from "vue3-apexcharts";
import { register } from 'swiper/element/bundle';

register();



const routes = [
  {
    path:'/',
    component : HomePage,
    name: HomePage,
  },

  {
    path:'/dash/:userName',
    component : UserDashboard,
    name: UserDashboard,
  },

  {
    path: "/overview",
    component: Overview,
    name: Overview,
  },

  {
    path: "/task",
    component: SingleTask,
    name: SingleTask,
  },

  {
    path: "/settings",
    component: Settings,
    name: Settings,
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).use(store).use(VueApexCharts).component("apexchart", VueApexCharts).mount("#app");

