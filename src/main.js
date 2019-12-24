import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementui from 'element-ui'
import axios from './utils/request.js'
import component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import './perimission'

Vue.use(elementui)
Vue.use(component)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
