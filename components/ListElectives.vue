<template>
  <div class="elective-list">
    <div class="main-title is-size-3">Available Electives</div>
    <article class="panel pad-top is-dark">
      <p class="panel-heading">
        Semester 6 - CSE
      </p>

      <div v-if="loading" class="panel-block">
        Loading...
      </div>

      <div v-for="course in electives" :key="course.course_code" class="panel-block">
        <div class="level">
          <div class="level-left">
            <span class="tag is-rounded is-warning is-light pad-right"> {{ course.credits }} credits </span>
            {{ course.course_code }} - {{ course.title }}
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-light is-rounded is-primary"  @click="view(course.course_code)">View details</button>
            </div>
          </div>
        </div>
      </div>

    </article>
  </div>
</template>

<script>
  import {
    fireDb
  } from '@/services/firebase';

  export default {
    name: 'ListElectives',
    data() {
      return {
        electives: [],
        loading: true,
        clicked: false
      }
    },
    methods: {
      view(course_code) {
        this.$store.commit('user/setChosenCourse', course_code)
        this.$router.push('/apply/elective')
      }
    },
    mounted() {
      fireDb.collection("depts").doc('CSE').collection('6').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.electives.push(doc.data())
            this.loading = false
          });
        });
    }
  }

</script>

<style scoped>
  .list {
    max-width: 100%;
  }

  .pad-top {
    margin-top: 1rem;
  }

  .panel-block {
    min-height: 2rem;
    padding: 1.25rem 1.25rem;
  }

  .level {
    width: 100%;
  }

  .pad-right {
    margin-right: 1rem;
  }

</style>
