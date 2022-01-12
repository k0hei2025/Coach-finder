<template>
       
             <button v-if="!link" v-bind:class="mode"><slot></slot></button>
              <router-link v-else :to="linked" v-bind:class="mode" ><slot></slot></router-link>
</template>

<script>
export default {
               props:{
                              mode:{
                                             type : String,
                                             required : false,
                                             default : null
                              },
                              link:{
                                             type : Boolean,
                                             required: false,
                                             default : false
                              },
                              linked: {
                                             type: String,
                                             required: false,
                                             default: '/'
                                      }
                              
               },
             
}
</script>

<style scoped>

.outline {
               background-color: transparent;
               border-style:solid;
               border-color: #000957;
               color: #000957;
               text-decoration: none;
               border-width: 1px;
               padding: 8px 16px;
               border-radius: .3rem;
}
.inline {
               background-color: #000957;
               border-style:solid;
               border-color: white;
               color: white;
               text-decoration: none;
               border-width: 1px;
               padding: 9px 16px;
               border-radius: .3rem;
}
 
</style>