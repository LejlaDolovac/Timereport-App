import Vue from "vue";
import VueRouter from "vue-router";
import vueHeadful from "vue-headful";

Vue.use(VueRouter);
Vue.component("vue-headful", vueHeadful);

const routes = [
  {
    path: "/",
    name: "",
    mode: "history ",
    component: () => import("../views/Startpage.vue")
  },

  {
    path: "/Headpage",
    name: "Headpage",
    mode: "history",
    component: () => import("../views/Headpage.vue")
  },

  {
    path: "/myTimeReport",
    name: "Min-rapport",
    mode: "history",
    component: () => import("../views/Headpage.vue")
  },

  {
    path: "/myPage",
    name: "Min-sida",
    mode: "history",
    component: () => import("../views/myPage.vue")
  }
];

var router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
