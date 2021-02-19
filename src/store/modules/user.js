const SET_USER = 'SET_USER'

const state = {
  userinfo: {},
}

const getters = {
  userinfo: (state) => state.userinfo,
}

const mutations = {
  [SET_USER](state, data) {
    state.userinfo = data
  },
}

const actions = {
  setUser({ commit }, data) {
    commit('SET_USER', data)
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
