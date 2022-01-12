<template>
          <div class="parent-container">
               <h1>Register as a coach now!</h1>
               <p>Firstname</p>
<input type='text' v-model="formData.firstName"/>

<p>Lastname</p>
<input type='text' v-bind:model="formData.lastName"/>

<p>Description</p>
<textarea   rows="5" v-bind:model="formData.description"/>

<p>Hourly Rate</p>
<input type='number' v-bind:model="formData.HourlyRate" />

<p>Area of Expertise</p>

<div class="form-control"> 

<div style="display:flex">
<input type="checkbox" id="frontend" value="frontend" v-model="frontendValue"/>
<label for="frontend">frontend</label>
</div>
<div style="display:flex">
<input type="checkbox" id="backend" value="backend" v-model="checkHandler" />
<label for="backend">backend</label>
</div>
<div style="display:flex">
<input type="checkbox" id="MachineLearning" value="MachineLearning"  v-model="checkHandler"/>
<label for="MachineLearning">Machine Learning</label>
</div>
<div style="display:flex">
<input type="checkbox" id="DataScience" value="DataScience" v-model="checkHandler" />
<label for="DataScience">Data Science</label>
</div>
<base-button mode="inline">Register</base-button>
</div>
          </div>
</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
        components:{
                       BaseButton
        },
       
        data(){
                return {
                        formData:{
                                firstName: '',
                                lastName: '',
                                description: '',
                                HourlyRate: 0,
                                area: []
                        },
                        frontendValue:false
                }
        },
         watch(){
             console.log(this.formData.firstName)
        },

        
              
}
</script>

<style scoped>
.parent-container{
               box-shadow: 2px 2px 4px 2px rgba(0,0,0,0.5);
               padding:1rem;
               width:40%;
               margin-left: 30rem;
               margin-top: 2rem;
               border-radius: .5rem;
}

input,textarea{
               display: block;
  width: 100%;
  border: 1px solid grey;
  font: inherit;
}

 .parent-container p {
                font-weight: bold;
 }


.form-control input{
               width: auto;
               
}
.parent-container h1{
               font-size: 28px;
}

input:focus,
textarea:focus{
 background-color: #b5b9dc;
 border-color: #000957;
 outline: none;

}


</style>