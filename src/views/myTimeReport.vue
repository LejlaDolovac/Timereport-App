<template>
    <div id="ReportPage">
        <fixed-header>
           <div href="./components/Firstpage" class="loggabox" id="MyLoggbox">
      <div class="squeedLogga"><a>SQUEEDTIME</a></div>
    </div>
        </fixed-header>
        <div v-if="!submitted" class="container-box">
    <div class="container">
            <TimeList/>
        <table class="table table-striped tabel-borders">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Working hours</th>
                    <th>Date</th>

                    <th></th>
                </tr>    
            </thead>
            <tbody>
                <tr v-for="userName in users" :key="userName.id">
                    <td>{{userName.userId}}</td>
                    <td>{{userName.comment}}h</td>
                    <td>{{userName.date}}h</td>

                </tr>
            </tbody>
        </table>
    </div>

     <form class="button-send" action="mailto: llleyla_@hotmail.com" method="POST">
        <button class="sendReport" type="submit" v-on:click.prevent="sendReport" href="mailto:llleyla_@hotmail.com">
            <p> SEND REPORT</p>
        </button> 

         <button class="redigera">
            <p> REDIGERA</p>
        </button>
                    </form> 

    <div v-if="submitted">
        <h3>Thank you{{username.userId}}!</h3>
    </div>     
    </div>
    
    </div>
</template>




<script>

import axios from 'axios';
import TimeList from '../components/TimeList';
import FixedHeader from 'vue-fixed-header';


export default {
 name: 'ReportPage',
 components:{
     TimeList,
     FixedHeader
 },
 data(){
   return{
       users: [],
       msg: [],
       submitted: false
   }
 },
 mounted(){
    axios.get('http://localhost:3000/postgetinformation').then((respons) =>{
         console.log(respons.data);
         this.users = respons.data;
         this.msg = respons.msg;

     })
     .catch((error) =>{
         console.log(error);
     })
 },

methods:{
    sendReport: function(){
        axios.get('http://localhost:3000/mail')
        .then(function(data){
            console.log(data , 'data');
            this.submitted = true;
    
            
        });
    }
}
 
}







</script>



<style lang="scss">
@import '../sass/style.scss';

.sendReport{
    border: 1px solid black;
    border-radius: 10px;
}
.redigera{
    border: 1px solid black;
    margin: 1rem;
    width: 7rem;
    border-radius: 10px;
}
p{
    font-size: 1rem;
}
th{
    color: black;
    align-content: center;
}
tr{
    color: black;
    align-items: center;
}
.container-box{
    box-sizing: border-box;
    border: 3px solid black;
    margin: 5rem;
    height: 30rem;
}
.loggabox {
  display: flex;
  margin: 0;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background: rgba(197, 196, 196, 0.1);
}

.squeedLogga {
  width: 289px;
  height: 100px;
  font-family: Changa;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 118px;
  color:  rgba(249, 177, 34, 0.9);
  flex: 1 1 auto;
}
h3{
    font-size: 3rem;
    color: red;
}
.navbar.vue-fixed-header--isFixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
}



</style>

