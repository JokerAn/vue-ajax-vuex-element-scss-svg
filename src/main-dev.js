import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
//引入高德地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '2c8980d8acfe31ef2105c72730d4c39e',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'
  ],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
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
