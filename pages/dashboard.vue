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
            <h3 class="is-size-5">👋 Hi Siddharth! What would you like to do today?</h3>
              </div>
              <div class="level-right">
                <div class="buttons">
                  <button class="button is-light is-rounded is-primary">Explore electives</button>
                  <button class="button is-light is-rounded is-info">FAQ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Sidemenu from '~/components/Sidemenu.vue'
  export default {
    layout: 'student',
    components: {
      Sidemenu
    }

  }

</script>

<style>

.dash {
    height: 300vh;
}
.sidenav {
  padding:0;
}
.pad-top {
  margin-top: 2.5rem;
}
</style>
