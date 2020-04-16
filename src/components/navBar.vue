<template>
  <div id="navBar">
    <span class="button-container">
      <div class="buttonReport Headpage-button" v-on:click="showReport">
        Month-report
      </div>

      <div class="buttonMyPage Headpage-button" v-on:click="showMyPage">
        Previous reports
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "navBar",
  components: {},
  methods: {
    showReport() {
      this.$router.push("/Headpage");
    },
    showMyPage() {
      this.$router.push("/myPage");
    }
  }
};
</script>

<style>
@import "../sass/style.scss";

.navBar {
  position: fixed;
}
</style>
