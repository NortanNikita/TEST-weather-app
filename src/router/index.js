import Vue from "vue";
import VueRouter from "vue-router";
import Day from "../views/Day.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Day",
    component: Day,
  },
  {
    path: "/week",
    name: "Week",
    component: () =>
      import("../views/Week.vue"),
  },
  { 
    path: '*', 
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
