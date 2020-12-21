import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import aState from "./states/aState";
import bState from "./states/bState";
import aMutations from "./mutations/aMutation";
import bMutations from "./mutations/bMutation";
import aGetters from "./getters/aGetter";
import bGetters from "./getters/bGetter";

export default new Vuex.Store({
  state: {
    ...aState,
    ...bState
  },
  mutations: {
    ...aMutations,
    ...bMutations
  },
  getters: {
    ...aGetters,
    ...bGetters
  },
  actions: {},
  modules: {}
});
