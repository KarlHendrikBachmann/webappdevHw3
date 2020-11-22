<template>
  <body>
    <NavBar/>
  <section class="main-container">
    <div class="post" v-for="(post, index) in postList" :key="index">
      <span class="post-author">
        <span class="post-author-info">
          <img v-bind:src="post.author.avatar" alt="Profile picture">
          <small>{{ post.author.firstname + " " + post.author.lastname }}</small>
        </span>
        <small>{{ post.createTime | formatDate }}</small>
      </span>
      <div v-if="post.media !== null" class="post-image">
        <img v-if="post.media.type === 'image'" v-bind:src="post.media.url"
             alt="Post image">
        <video v-if="post.media.type === 'video'" controls>
          <source type="video/mp4" :src="post.media.url">
        </video>
      </div>
      <div class="post-title">
        <h3 v-if="post.text != null">{{ post.text }}</h3>
      </div>
      <div class="post-actions">
        <button type="button" :class="{'like-button' : !post.liked, 'like-button-liked' : post.liked}"
                @click="toggleLike(post)">{{ post.likes }}
        </button>
      </div>
    </div>
  </section>
  </body>
</template>

<script>

import NavBar from "@/views/NavBar";
import Post from "../models/Post";
import Media from "../models/Media";
import User from "../models/User";

export default {
  name: "PostItApp",
  components: {NavBar},
  data: function () {
    return {
      postList: [
        new Post(1, new User("Gordon", "Freeman", "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"), "I think it's going to rain", new Media("image", "http://www.pastatdude.com/uploaded_images/hl2-2007-10-20-16-36-36-32-713089.jpg"), "15k"),
        new Post(2, new User("John", "Doe", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"), "Which weighs more, a pound of feathers or a pound of bricks?", null, "25k"),
        new Post(3, new User("Bruce", "Wayne", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"), "Felt cute, might delete later", new Media("image", "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg"), "100k"),
        new Post(4, new User("Richard", "Stallman", "https://images.unsplash.com/photo-1553798194-cc0213ae7f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"), null, new Media("video", "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4"), "1k")
      ]
    }
  },
  methods: {
    toggleLike: function (post) {
      post.liked = post.liked !== true;
    }
  },
  filters: {
    formatDate: function (value) {
      if (!value) return ''

      let date = new Date(value);
      let month = '';
      if (date.getMonth() === 0) {
        month = 'Jan';
      } else if (date.getMonth() === 1) {
        month = 'Feb';
      } else if (date.getMonth() === 2) {
        month = 'Mar';
      } else if (date.getMonth() === 3) {
        month = 'Apr';
      } else if (date.getMonth() === 4) {
        month = 'May';
      } else if (date.getMonth() === 5) {
        month = 'Jun';
      } else if (date.getMonth() === 6) {
        month = 'Jul';
      } else if (date.getMonth() === 7) {
        month = 'Aug';
      } else if (date.getMonth() === 8) {
        month = 'Sep';
      } else if (date.getMonth() === 9) {
        month = 'Oct';
      } else if (date.getMonth() === 10) {
        month = 'Nov';
      } else if (date.getMonth() === 11) {
        month = 'Dec';
      }
      return month + " "
          + date.getDate() + ", "
          + date.getFullYear() + " "
          + date.getHours() + ":"
          + date.getMinutes()
    }
  }
}
</script>
<style>
@import url('../assets/css/style.css');
</style>