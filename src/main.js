import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementui from 'element-ui'
import axios from 'axios'
import component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
import './perimission'

Vue.use(elementui)
Vue.use(component)

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
