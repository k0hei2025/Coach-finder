<template> 

           <div class="parentContainer">
               <h1> Details Of A Coach </h1>
          <div class="card">
                <h2>{{fullName}}</h2>  
                <p>${{coachDetail.HourlyRate}}/hour</p>       
          </div>

           <div class="card-of-Areas">
             <p>{{coachDetail.description}}</p>
           <div class="major">
            <areas v-for="i in coachDetail.areas" v-bind:key="i" v-bind:area="i"></areas>
           </div>
           </div>
           
           <div class="contact">
             <p>Intrested? Reach out now!</p>
          
          <base-button mode="inline" link v-bind:linked='contactLink'>Contact</base-button>
            
             </div>
              
           </div>

</template>
<script>
import {mapGetters} from 'vuex'
import Areas from '../../components/Areas.vue';
import BaseButton from '../../components/BaseButton.vue';                                   
export default {
components:{
  Areas,
  BaseButton
},
props:['id'],
data(){
return {
  coachDetail : null

}},
computed:{
                 ...mapGetters(['getCoaches']),
                 fullName(){
                  return this.coachDetail.firstName+' '+this.coachDetail.lastName;
                 },
                  contactLink(){
                                 return this.$route.path + `/contact` 
                               },
},
created(){
    console.log('dsfdsfds',this.id , this.getCoaches);   
           this.coachDetail  =  this.getCoaches.find((i)=>i.id === Number(this.id));
},
mounted() {
          
},
}
</script>

<style scoped>
 .parentContainer{
                background-color: #000957;
                height: 70vh;
                width: 50%;
                border-radius: 0.5rem;
               margin-left: 23%;
               margin-top: 2rem;
               padding: 1rem;
               color: #ffff;
               box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);

 }
 .parentContainer h1{
   font-size: 48px;
   width: 100%;
   margin-top: 1rem;
   margin-left: 25%;
 }
 .card , .card-of-Areas{
  border-style: solid;
  border-color: #fff;
  border-width: 1px;
  margin: 1rem;
  padding: 1rem;
 }

 .card-of-Areas p{
   font-size: 18px;
 }
 .major{
   color: black;
   display: flex;
 }
 
 .card h2{
   text-transform: capitalize;
   font-size: 28px;
 }
 .card p{
   font-weight: bold;
 }
 .contact{
   background-color: #ffff;
   margin: 1rem;
   padding: 1rem 1rem 1rem 1rem;
 }
 .contact p{
   font-size: 28px;
   color: #000957;
   margin-top: 0px;
 }
</style>