import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyAhsWD7C634tx4rrY1vVYQOcYD9ExRG10E",
        authDomain: "julius-97228.firebaseapp.com",
        databaseURL: "https://julius-97228.firebaseio.com",
        projectId: "julius-97228",
        storageBucket: "julius-97228.appspot.com",
        messagingSenderId: "552433737255",
        appId: "1:552433737255:web:604d9c6c927b7957b93802",
        measurementId: "G-QBW0MG5YXE"
    }
    firebase.initializeApp(config)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const fireDb = firebase.firestore()
const fireAuth = firebase.auth()

fireDb.enablePersistence()
  .then(() => {console.log('Persistence was set successfully!')})
  .catch(err => {
      console.log('Persistence failed with error:', err)
  });
  

export {fireDb, fireAuth}
