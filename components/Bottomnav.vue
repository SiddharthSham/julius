<template>
  <nav class="navbar is-fixed-bottom is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/profile" class="navbar-item">
        <span class="has-text-weight-bold">My Profile</span>
      </nuxt-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="bottom-nav">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="bottom-nav" class="navbar-menu">
      <div class="navbar-start">

        <a class="navbar-item is-family-monospace">
          Game Theory <span class="left-pad tag is-success is-rounded">3</span>
        </a>
        <a class="navbar-item is-family-monospace">
          Cryptography
        </a>
        <a class="navbar-item is-family-monospace">
          Android
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <a class="button is-dark is-rounded">
            <strong>Settings</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style>
  .left-pad {
    margin-left: 0.5rem;
  }

  .right-pad {
    margin-right: 0.5rem;
  }

</style>
