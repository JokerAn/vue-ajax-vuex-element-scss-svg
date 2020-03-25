import Vue from 'vue'
import VueRouter from 'vue-router'
import infoRelease from '@/router/modules/info-release'
import systemSetting from '@/router/modules/system-setting'
import Login from '../views/login'
import Icons from '../views/icons'
const originalPush = VueRouter.prototype.push
// 解决this.$router.push()跳转当前页面

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

export const routes = [
  ...infoRelease,
  ...systemSetting
]
//最终路由asdfasdfadf
let fullRoutes = [
  ...routes,
  {
    'path': '/login',
    'name': 'login',
    'component': Login
  },{
    'path': '/icons',
    'name': 'icons',
    'component': Icons
  },{
    //跳转路由失败 信息发布-文章管理 
    'path': '*',
    'redirect': '/login'
  }
]
const router = new VueRouter({
  'mode': 'hash',
  'base': process.env.BASE_URL,
  routes: fullRoutes
})
// 不拦截登录白名单
const whileList = ['/login']

router.beforeEach((to, from, next) => {
  next()
  // next({
  //   'path': `/login?redirect=${to.path}`
  // })
 
})

router.afterEach(() => {
  window.scrollTo(0, 0)
  // finish progress bar
})
export default router
