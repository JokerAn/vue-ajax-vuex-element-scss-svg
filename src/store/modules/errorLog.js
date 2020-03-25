const state = {
  'logs': []
}

const getters = {
  'logs': state => state.logs
}

const mutations = {
  'ADD_ERROR_LOG': (state, log) => {
    state.logs.push(log)
  },
  'CLEAR_ERROR_LOG': (state) => {
    state.logs.splice(0)
  }
}

const actions = {
  addErrorLog({ commit }, log) {
    commit('ADD_ERROR_LOG', log)
  },
  clearErrorLog({ commit }) {
    commit('CLEAR_ERROR_LOG')
  }
}

export default {
  'namespaced': true,// 使用的时候需要带文件名 this.$store.commit("模块名称/方法名称",参数)
  //this.$store.commit("errorLog/addErrorLog",'userInfo')  模块名才errorLog 是在src/store/index中定义的
  state,
  getters,
  mutations,
  actions
}
