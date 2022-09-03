import { createStore } from 'vuex'

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  uuid: 0,
  login: false
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  changeUuid (state, uuid) {
    state.uuid = uuid;
  },
  changeLogin(state, login){
    state.login = login;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  changeUuid: ({ commit }, uuid) => commit('changeUuid',uuid),
}

// getters are functions.
const getters = {
  uuid : state => state.uuid,
  login: state => state.login
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations
})