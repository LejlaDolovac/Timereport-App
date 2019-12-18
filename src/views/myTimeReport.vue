<template>
    <div id="ReportPage">
    <div class="conatiner">
        <table class="table table-striped tabel-borders">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Working hours</th>
                    <th></th>
                </tr>    
            </thead>
            <tbody>
                <tr v-for="userName in users" :key="userName.id">
                    <td>{{userName}}</td>
                    <td>{{msg}}</td>
                    <td>{{newDate}}</td>
                </tr>
            </tbody>
        </table>
    </div>
   <!--  <div class="button-send">
        <button class="sendReport" v-on:click="sendReport">
            <p> SEND REPORT</p>
        </button> 

    </div>   -->    
    </div>
</template>




<script>
//import * as moment from 'moment/moment';
import axios from 'axios';


export default {
 name: 'ReportPage',
 data(){
   return{
       users: [],
       msg: []
   }
 },
 mounted(){
    axios.get('http://localhost:8081/myTimeReport').then((respons) =>{
         console.log(respons.data);
         this.users = respons.data;
     })
     .catch((error) =>{
         console.log(error);
     })
 },

methods:{
    sendReport(){
        // create a function that sends the report to the right one
    }
}
 
}
</script>



<style>
body{
    background:rgba(197, 196, 196, 0.8);

}
.button-send{
    border: 1rem solid black;
}
p{
    font-size: 1rem;
}


</style>

