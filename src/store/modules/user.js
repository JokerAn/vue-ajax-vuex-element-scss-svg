/*
 *   用户相关store
 *
 */

const state = {
  'token': ''
}

const getters = {
  'token': state => state.token
}

const mutations = {
  'SET_TOKEN': (state, token) => {
    state.token = token
  }
}

const actions = {
  // 退出登录
  LogOut({ commit }) {
    setTimeout(() => {
      commit('SET_TOKEN', '')
    })

  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
