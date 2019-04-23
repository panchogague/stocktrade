import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {routes} from './routes'
import store from './store/store'
Vue.config.productionTip = false

Vue.filter('currency',(value)=>{
  return '$' + value.toLocaleString();
});
Vue.use(VueResource);
Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
