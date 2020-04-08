<template>
  <div id="navBar">
    <span class="button-container">
      <div class="buttonReport firstpage-button" v-on:click="showReport">
        My time-report
      </div>
      {{ this.monthName }}
      <div class="buttonMyPage firstpage-button" v-on:click="showMyPage">
        My page
      </div>
    </span>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "navBar",
  data: function() {
    return { monthName: "" };
  },
  components: {},
  methods: {
    showReport() {
      this.$router.push("/Firstpage");
    },
    showMyPage() {
      this.$router.push("/myPage");
    }
  },
  created: function() {
    this.monthName = format(new Date(), "MMMM");
    console.log(this.monthName, "-month");
  }
};
</script>

<style>
@import "../sass/style.scss";

.navBar {
  position: fixed;
}
</style>
