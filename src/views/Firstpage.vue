<template>
  <div id="firstPage">
    <navBar />
    <myTimeReport />
  </div>
</template>

<script>
import myTimeReport from "../views/myTimeReport";
import navBar from "../components/navBar";

export default {
  name: "firstpage",
  components: {
    myTimeReport,
    navBar
  }
};
</script>

<style>
@import "../sass/style.scss";
</style>
