import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// ElementUI引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(ElementUI, {
  'size': 'mini',
  'zIndex': 3000
})

// svg引入
import Icon from 'vue2-svg-icon/Icon'
Vue.component('icon',Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
