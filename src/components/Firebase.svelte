<script>
    import { FirebaseApp, User, Doc, Collection } from 'sveltefire';
    
    import firebase from "firebase/app";
    import 'firebase/firestore';
    import 'firebase/auth';
 
    const firebaseConfig = {
		apiKey: "AIzaSyClprWliE3UIWiJs31zw4jKNbNGPlbZJWI",
		authDomain: "julius-e71be.firebaseapp.com",
		databaseURL: "https://julius-e71be.firebaseio.com",
		projectId: "julius-e71be",
		storageBucket: "julius-e71be.appspot.com",
		messagingSenderId: "816281274509",
		appId: "1:816281274509:web:6ffbf36a4af19f37557ac4"
  	};
 
    export { FirebaseApp, User, Doc, Collection, firebase, firebaseConfig }
</script> 
