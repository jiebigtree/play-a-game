import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headInfo: {}
  },
  mutations: {
    setHeadInfo(state, headInfo) {
      state.headInfo = headInfo;
    }
  },
  getters: {
    getHeadInfo(state) {
      return state.headInfo;
    }
  },
  actions: {},
  modules: {}
});
