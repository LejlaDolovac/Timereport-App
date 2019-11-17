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
        'icon'
    
    ],
 components: {
   navicon
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
  margin: 0 3rem 0 0;
  padding: 2rem;
}
a{
  color: black;
  text-decoration: none;
  
}
</style>

