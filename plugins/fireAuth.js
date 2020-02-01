
import { fireAuth } from '@/services/firebase.js'
import store from 'vuex';

export default context => {
  const { store } = context
  return new Promise((resolve, reject) => {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.dispatch('syncUser', user))
      }
      return resolve()
    })
  })
}