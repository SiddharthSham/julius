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
        <div class="navbar-item">
          <input class="input" type="text" placeholder="Search">
        </div>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">
          About
        </a>

        <a class="navbar-item">
          Help
        </a>
        <div class="navbar-item">
          <button @click="logout" class="button is-danger is-outlined">
            Log Out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { fireAuth } from '@/services/firebase';

  export default {
    name: 'Nav',
    methods: {
      logout() {
        fireAuth.signOut()
        .then(() => {
          console.log('User signed out!')
          this.$router.push('/auth/login')
        })
        .catch(err => console.log(err))
      } 
    }

  }

</script>

<style>
  .pad {
    padding: 0rem 1rem;
  }

</style>
