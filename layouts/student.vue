<template>
  <div>
    <Nav/>
    <nuxt class="has-navbar-fixed-top has-navbar-fixed-bottom"/>
    <Bottomnav/>
  </div>
</template>

<style>
</style>

<script>
import Nav from '~/components/Nav.vue'
import Bottomnav from '~/components/Bottomnav.vue'
export default {
  components: {
    Nav,
    Bottomnav
  }
}
</script>
