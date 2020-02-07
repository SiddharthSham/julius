<template>
  <section class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column pad-top is-2 sidenav is-hidden-touch">
          <Sidemenu />
        </div>
        <div class="column dash">
          <div class="box pad-top">
            <div class="main-title is-size-3">Applying to: {{ this.$store.state.user.chosenCourse }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Sidemenu from '~/components/Sidemenu.vue';
  import {
    fireDb
  } from '@/services/firebase';

  export default {
    layout: 'student',
    middleware: 'auth',
    components: {
      Sidemenu
    },
    data() {
      return {
        electiveData: null
      }
    },
    mounted() {
      fireDb.doc("depts/cse/6/" + this.$store.state.user.chosenCourse).get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            this.electiveData = doc.data()
          } else {
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }

</script>

<style scoped>
  .dash {
    /* height: 300vh; */
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
