import Vue from 'vue'
import Vuex from 'vuex'
import AuthorStore from './author-store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    author: AuthorStore
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {}
})
