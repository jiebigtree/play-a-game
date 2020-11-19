import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/dishes")
  },
  {
    path: "/barbecue",
    name: "barbecue",
    component: () => import("../views/barbecue")
  },
  {
    path: "/hotpot",
    name: "hotpot",
    component: () => import("../views/hotPot")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
