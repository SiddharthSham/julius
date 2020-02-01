
import { fireAuth } from '@/services/firebase.js'

export default context => {
  const { store } = context
  return new Promise((resolve, reject) => {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.dispatch('user/syncUser', user))
      }
      return resolve()
    })
  })
}