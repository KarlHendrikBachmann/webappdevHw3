<template>
   <body>
   <NavBar/>
    <section class="main-container">
      <div class='followBox' v-for="(user, index) in users" :key="index">
        <div class='followFlex'>
          <img :src="user.avatar">
          <h2>{{user.firstname + " " +user.lastname}}</h2>
          <button type='button' :class="{'followButton' : !user.selected, 'followButton selected' : user.selected}" @click="toggleItem(user)">
            <span v-if="!user.selected">Follow</span>
            <span v-if="user.selected">Followed</span>
          </button>
        </div>
      </div>
    </section>
  </body>
</template>

<script>

import User from '../models/User'
import NavBar from "@/views/NavBar";

export default {
  name: "BrowsePage",
  components: {NavBar},
  data() {
    return{
        userList: [
          new User("John","Doe","https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
          new User("Gordon","Freeman","https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"),
          new User("John","Doe","https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"),
          new User("Bruce","Wayne","https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"),
          new User("Richard","Stallman","https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80")
        ]
    }
  },
  computed: {
    users() {
      return this.$store.state.users
    }
  },
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    toggleItem: function(user) {
      if(user.selected === true){
        user.selected = false;
      }
      else{
        user.selected = true;
      }
    }
  }
}
</script>

<style>
@import url('../assets/css/style.css');
</style>