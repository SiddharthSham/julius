<template>
  <div class="hero is-fullheight">
    <div class="columns">
      <div class="column is-4 banner">
        <h1 class="is-size-1 has-text-centered">Register</h1>
        <p class="content has-text-centered is-size-5 is-hidden-mobile">Prepare to supercharge your education by
          choosing
          the right electives.</p>
      </div>
      <div class="column form">
        <label class="label">Details</label>

        <div class="field">
          <!-- <label class="label">Name</label> -->
          <div class="control">
            <input name="name" class="input" type="text" placeholder="Your name" v-model="name">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Username</label> -->
          <div class="control">
            <input name="username" class="input" type="text" placeholder="Username" v-model="username">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input name="email" class="input" type="email" placeholder="Email " v-model="email">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input name="password" class="input" type="password" placeholder="Password " v-model="password">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input name="rollno" class="input" type="text" placeholder="Roll Number " v-model="rollno">
          </div>
        </div>

        <div class="control pad-top">
          <label class="radio">
            <input type="radio" name="answer">
            Student
          </label>
          <label class="radio">
            <input type="radio" name="answer">
            Teacher
          </label>
        </div>

        <div class="field pad-top">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox">
              I agree to the <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field is-grouped ">
          <div class="control">
            <button class="button is-link is-light is-rounded" @click="handleSubmit">Submit &rarr;</button>
          </div>
          <div class="control">
            <nuxt-link class="button is-danger is-light is-rounded" to='/'>
              Cancel
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { fireAuth } from '@/services/firebase';

    export default {
        data(){
            return {
                name : "",
                username : "",
                email : "",
                password : "",
                rollno : ""
            }
        },
        methods : {
            handleSubmit(){
              if (this.password.length > 0) {
                fireAuth.createUserWithEmailAndPassword(this.email, this.password)
                .then(res => {
                  console.log('User created!')
                  console.log(res)
                  this.$router.push("/dashboard")
                })
                .catch((err) => {
                  console.log(err);
                })
                    // 
                }
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
    /* max-height: 100vh; */
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 0;
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
    padding-top: 1.5rem;
  }

</style>
