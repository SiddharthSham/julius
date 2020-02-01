export const state = () => ({
  user: {
    isAuth: false,
    data: null
  },
})

export const getters = {
  isAuthenticated(state) {
    return state.user.isAuth
  },

  user(state) {
    return state.user.data
  }
}

export const mutations = {
  setAuth: (state, value) => {
    state.user.isAuth = value
  },
  setUserData: (state, data) => {
    state.user.data = data;
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
