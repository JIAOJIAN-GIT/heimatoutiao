
import leftlist from './home/left-list.vue'
import top from './home/top.vue'

export default {
  install (Vue) {
    Vue.component('leftlist', leftlist)
    Vue.component('top', top)
  }
}
