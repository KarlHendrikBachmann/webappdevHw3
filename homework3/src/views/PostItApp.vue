<template>
  <div>
  <NavBar/>
  <section class="main-container">
    <div class="post" v-for="post in posts" :key="post.id">
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
        <button type="button" :class="{'like-button-liked': post.liked, 'like-button': !post.liked }"
                @click="toggleLike(post)">{{ post.likes }}
        </button>
      </div>
    </div>
  </section>
  </div>
</template>

<script>

import NavBar from "@/views/NavBar";

export default {
  name: "PostItApp",
  components: {NavBar},
  methods: {
    toggleLike: function (post) {
      post.liked = !post.liked;
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts
    }
  },
  mounted() {
    this.$store.dispatch("getPosts");
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