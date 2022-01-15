<template>
        <form v-on:submit.prevent="contactFormHandler(contactFormData)" class="parent-container">
                       <p>Your E-mail</p>
                       <input type="text" v-model="contactFormData.email"/>
                       <p>Message</p>
                       <textarea rows="5" placeholder="type your message here" v-model="contactFormData.message"/>
                       <button type="submit">Send Message</button>
                       
        </form>               
</template>

<script>
import {mapMutations} from 'vuex'
export default {
            data(){
                    return{
                            contactFormData:{
                           email: "",
                           message: ""
                            }
                          
                    }
            },
         
            methods:{
                    ...mapMutations(['contactFormHandler'])

            }   
}
</script>
<style scoped>
.parent-container{
               margin: 0px;
               padding: 0px;
               border-radius: .2rem;
               border-color: grey;
               border-width: 1px;
}
.parent-container input,
.parent-container textarea {
               width: 100%;
               margin-top: 0px;
               border-style: solid;
               border-width: 1px;
               border-radius: .2rem;
               border-color: grey;
}
.parent-container input{
               padding: .3rem;
}
.parent-container p{
               font-weight: bold;
               color: black;
}
.parent-container button{
               background-color: #000957;
               color: white;
               padding: 8px 32px;
               border-style: none;
               border-radius: .2rem;
               margin-top: .5rem;
               cursor: pointer;
               font-weight: bold;
               margin-left: 10rem;
}
input:focus,
textarea:focus{
 background-color: #b5b9dc;
 border-color: #000957;
 outline: none;
 
}

textarea{
        font-family: 'Courier New', Courier, monospace;
}
</style>