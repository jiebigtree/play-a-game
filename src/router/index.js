import Vue from "vue";
import VueRouter from "vue-router";
import barbecue from "./barbecue/barbecue";
import dished from "./dishes/dishes";
import hotpot from "./hotpot/hotpot";

Vue.use(VueRouter);

const routes = [
  ...barbecue,
  ...dished,
  ...hotpot,
  {
    path: "/",
    redirect: "/dishes",
    component: () => import("../views/dishes")
  },
  {
    path: "/dishes",
    name: "dishes",
    component: () => import("../views/dishes"),
    meta: { navShow: true }
  },
  {
    path: "/barbecue",
    name: "barbecue",
    component: () => import("../views/barbecue"),
    meta: { navShow: true }
  },
  {
    path: "/hotpot",
    name: "hotpot",
    component: () => import("../views/hotpot"),
    meta: { navShow: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
