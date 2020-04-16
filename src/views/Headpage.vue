<template>
  <div id="Headpage">
    <myTimeReport />
  </div>
</template>

<script>
import myTimeReport from "../views/myTimeReport";

export default {
  name: "Headpage",
  components: {
    myTimeReport
  }
};
</script>

<style>
@import "../sass/style.scss";
</style>
