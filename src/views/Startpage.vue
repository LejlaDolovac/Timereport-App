<template>
  <div id="Startpage">
    <navBar />
    <div class="startpage-info">
      <h2 class="rubrik">No stress <br />just fun</h2>
      <p>
        Life can be pretty stressful at times and you have a lot to keep track
        of.<br />
        In this app you will be able to keep track of your working hours
        better.<br />
        Through a slack webhook (timelog) you will be able to keep log of your
        times quickly and easily. <br />You can see your working hours of the
        current month and the previous months and keep track of how your
        working.
      </p>
    </div>
  </div>
</template>

<script>
import navBar from "../components/navBar";

export default {
  name: "Startpage",
  components: {
    navBar
  },
  methods: {}
};
</script>

<style>
@import "../sass/style.scss";
</style>
