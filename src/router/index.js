import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRouterBackButton from 'vue-router-back-button';
import { routerHistory, writeHistory } from 'vue-router-back-button';

Vue.use(VueRouter);
Vue.use(VueRouterBackButton, { router });
Vue.use(routerHistory, {writeHistory});





const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: () => import('../views/loginPage.vue')
  },
 
  {
    path: '/Firstpage',
    name: 'Firstpage',
    component: () => import('../views/Firstpage.vue')
  },
  
  {
    path: '/myTimeReport',
    name: 'myTimeReport',
    component: () => import('../views/myTimeReport.vue')
  },
  {
    path: '/myPage',
    name: 'myPage',
    component: () => import('../views/myPage.vue')
  },
  {
    path: '/hamburgerMenu',
    name: 'hamburgerMenu',
    component: () => import('../components/hamburgerMenu.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/timelist',
    name: 'TimeLlist',
    component: () => import('../components/TimeList.vue')
  },
  
];

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
