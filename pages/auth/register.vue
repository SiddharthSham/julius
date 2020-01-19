<template>
  <div class="hero is-fullheight">
    <div class="columns">
      <div class="column is-4 banner">
        <h1 class="is-size-1 has-text-centered">Register</h1>
        <p class="content has-text-centered is-size-5 is-hidden-mobile">Prepare to supercharge your education by choosing
          the right electives.</p>
      </div>
      <div class="column form">
        <label class="label">Details</label>

        <div class="field">
          <!-- <label class="label">Name</label> -->
          <div class="control">
            <input class="input" type="text" placeholder="Your name">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Username</label> -->
          <div class="control">
            <input class="input" type="text" placeholder="Username">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input class="input" type="email" placeholder="Email ">
          </div>
        </div>

        <div class="field">
          <!-- <label class="label">Email</label> -->
          <div class="control">
            <input class="input" type="password" placeholder="Password ">
          </div>
        </div>

        <div class="field pad-top">
          <label class="label">Subject</label>
          <div class="control">
            <div class="select">
              <select>
                <option>Choose your subject</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>
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
            <button class="button is-link is-light is-rounded">Submit &rarr;</button>
          </div>
          <div class="control">
            <button class="button is-light is-danger is-rounded">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

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
  .input:active, .input:focus {
    border-color: none;
    box-shadow: none;
    border-bottom: 1px solid grey;
  }

  .pad-top {
    padding-top: 2rem;
  }

</style>
