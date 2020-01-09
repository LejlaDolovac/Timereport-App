<template>

  <div id="app">
        <button class="back-btn" @click="GoBack"><i class="arrow left"></i></button>
     <navicon />
    <router-view/>
  </div>
</template>
<script>


import navicon from '@/components/hamburgerMenu';


export default {
    props: [

    
    ],
 components: {
   navicon,
 }  ,
 methods:{
    GoBack(){
      this.$router.go(-1);

    }
 } 
}


</script>


<style lang="scss">
@import '../src/sass/style.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  width: 100vw;
  height: 100vh;
  
}
body {
  background: url("./assets/squeed2.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
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
.back-btn{
  text-decoration: none;
}



</style>

