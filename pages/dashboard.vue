<template>
  <section class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-2 sidenav">
          <Sidemenu/>
        </div>
        <div class="column dash">
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidemenu from '~/components/Sidemenu.vue'
  export default {
    components: {
      Sidemenu
    }

  }

</script>

<style>

.dash {
    height: 300vh;
}
</style>
