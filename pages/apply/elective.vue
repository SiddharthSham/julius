<template>
  <section class="hero">
    <div class="hero-body">
      <div class="columns">
        <div class="column pad-top is-2 sidenav is-hidden-touch">
          <Sidemenu />
        </div>
        <div class="column dash" v-if="this.$store.state.user.chosenCourse">
          <div class="box pad-top">
            <div class="main-title is-size-3">Applying to: {{ this.$store.state.user.chosenCourse }}</div>

            <div class="tags">
              <span class="tag is-warning is-light is-rounded">3 credits</span>
              <span class="tag is-warning is-light is-rounded">Theory + Lab</span>
            </div>

            <div class="pad-top subtitle is-family-monospace is-size-5">Course details:</div>
            <p class="content is-size-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut tempora amet temporibus nam corrupti
              culpa eveniet, facere dolores ipsa omnis unde labore voluptatem quia laborum. Mollitia reprehenderit hic
              quisquam.
            </p>

            <div class="pad-top subtitle is-family-monospace is-size-5">Textbook and References:</div>
            <p class="content is-size-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure voluptatem sequi aliquid.
            </p>

            <div class="pad-top subtitle is-family-monospace is-size-5">Syllabus:</div>
            <h6 class="is-size-6 has-text-weight-bold">UNIT 1</h6>
            <p class="content is-size-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magnam nostrum ad voluptas distinctio
              porro, enim minima ratione aperiam hic quos, ducimus sequi, architecto dolorem debitis reiciendis
              assumenda vel. Quibusdam.
            </p>
            <h6 class="is-size-6 has-text-weight-bold">UNIT 2</h6>
            <p class="content is-size-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aut placeat iusto aspernatur dignissimos
              sit voluptatibus in accusamus inventore. Dolore quam repellat laboriosam ipsam velit suscipit, eveniet
              maiores fuga quaerat!
            </p>

            <div class="buttons">
              <button class="button is-rounded is-light is-primary" @click="apply">Apply now</button>
              <nuxt-link to="/dashboard" class="button is-rounded is-light is-info ">
                Go back
              </nuxt-link>
            </div>
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
    middleware: ['auth', 'electiveChosen'],
    components: {
      Sidemenu
    },
    data() {
      return {
        electiveData: null
      }
    },
    mounted() {
      let me = this
      fireDb.collection("depts").doc('cse').collection('6').doc(this.$store.state.user.chosenCourse).get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            me.electiveData = doc.data()
          } else {
            console.log("No such document!");
          }
        }).catch(function (error) {
          console.log("Error getting document:", error);
        });
    },
    methods: {
      apply() {
        fireDb.collection('applications').doc('pending').get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch(function (error) {
            console.log("Error getting document:", error);
          });

      }
    }
  }

</script>

<style scoped>
  .tags {
    margin-top: 0.5rem;
  }

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
