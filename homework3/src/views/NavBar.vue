<template>
  <header>
    <nav>
      <div class="logo-container">
        <router-link to="/postitapp">
          <img src="../assets/logo.png" alt="postIt">
        </router-link>
      </div>
      <div class="search-container">
        <label>
          <input type="text" name="search">
        </label>
        <button type="button">Search</button>
      </div>
      <div class="avatar-container" @click="openDropdown">
        <img :src="profile.avatar" class="avatar" alt="Avatar">
      </div>
    </nav>
    <div class="drop-down-container" v-if="this.open">
      <span id="user-name">{{ profile.firstname + " " + profile.lastname }}</span>
      <span id="user-email"> {{ profile.email }}</span>
      <span class="separator"></span>
      <span>
        <router-link to="browsepage">Browse</router-link>
      </span>
      <span class="separator"></span>
      <span>
        <router-link to="/">Log Out</router-link>
      </span>
    </div>
  </header>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
      open: false
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile
    }
  },
  mounted() {
    this.$store.dispatch("getProfile");
  },
  methods: {
    openDropdown: function () {
      console.log("asdf");
      this.open = this.open === false;
    }
  }
}
</script>

<style scoped>

</style>