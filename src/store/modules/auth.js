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
  setAuth({ commit }, email) {
    // сохраняем email если все ок
    localStorage.setItem("email", email);
    localStorage.setItem("isSignin", true);

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
