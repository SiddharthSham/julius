<template>
  <div class="hero is-fullheight">
    <div class="columns">
      <div class="column is-4 banner">
        <h1 class="is-size-1 has-text-centered">Login</h1>
        <p class="content has-text-centered is-size-5 is-hidden-mobile">
          Welcome back to Julius 👋</p>
      </div>
      <div class="column form">
        <label class="label">Credentials</label>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input class="input" type="text" placeholder="Username/Email " v-model="email">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="password">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link is-light is-rounded" @click="login">Login &rarr;</button>
          </div>
          <div class="control">
            <nuxt-link class="button is-danger is-light is-rounded" to='/'>
              Cancel
            </nuxt-link>
          </div>
          <div class="control float-right">
            <button class="button is-light is-rounded">Forgot Password?</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fireAuth } from '@/services/firebase';
  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      login() {
        fireAuth.signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
        }).catch(
          (err) => {
            console.log(err);
          }
        )
      }
    }
  }

</script>

<style>
  .banner {
    background: #C4CCD4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .field {
    padding-top: 1.5vw;
  }

  h1,
  p {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-weight: 300;
    color: #35495e;

  }

  .columns {
    min-height: 100vh;
    margin: 0;
  }

  .form {
    padding: 3vh 5vw;
  }

  .input {
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid lightgray;
    box-shadow: none;
  }

  .input:active,
  .input:focus {
    border-color: none;
    box-shadow: none;
    border-bottom: 1px solid grey;
  }

  .pad-top {
    padding-top: 2rem;
  }

  .float-right {
    margin-left: auto;
  }

</style>
