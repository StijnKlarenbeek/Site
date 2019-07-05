import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// import VueFullPage from 'vue-fullpage.js';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import GlobalComponents from './index';

// Vue.use(VueFullPage);

Vue.config.productionTip = false;
Vue.use(GlobalComponents);

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app');
