import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dayjs from 'vue-dayjs'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCarousel from 'vue-carousel';


import {url} from './global/index'; 

Vue.use(dayjs)


Vue.use(VueCarousel);
Vue.use(VueAxios, axios)

axios.defaults.baseURL =url;

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
