<template>
  <div id="app">
    <div class="loggabox" id="MyLoggbox">
      <div @click="GoBack" class="squeedLogga">
        <a>TIMELOG</a>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  props: [],
  components: {
    // navicon,
  },
  methods: {
    GoBack() {
      this.$router.go(-1);
    }
  }
  // created: function() {
  // let currentUrl = window.location.pathname;
  //  console.log(currentUrl);
  // }.
};
</script>

<style lang="scss">
@import "../src/sass/style.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px 1fr;
}

#MyLoggbox {
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  z-index: 10;
}

#MyLoggbox .squeedLogga a {
  font-size: 2rem;
}

#app #navBar {
  position: fixed;
  top: 60px;
  z-index: 10;
}

body {
  background: url("./assets/squeed2.jpg") no-repeat center center fixed;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
}

i {
  border: solid rgba(0, 0, 0, 0.9);
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 5px;
  text-decoration: none;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  text-decoration: none;
}
</style>
