<template>
  <div class="container">
    <div>
      <h1 class="main-title has-text-centered">
        Julius
      </h1>
      <h2 class="main-subtitle has-text-centered is-hidden-mobile">
        An online Elective Management System
      </h2>
    </div>
    <div class="buttons">
      <nuxt-link class="button is-link is-light is-rounded" to='/auth/register'>
        Sign Up
      </nuxt-link>
      <nuxt-link  class="button is-link is-light is-rounded" to='/auth/login'>
        Log In &rarr;
      </nuxt-link>

    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .buttons {
    padding: 1rem 0;
  }

</style>
