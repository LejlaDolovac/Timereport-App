<template>
<div id="calendar">
  <Fullcalendar 
  :plugins="calendarPlugins"
  :header="{
      left:'dayGridMonth, timeGridWeek, timeGridDay, listWeek',
      center: 'title',
      right: 'prev , today, next',
  }"
  :weekends="false"
  :selectable="true"
  :editable="true"
  :events="EVENT"
  @select="handleSelect"
  @eventClick="handleClick"
  @eventResize="updateEvent"
  @eventDrop="updateEvent"
  @eventRender="eventRender"

  
  
  />
  <modals-container/>
</div>
  
</template>





<script>
require('@fullcalendar/core/main.min.css');
require('@fullcalendar/daygrid/main.min.css');
require('@fullcalendar/timegrid/main.min.css');


import Fullcalendar from '@fullcalendar/vue';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import InteractionPlugin from '@fullcalendar/interaction';
import ListPlugin from '@fullcalendar/list';

import {mapGetters} from 'vuex';
import EventModal from './EventModal';
import commentModal from './commentModal';



export default {
    name: 'calendar',
    data: () =>({
        calendarPlugins: [
            DayGridPlugin,
            TimeGridPlugin,
            InteractionPlugin,
            ListPlugin,
        ]
        
    }),
    components: {
        Fullcalendar,
        


    },
    computed: {
        ...mapGetters(["EVENTS"])
    },
    methods:{
        eventRender(arg) {
              console.log(arg , 'argument')
              let span = document.createElement('span')
              arg.el.appendChild(span)
              span.addEventListener('click', event =>{
                  event.stopPropagation();
                  this.$modal.show(commentModal, {
                      text: "Leave a comment"
                  })
              })
               
        },
        updateEvent(arg){
            this.$store.commit("UPDATE_EVENT", arg.event )
        },
        handleSelect(arg) {
            console.log(arg);  
            this.$store.commit("ADD_EVENT",{
                id: (new Date()).getTime(),
                title:"Working hours:",
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay
            })      
            },
            handleClick(arg) {
                console.log(arg , 'argument')
                this.$modal.show(EventModal, {
                    text: "This is from the components",
                    event: arg.event
                }) 

            },
           
        

    },
    props:{
       EVENT: Object,
    },
  
}
</script>


<style>
#calendar{
   background: grey;
   height: auto;
   width: 100%;
}
Fullcalendar{
 margin-bottom: 2rem;
 
}
updateSize{
height: auto;
}

</style>
