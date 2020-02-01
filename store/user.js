export const state = () => ({
    isAuth: false,
    data: null
})

export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  },

  user(state) {
    return state.data
  }
}

export const mutations = {
  setAuth: (state, value) => {
    state.isAuth = value
  },
  setUserData: (state, data) => {
    state.data = data;
  }
}

export const actions = {
  syncUser({
    commit
  }, user) {
    commit("setAuth", user !== null);
    if (user) {
      commit("setUserData", {
        //   displayName: user.displayName,
        email: user.email
      });
    } else {
      commit("setUserData", null);
    }
  }
}
