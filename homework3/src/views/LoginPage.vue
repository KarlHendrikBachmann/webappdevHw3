<template>
    <body id="app">
    <section class="login-page">
      <section id="login-container">
        <div>
          <h1>Welcome to postIt!</h1>
        </div>
        <div>
          <h4>
            <a href="#">Create an Account</a>
          </h4>
        </div>
        <div>
          <h4>Or</h4>
        </div>
        <div>
          <h3>Please Log In</h3>
          <form action="#/postitapp" method="post" v-on:submit.capture=onSubmit>
            <div>
              <input type="text" name="email" placeholder="Email">
            </div>
            <div>
              <input type="password" name="password" placeholder="Password">
            </div>
            <div>
              <button class="button" @click.prevent="submit_data" name="login">Log In</button>
            </div>
            <div>
              <small>
                <a href="#">Forgot password?</a>
              </small>
            </div>
          </form>
        </div>
      </section>
    </section>
  </body>
</template>

<script>
export default {
    name: "app",
        data() {
            return {
                username: '',
                password: '',
                response: ''
            }
        },
        methods: {
            submit_data() {
                fetch('https://jsonplaceholder.typicode.com/todos/1')
                    .then(response => response.json())
                    .then(json => console.log(json))
                this.$router.push({ path : '/' });
            }
    }
}
</script>

<style>
@import url('../assets/css/style.css');
</style>