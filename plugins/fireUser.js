import {
  fireDb
} from '@/services/firebase.js'

export default context => {
  const {
    store
  } = context
  fireDb.collection("users").doc(store.state.user.data.email).get()
    .then(doc => {
      if (doc.exists) {
            store.commit('user/setUserData', doc.data())
            console.log("fireUser: Document data:", doc.data());
      } else {
        console.log("fireUser: No such document!");
      }
    }).catch(function (error) {
      console.log("fireUser: Error getting document:", error);
    });
}
