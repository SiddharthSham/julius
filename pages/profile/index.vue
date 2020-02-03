<template>
  <div class="hero has-navbar-fixed-top has-navbar-fixed-bottom">
    <div class="hero-body">
      <div class="columns">
        <!-- <div class="column is-3 banner"></div> -->
        <div class="column">
            <div class="container is-fluid center">
            <h1 class="main-title is-size-1 has-text-left">Your profile</h1>
            <table class="table is-hoverable is-fullwidth">
                <tbody>
                    <tr v-for="(value, name) in this.$store.state.user.data" :key="name">
                        <th class="capitalize">{{ name }}:</th>
                        <td>{{ value }}</td>
                    </tr>
                </tbody>
            </table>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'student',
    middleware: 'auth'
  }

</script>

<style scoped>
  .banner {
    min-height: 85vh;
    overflow: hidden;
  }
  .capitalize {
      text-transform: capitalize;
  }
  .center {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 75vh;
  }
  .table {
      margin-top: 2rem;
  }

</style>
