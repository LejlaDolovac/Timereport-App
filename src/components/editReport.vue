<template>
    <div id="editReport">

    <h1> deta ska vara en pop-up sida som kommer upp när du ska redigera din rapport, css = låt den dyka upp nerifrån</h1>
    <div class="actions">
        <v-btn @click="deleteItem">Delete</v-btn>
    </div>
    </div>
</template>





<script>

import myTimeReportVue from '../views/myTimeReport.vue';

export default {
    name:"editReport",

    created: function(){
        this.editItem();
    },
    method: {
        editItem: function(){
            
        }
    }
    

}
</script>

<style>

</style>
