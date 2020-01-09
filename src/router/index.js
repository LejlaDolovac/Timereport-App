import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);






const routes = [
  {
    path: '/',
    name: 'loginPage',
    mode: 'history ',
    component: () => import('../views/loginPage.vue')
  },
 
  {
    path: '/Firstpage',
    name: 'Firstpage',
    mode: 'history',
    component: () => import('../views/Firstpage.vue')
  },
  
  {
    path: '/myTimeReport',
    name: 'myTimeReport',
    mode: 'history',
    component: () => import('../views/myTimeReport.vue')
  },
  {
    path: '/myPage',
    name: 'myPage',
    mode: 'history',
    component: () => import('../views/myPage.vue')
  },
  {
    path: '/hamburgerMenu',
    name: 'hamburgerMenu',
    mode: 'history',
    component: () => import('../components/hamburgerMenu.vue')
  },
  
  {
    path: '/about',
    name: 'about',
    mode: 'history',
    component: () => import('../views/About.vue')
  },
  {
    path: '/timelist',
    name: 'TimeLlist',
    mode: 'history',
    component: () => import('../components/TimeList.vue')
  },
  
];

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
