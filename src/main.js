// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import MintUI from 'mint-ui'
import rem from './utils/rem'
import Itf from './utils/interface'
import confirm from './utils/confirm'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from './utils/i18n'
// import 'babel-polyfill'
// import Es6Promise from 'es6-promise'

// Es6Promise.polyfill()
// Vue.use(MintUI)
Vue.use(ElementUI);
rem.set()
confirm.alert()
// getHigh.getHigh()
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$util = Itf.INTERCHILD
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
