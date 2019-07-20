import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import GlobalComponents from './index';

/**
 * Swiper slider
 */
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

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
