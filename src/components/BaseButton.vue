<template>
             <button v-if="mode===outline" class="greyish"><slot></slot></button>
              <router-link to='linked' v-else-if="mode===inline"><button class="pruplish"><slot></slot></button></router-link>
</template>

<script>
export default {
               props:['mode , linked']
}
</script>

<style scoped>

.greyish {
               background-color: grey;
               border-style:solid;
               color: black;
}
.pruplish {
               background-color: indigo;
               border-style:solid;
               border-color: white;
               color: white;
}
 
</style>