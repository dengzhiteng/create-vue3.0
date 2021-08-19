import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/discover",
  },
  {
    path: "/discover",
    component: () => import("../views/discover"),
  },
  {
    path: "/my",
    component: () => import("../views/my"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
