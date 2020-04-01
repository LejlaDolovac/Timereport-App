<template>
  <div id="loginPage">
    <div class="box-container">
      <div class="box" width="100">
        <form class="input-container" action="POST">
          <p>Email:</p>
          <input class="inputMail loginpage-button" type="text" />
          <p>Password:</p>
          <input class="inputPassword loginpage-button" type="text" />
        </form>
      </div>
    </div>
    <div class="button-container">
      <button href="/auth/google" class="google-btn1" value="Login">Login</button>
      <!-- USER är för passport.js  v-if="user-->
      <button href="/auth/google" class="google-btn2" value="Logout">Logout</button>
      <!-- v-else -->
    </div>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  methods: {}
};
</script>

<style>
@import "../sass/style.scss";

* {
  position: relative;
}

.loginpage-button {
  flex-direction: row;
  text-align: center;
  width: 18rem;
  height: 2.7rem;
  border: none;
  color: Black;
  font-weight: bold;
  background-color: rgba(249, 177, 34, 0.75);
  outline: none;
}
.google-btn1 {
  display: inline-block;
  font-size: 1rem;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5%;
  height: 2.5rem;
  width: 17rem;
  top: -12rem;
  cursor: pointer;
  left: 8.5rem;
  outline: none;

}
.google-btn2 {
  display: inline-block;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5%;
  height: 2.5rem;
  top: -8rem;
  cursor: pointer;
  right: 9rem;
  width: 17rem;
  outline: none;

}

p {
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
}
.box {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  background: rgba(197, 196, 196, 0.8);
  width: 550px;
  height: 450px;
  margin-top: 6rem;
}

/* MEDIA QUERY */

@media (max-width: 812px) {
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-size: cover;
    background-attachment: fixed;
  }
}
</style>
