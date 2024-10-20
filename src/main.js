import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/tailwind.css';
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomPage.vue';
import UserDashboard from './pages/UserDashboard.vue';
import store from './store';



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
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).use(store).mount("#app");

