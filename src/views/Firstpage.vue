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




</style>


