export const state = () => ({
    isAuth: false,
    data: null,
    chosenCourse: null
})

export const getters = {
  isAuthenticated(state) {
    return state.isAuth
  },

  user(state) {
    return state.data
  },

  chosenCourse(state) {
    return state.chosenCourse
  }
}

export const mutations = {
  setAuth: (state, value) => {
    state.isAuth = value
  },
  setUserData: (state, data) => {
    state.data = data;
  },
  setChosenCourse: (state, course_code) => {
    console.log('Choice updated:', course_code)
    state.chosenCourse = course_code;
  }
}

export const actions = {
  syncUser({
    commit
  }, user) {
    commit("setAuth", user !== null);
    if (user) {
      commit("setUserData", {
        email: user.email,
        name: user.displayName
      });
    } else {
      commit("setUserData", null);
    }
  }
}
