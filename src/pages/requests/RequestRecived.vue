<template>
                <div class="parent-container">
                        <h1> Request Receieved </h1>
                         <div class="card" v-for="i in getRequests" v-bind:key="i.id">
                                        <b>{{i.email}}</b>
                                        <p>{{i.message}}</p>
                         </div>
                </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
               computed:{
                              ...mapGetters(['getRequests'])
               },
             
}
</script>

<style scoped>
.parent-container{
               box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
               border-radius: .5rem;
               padding: 1rem;
               width: 70%;
               margin-left: 14rem;
               margin-top: 2rem;
       
}
.parent-container h1 {
               text-align: center;
}
.card {
               margin: 1rem;
               border-style: solid;
               border-color: rgba(0, 0, 0, 0.5);
               padding: 1rem;
               border-width: 1px;
               border-radius: .1rem;
               width: 70%;
               margin-left: 12rem;
}
.card b {
               color: #000957;
          
}
</style>