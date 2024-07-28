import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "payment",
    component: () => import("../pages/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
