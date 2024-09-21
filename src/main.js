import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import './assets/tailwind.css';
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/HomPage.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';


const routes = [
  {
    path:'/',
    component : HomePage,
    name: HomePage,
  },
  {
    path: '/login',
    component: Login,
    name: Login,
  },
  {
    path: '/signup',
    component: Signup,
    name: Signup,
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

