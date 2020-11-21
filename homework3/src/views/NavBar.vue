<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to = "/postitapp">
          <img src="../assets/logo.png" alt="postIt">
        </router-link>
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container" @click="openDropdown">
        <img :src="profile.avatar" class="avatar">
      </div>
    </nav>
    <div class="drop-down-container" v-if="this.open">
      <span id="user-name">{{ profile.firstname + " " + profile.lastname }}</span>
      <span id="user-email"> {{profile.email}}</span>
      <span class="separator"></span>
      <span>
        <router-link to = "browsepage">Browse</router-link>
      </span>
      <span class="separator"></span>
      <span>
        <router-link to = "/">Log Out</router-link>
      </span>
    </div>
  </header>
</template>

<script>
import Profile from '../models/Profile'

export default {
  name: "NavBar",
  data() {
    return {
      profile: new Profile("John", "Doe", "john.doe@example.com", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
      open: false
    }
  },
  methods: {
    openDropdown: function() {
      console.log("asdf");
      if(this.open === false){
        this.open = true;
      }
      else{
        this.open = false
      }
    }
  }
}
</script>

<style scoped>

</style>