import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'vue-fullpage'
// import 'vue-fullpage.js'
// 全屏滚动 vue-fullpage.js
// import 'fullpage.js/vendors/scrolloverflow'
import px2rem from './utils/px2rem'
import VueFullpage from 'vue-fullpage.js'
import jquery from 'jquery'
import i18n from "./locale";
Vue.prototype.$ = jquery
px2rem();
Vue.use(VueFullpage)
Vue.config.productionTip = false

new Vue({
  VueFullpage,
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
