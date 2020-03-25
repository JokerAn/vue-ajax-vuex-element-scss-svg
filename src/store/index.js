import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import errorLog from './modules/errorLog'

Vue.use(Vuex)

export default new Vuex.Store({
  'modules': {
    user,
    errorLog: errorLog // 模块名称
  }
})
