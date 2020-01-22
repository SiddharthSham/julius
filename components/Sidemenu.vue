<template>
  <aside class="menu sidenav">
    <p class="menu-label">
      Elective
    </p>
    <ul class="menu-list">
      <li><a>Overview</a></li>
      <li>
        <a>Assesments</a>
        <ul>
          <li><a>Periodical 1</a></li>
          <li><a>Periodical 2</a></li>
          <li><a>End Semester</a></li>
        </ul>
      </li>
      <li><a>Course Materials</a></li>
      <li><a>Assignments</a></li>
      <li><a>FAQ</a></li>
    </ul>
    <p class="menu-label">
      Contact
    </p>
    <ul class="menu-list">
      <li><a>Coordinator</a></li>
      <li><a>Sysadmin</a></li>
    </ul>
  </aside>
</template>

<script>
  export default {
      name: 'Sidemenu'
  }

</script>

<style>
.sidenav {
    position: sticky;
    position: -webkit-sticky;
    top: 2rem;
}
</style>
