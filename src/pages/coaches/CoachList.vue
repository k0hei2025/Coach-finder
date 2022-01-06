<template>
<div>
<button>
  Refresh
</button>
<router-link to='/register' style="textDecoration:none">
<button>
  Register As A Coach
</button>
</router-link>
</div>
<ul>
 
    <coach-item v-for="i in getCoaches" v-bind:key="i.id"
    v-bind:id="i.id"
     v-bind:first-name="i.firstName"
     v-bind:last-name="i.lastName"
     v-bind:hourly-rate="i.HourlyRate"
     v-bind:areas="i.areas"
      ></coach-item>
 
 
</ul>
</template>

<script>
import CoachItem from '../../components/CoachesItem.vue'
import {mapGetters} from 'vuex'
export default {
   components:{
      'coach-item': CoachItem
   },

   computed:{
     ...mapGetters(['getCoaches'])
   }
}
</script>