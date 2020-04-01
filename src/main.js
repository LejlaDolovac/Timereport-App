import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import modal from 'vue-js-modal';
import "font-awesome/css/font-awesome.min.css";





library.add(faUserSecret);

Vue.use(VueResource);
Vue.use(modal, {dialog: true, dynamic: true});
Vue.use(Vuetify);
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
