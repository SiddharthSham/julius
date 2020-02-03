<template>
  <div class="elective-list">
    <div class="main-title is-size-3">Available Electives</div>
    <article class="panel pad-top-s is-dark">
      <p class="panel-heading">
        Semester 6 - CSE
      </p>

      <div class="panel-block">
        <div class="level">
          <div class="level-left">
            Neural Networks and Deep Learning
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-light is-rounded is-primary">View details</button>
              <button class="button is-light is-rounded is-info">Apply</button>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-block">
        <div class="level">
          <div class="level-left">
            Game Theory
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-light is-rounded is-primary">View details</button>
              <button class="button is-light is-rounded is-info">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div class="level">
          <div class="level-left">
            Cryptography
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-light is-rounded is-primary">View details</button>
              <button class="button is-light is-rounded is-info">Apply</button>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-block">
        <div class="level">
          <div class="level-left">
            Android App Development
          </div>
          <div class="level-right">
            <div class="buttons">
              <button class="button is-light is-rounded is-primary">View details</button>
              <button class="button is-light is-rounded is-info">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    name: 'ListElectives'
  }

</script>

<style>
  .list {
    max-width: 100%;
  }

  .panel-block {
    min-height: 2rem;
    padding: 1.25rem 1.25rem;
  }

  .level {
    width: 100%;
  }

</style>
