
import leftlist from './home/left-list.vue'
import top from './home/top.vue'
import breadrunmb from './commen/bread-crunmd.vue'

export default {
  install (Vue) {
    Vue.component('leftlist', leftlist)
    Vue.component('top', top)
    Vue.component('bread-crunmb', breadrunmb)
  }
}
