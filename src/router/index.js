import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
