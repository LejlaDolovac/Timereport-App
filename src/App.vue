<template>

  <div :style="{backgroundImage: 'url(' + getImgUrl() + ')'}"
        id="app">
        <button id="back-button" :click="Back"><i class="arrow left"></i></button>
        
       <router-link
          v-if="$routerHistory.hasPrevious()"
          :to="{ path: $routerHistory.previous().path }">
          GO BACK
          </router-link> 
    
  
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
   getImgUrl() {
      return require("@/assets/squeed2.jpg");
    },
    Back(){
      this.$router.push('./Firstpage')
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
  background: no-repeat center center fixed; 
  background-size: cover;
  width: 100vw;
  height: 100vh;

}
a{
  color: black;
  text-decoration: none;
  
}
#back-button{
position:absolute;
bottom:0;
background-color: Transparent;
border: none;
margin: 4rem;

}

i {
  border: solid black;
  border-width: 0 6px 6px 0;
  display: inline-block;
  padding: 3px;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

</style>

