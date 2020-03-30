import Vue from 'vue'
import Vuex from 'vuex'
import callback from './callback'
import favorite from './favorite'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    callback,
    favorite
  }
})
