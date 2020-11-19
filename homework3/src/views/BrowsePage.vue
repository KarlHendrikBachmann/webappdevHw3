<template>
   <body>
   <NavBar/>
    <section class="main-container">
      <div class='followBox' v-for="(user, index) in userList" :key="index">
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

.followBox {
  box-sizing: border-box;
  padding: 10px;
  float: left;
  width: 45%;
  height: 45%;
  border-radius:5px;
  box-shadow: 0 0 3px gray;
  margin-right: 2.5%;
  margin-left: 2.5%;
  margin-bottom: 2.5%;
}

.followFlex{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  float: center;
}

.followBox h2{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
}


.followBox img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.followButton{
  border-color: purple;
  border-style: solid;
  border-width: 1px;
  background-color: purple;
}

.followButton.selected{
  border-color: purple;
  border-style: solid;
  border-width: 1px;
  background-color: white;
  color:purple;
}
</style>