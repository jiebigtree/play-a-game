export default [
  {
    path: "/meat-list",
    name: "meat-list",
    component: () => import("../../views/barbecue/meat"),
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/vegetable-list",
    name: "vegetable-list",
    component: () => import("../../views/barbecue/vegetable")
  },
  {
    path: "/fruit-list",
    name: "fruit-list",
    component: () => import("../../views/barbecue/fruit"),
    meta: {
      keepAlive: true
    }
  }
];
