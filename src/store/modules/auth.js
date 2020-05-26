const state = () => ({
  isSignin: false
});

// getters
const getters = {
  auth(state) {
    return state.isSignin;
  }
};

// mutations
const mutations = {
  SET_AUTH(state) {
    state.isSignin = true;
  }
};

// actions
const actions = {
  setAuth({ commit }) {
    commit("SET_AUTH");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
