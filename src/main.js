import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/tailwind.css';
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomPage.vue';


const routes = [
  {
    path:'/',
    component : HomePage,
    name: HomePage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

createApp(App).use(router).mount("#app");

