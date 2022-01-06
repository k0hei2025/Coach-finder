<template>
               <div class="card">
                              <h1>{{fullName}}</h1>
                              <b>${{hourlyRate}}/hour</b>
                              <div class="areasStyle">
                              <p v-for='i in areas' v-bind:key="i">{{i}}</p>
                              </div>
                              <div>
                                             <base-button v-bind:mode='outline'>Contact</base-button>
                                             <base-button v-bind:mode="inline" v-bind:linked='/coaches/i.id'>View Details</base-button>
                              </div>
               </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
               components:{
                              BaseButton
               },
               
               props:['id' , 'firstName' , 'lastName' , 'hourlyRate' , 'areas'],
                
                computed:{
                               fullName(){
                                              return this.firstName+' '+this.lastName
                               },
                               
                               areasOfWork(){
                                  return [...this.areas]
                               }
                }
}
</script>

<style scoped>
  .card {
                 border-style: solid;
                 border-radius: 1rem;
                 width: 40%;
                 padding: 16px 16px;
                 margin: 1rem 0px 1rem 28rem;
                 box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
                 border-color: grey;

  }
  .areasStyle{
                 display: flex;
                 
  }
  .areasStyle p {
                 margin: 1rem 1rem 1rem 0rem;
  }
</style>