<style>
</style>


<script>
    import { FirebaseApp, User, Doc, Collection } from 'sveltefire';
    
    import firebase from "firebase/app";
    import 'firebase/firestore';
    import 'firebase/auth';
 
    const firebaseConfig = {
        apiKey: 'api-key',
        authDomain: 'project-id.firebaseapp.com',
        databaseURL: 'https://project-id.firebaseio.com',
        projectId: 'project-id',
        storageBucket: 'project-id.appspot.com',
        messagingSenderId: 'sender-id',
        appId: 'app-id',
        measurementId: 'G-measurement-id',
    }
 
    firebase.initializeApp(firebaseConfig)
</script> 


<svelte:head>
	<title>Julius</title>
</svelte:head>

<h1 class="is-size-1 has-text-centered">Great success!</h1>

<!-- 1. 🔥 Firebase App -->
<FirebaseApp {firebase}>
 
  <!-- 2. 😀 Get the current user -->
  <User let:user let:auth>
 
    <p>Howdy, {user.uid}</p>
    <button on:click={() => auth.signOut()}>Sign Out</button>
 
    <div slot="signed-out">
      <button on:click={() => auth.signInAnonymously()}>Sign In</button>
    </div>
 
    <!-- 3. 📜 Get a Firestore document owned by a user -->
    <Doc path={`posts/${user.uid}`} let:data={post} let:ref={postRef} log>
 
      <h2>{post.title}</h2>
 
      <span slot="loading">Loading post...</span>
      <span slot="fallback">
        <p>Demo post not created yet...</p>
 
        <button on:click={() => postRef.set({ title: 'I like Svelte' })}>
          Create it Now
        </button>
      </span>
 
      <!-- 4. 💬 Get all the comments in its subcollection -->
      <Collection
        path={postRef.collection('comments')}
        let:data={comments}
        let:ref={commentsRef}
        log>
        
        {#each comments as comment}
          <p>{comment.text}</p>
          <button on:click={() => comment.ref.delete()}>Delete</button>
        {/each}
 
        <hr />
 
        <button on:click={() => commentsRef.add({ text: 'Cool!' })}>
          Add Comment
        </button>
 
        <span slot="loading">Loading comments...</span>
 
      </Collection>
    </Doc>
  </User>
</FirebaseApp>
