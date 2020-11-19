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
    name: "dishes-list",
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
    component: () => import("../views/hotpot")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
