<template>
  <section class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column is-2 sidenav is-hidden-touch">
          <Sidemenu/>
        </div>
        <div class="column dash">
          <div class="box pad-top">
            <div class="level">
              <div class="level-left">
            <h3 class="is-size-5">👋 Hi <span class="name">{{ this.$store.state.user.data.name }}</span>! What would you like to do today?</h3>
              </div>
              <div class="level-right">
                <div class="buttons">
                  <button class="button is-light is-rounded is-primary">Explore electives</button>
                  <button class="button is-light is-rounded is-info">FAQ</button>
                </div>
              </div>
            </div>
          </div>

          <div class="pad-top">
            <Upcoming/>
          </div>

          <div class="pad-top">
            <Resources/>
          </div>

          <div class="pad-top">
            <ListElectives/>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidemenu from '~/components/Sidemenu.vue';
import Upcoming from '~/components/Upcoming.vue';
import Resources from '~/components/Resources.vue';
import ListElectives from '~/components/ListElectives.vue'
import { fireDb } from '@/services/firebase';

  export default {
    layout: 'student',
    middleware: 'auth',
    components: {
      Sidemenu,
      Upcoming,
      Resources,
      ListElectives
    }
  }

</script>

<style scoped>

.dash {
    padding-bottom: 5rem;
}
.pad-top {
  margin-top: 2.5rem;
}
.pad-top-s {
  margin-top: 1rem;
}
.name {
  text-transform: capitalize;
}
.sidenav {
  padding-left: 0;
  padding-right: 0;
}
</style>
