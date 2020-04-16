<template>
  <div id="app">
    <div class="loggabox" id="MyLoggbox">
      <div @click="GoBack" class="squeedLogga">
        <a>TIMELOG</a>
        <br />
        <span>{{ this.monthName }}</span>
      </div>
      <navBar />
    </div>
    <router-view />
  </div>
</template>

<script>
import { format } from "date-fns";
import navBar from "./components/navBar";

export default {
  name: "app",
  components: {
    navBar
  },
  data: function() {
    return {
      monthName: "",
      user: ""
    };
  },
  props: [],
  methods: {
    GoBack() {
      this.$router.push("/");
    }
  },
  created: function() {
    this.monthName = format(new Date(), "MMMM");
    console.log(this.monthName, "-month");
  }
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
}

body {
  background: url("./assets/squeed2.jpg") no-repeat center center fixed;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
}
</style>
