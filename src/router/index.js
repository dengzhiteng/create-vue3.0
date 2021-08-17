import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/me",
    name: "me",
    component: () => import("../views/Me.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
