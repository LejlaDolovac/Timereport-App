<template>
  <div id="app">
  
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
}
a{
  color: black;
  text-decoration: none;
  
}
</style>

