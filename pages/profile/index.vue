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
            <div class="buttons">
              <div class="button is-danger is-rounded is-light" :class="{ 'is-loading': delUser }"
                @click="confirmation">Delete Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <modal name="delconfirm" classes="modal is-active" @before-close="delUser = false">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="section">
          <h3 class="title has-text-white">Confirmation</h3>
          <p class="subtitle is-size-4 has-text-white">Are you sure you want to delete your account? This action cannot be undone!</p>
          <div class="buttons">
            <button class="button is-danger is-rounded" :class="{ 'is-loading': confirmed }" @click="deleteUser">Yes,
              delete</button>
            <button class="button is-success is-rounded" @click="cancel">Nope, cancel</button>
          </div>
        </div>
      </div>
    </modal>

  </div>
</template>

<script>
  import {
    fireAuth
  } from '@/services/firebase';

  export default {
    layout: 'student',
    middleware: 'auth',
    data() {
      return {
        confirmed: false,
        delUser: false
      }
    },
    methods: {
      confirmation() {
        this.delUser = true
        this.$modal.show('delconfirm')
      },
      cancel() {
        this.$modal.hide('delconfirm')
        this.delUser = false
      },
      deleteUser() {
        this.confirmed = true
        fireAuth.currentUser.delete()
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          this.confirmed = false
          console.log('Error deleting user:', error)
          if (error.code == "auth/requires-recent-login"){
            let c = confirm('This action requires you to reauthenticate')
            if (c) {
              this.$router.push('/auth/login')
            } else {
              this.cancel()
            }
          }
        });
      }
    }
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
