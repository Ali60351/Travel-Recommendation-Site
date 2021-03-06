// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// jshint esversion:6
/* eslint semi: ["error", "always"] */

import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import VueParticles from 'vue-particles';
import 'vuetify/dist/vuetify.min.css';
import StarRating from 'vue-star-rating';

Vue.use(VueParticles);

Vue.component('star-rating', StarRating);

Vue.use(Vuetify, { theme: {
  primary: '#7DB8DE',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
