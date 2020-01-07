<template>
  <div id="firstPage">
    <div class="loggabox">
      <div class="squeedLogga">SQUEEDTIME</div>
    </div>

    <div class="button-container">
      <div class="buttonReport firstpage-button" v-on:click="showReport">Min tidsrapport</div>
      <div class="buttonMyPage firstpage-button" v-on:click="showMyPage">
        <font-awesome-icon class="myPageicon" icon="user-secret"/>
        <h3>Min sida</h3>
      </div>
    </div>
  </div>
</template>

 


<script >
export default {
  name: 'firstpage',
  methods: {
    showReport() {
      this.$router.push("/myTimeReport");
    },
    showMyPage() {
      this.$router.push("/myPage");
    }
  }
};
</script>

<style>
@import '../sass/style.scss';


* {
  position: relative;
}
#firstPage {
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
}
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  background: url("../assets/squeed2.jpg") no-repeat center center fixed;
  background-size: cover;
}
.button-container {
    display: flex;
    justify-content: center;
    width: 100vw;
}
.firstpage-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 20px;
  border: none;
  color: Black;
  font-weight: bold;
  background-color: rgba(249, 177, 34, 0.75);
  margin: 0 1rem 5rem;
}

.loggabox {
  display: flex;
  margin: 0;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background: rgba(197, 196, 196, 0.8);
}

.squeedLogga {
  width: 289px;
  height: 100px;
  font-family: Changa;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 118px;
  color:  rgba(249, 177, 34);
  flex: 1 1 auto;
}
</style>


