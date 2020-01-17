<template>
  <div id="loginPage">
    <div class="loggabox">
      <div class="squeedLogga">SQUEEDTIME</div>
    </div>
    <div class="box-container">
  <div class="box" width="100">
    <form class="input-container" action="POST">
             <p>Email:</p>
          <input class="inputMail loginpage-button" type="text" placeholder="Email">
            <p> Password:</p>
         <input class="inputPassword loginpage-button" type="text" placeholder="Password">


      <div class="login-input-button">
         <a href="/auth/google"  class="google-btn" value="Login">Login</a> <!-- USER är för passport.js  v-if="user-->
         <a href="/auth/google"  class="google-btn" value="Logout">Logout</a> <!-- v-else -->

      </div>
      </form>
      </div>
  </div>
  </div>
</template>



<script >
export default {
  name: 'loginPage',
  methods: {
  
  },
  
  
};
</script>



<style>
@import '../sass/style.scss';


* {
  position: relative;
}

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  background: url("../assets/squeed2.jpg") no-repeat center center fixed;
  background-size: cover;
}

.loginpage-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 2rem;
  border-radius: 20px;
  border: none;
  color: Black;
  font-weight: bold;
  background-color: rgba(249, 177, 34, 0.75);
  margin: 0 1rem 5rem;
}
.google-btn{
    display: flex;
    justify-items: center;
    border: 1px solid black;
    font-size: 30px;
}
p{
  display: flex;
  justify-content: center;
  font-size: 0.9rem;

}
.loggabox {
  display: flex;
  margin: 0;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background: rgba(197, 196, 196, 0.8);
}
.box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

}
.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}
.box{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background: rgba(197, 196, 196, 0.8);
    width: 400px;
    height: 450px;
    border-radius: 10%;
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

.box{
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background: rgba(197, 196, 196, 0.8);
    width: 300px;
    height: 400px;
    border-radius: 10%;
    margin: 5rem 0 0 0;
}
.google-btn{
    display: flex;
    justify-items: center;
    border-radius: 10px;
    height: 2rem;
    width: 5rem ;
    justify-content: center;
    background-color: white;
    font-weight: bold;
    font-size: 0.9rem;
}
}

</style>