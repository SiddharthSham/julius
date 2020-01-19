<template>
  <div class="container">
    <div>
      <h1 class="main-title has-text-centered">
        Julius
      </h1>
      <h2 class="main-subtitle has-text-centered">
        An online Elective Management System
      </h2>
    </div>
    <div class="buttons">
      <button class="button is-info is-light is-rounded">
        <nuxt-link to='/auth/register'>Sign Up</nuxt-link>
      </button>
      <button class="button is-link is-light is-rounded">
        <a href="">Log In &rarr;</a>
      </button>
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
