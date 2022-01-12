<template>
<filter-coach v-on:change-filter="filterHandler"></filter-coach>

<base-badge>
<div class="btn"> 
<base-button style="margin-left:5%" mode="outline">
  Refresh
</base-button>
<router-link to='/register' style="textDecoration:none">
<base-button mode="inline">
  Register As A Coach
</base-button>
</router-link>
</div>
<ul>
 
    <coach-item v-for="i in filteredCoaches" v-bind:key="i.id"
    v-bind:id="i.id"
     v-bind:first-name="i.firstName"
     v-bind:last-name="i.lastName"
     v-bind:hourly-rate="i.HourlyRate"
     v-bind:areas="i.areas"
      ></coach-item>
 
 
</ul>
</base-badge>
</template>

<script>
import CoachItem from '../../components/CoachesItem.vue'
import BaseBadge from '../../components/BaseBadge.vue'
import BaseButton from '../../components/BaseButton.vue'
import {mapGetters} from 'vuex'
import FilterCoach from './FilterCoaches.vue'
export default {

  data(){
    return {
        activeFilters  : {
          frontend: true,
          backend: true,
          MachineLearning:true,
          DataScience: true
        }
    }
  },
   components:{
      'coach-item': CoachItem,
      BaseBadge,
      BaseButton,
      FilterCoach
   },

   computed:{
     ...mapGetters(['getCoaches']),
     filteredCoaches(){
      return this.getCoaches.filter(i=>{
         if (this.activeFilters.frontend && i.areas.includes('frontend')){
           return true;
         }
         if (this.activeFilters.backend && i.areas.includes('backend')){
           return true;
         }
         if (this.activeFilters.MachineLearning&& i.areas.includes('MachineLearning')){
           return true;
         }
         if (this.activeFilters.DataScience && i.areas.includes('DataScience')){
           return true;
         }
         return false;
       })       
     }
   },
   methods:{
     filterHandler(updatedFilter){
        console.log(updatedFilter , 'updatedSide')
        this.activeFilters = updatedFilter
     }
   }
}
</script>

<style scoped>
.btn{
  display: flex;
  justify-content: space-between;
}
</style>