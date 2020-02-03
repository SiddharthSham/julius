<template>
  <nav class="navbar is-fixed-bottom is-light is-hidden-mobile" role="navigation" aria-label="main navigation">
    <div id="bottom-nav" class="navbar-menu">
      <div class="navbar-start">
        
        <nuxt-link to="/dashboard" class="navbar-item is-family-monospace">
          Dashboard
        </nuxt-link>
        <nuxt-link to="/profile" class="navbar-item is-family-monospace">
          My Profile
        </nuxt-link>
        <a class="navbar-item is-family-monospace">
          Grades <span class="left-pad tag is-success is-rounded">3</span>
        </a>
        <a class="navbar-item is-family-monospace">
          Attendance
        </a>
        <a class="navbar-item is-family-monospace">
          Timetable
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

<style scoped>
  .left-pad {
    margin-left: 0.5rem;
  }

  .right-pad {
    margin-right: 0.5rem;
  }

</style>
