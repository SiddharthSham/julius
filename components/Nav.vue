<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="main-title is-size-3 pad">Julius</span>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
      </div>

      <div class="navbar-end">
        <a class="navbar-item">
          About
        </a>

        <a class="navbar-item">
          Help
        </a>
        <div class="navbar-item">
          <nuxt-link to="/" class="button is-danger is-light is-rounded">
            Log Out
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Nav'

  }

</script>

<style>
  .pad {
    padding: 0rem 1rem;
  }

</style>
