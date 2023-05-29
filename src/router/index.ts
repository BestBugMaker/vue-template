import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/homePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/tst", component: Home },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
