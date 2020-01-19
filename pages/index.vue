<template>
  <div class="container">
    <div class="content">
      <h1 class="title has-text-centered">
        Julius
      </h1>
      <h2 class="subtitle has-text-centered">
        An online Elective Management System
      </h2>
    </div>
    <div class="buttons">
      <div class="button is-link is-light is-rounded">Sign Up</div>
      <div class="button is-link is-light is-rounded">Log In &rarr;</div>
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
.content .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: calc(5rem + 1vw);
  color: #35495e;
  letter-spacing: 1px;
}

.content .subtitle {
  font-weight: 300;
  font-size: calc(2rem + 0.5vw);
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
