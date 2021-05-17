<template>
  <div class="header">
    <img alt="Vue logo" class="logo" src="../assets/logo.png">
    <div class="form-aut">
      <button v-on:click="postUserLogin">LOGIN</button> /
      <button v-on:click="logOut">LOGOUT</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Header',
  methods: {
    async postUserLogin() {
      try {
        // const res = await axios.post('https://api.petfinder.com/v2/oauth2/token')
        const res = await axios({
          method: 'post',
          url: 'https://api.petfinder.com/v2/oauth2/token',
          data: {
              "grant_type":"client_credentials",
              "client_id":"v3YvEB7MQAmosLDjPHKa3LWyfEikMU5GVzZqNLF77lFP2hsKuQ",
              "client_secret":"91BEGtP8Iv5UcmGpEljgKTzYCmNwUAvCwMSyFi1H"
          }

        })
        const data = `${res.data.token_type} ${res.data.access_token}`
        localStorage.setItem('jwt', data)
      } catch (error) {
        if (typeof error.response.data.meta.errors !== 'undefined') {
          this.errors = error.response.data.meta.errors
        }
      }
    },
    logOut() {
        localStorage.removeItem('jwt');
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 60px;
  height: 60px;
}
</style>
