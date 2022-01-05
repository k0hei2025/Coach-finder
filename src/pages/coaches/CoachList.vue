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
  <li v-for="i in getCoaches" v-bind:key="i.id">
    {{i.firstName}}
  </li>
 
</ul>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   computed:{
     ...mapGetters(['getCoaches'])
   }
}
</script>