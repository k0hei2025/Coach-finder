<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import Header from './components/TheHeader.vue';
export default {
  components: {
    TheHeader: Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bakbak+One&family=Source+Sans+3:wght@200&display=swap');

* {
  box-sizing: border-box;
}
html {
  font-family: Roboto, sans-serif;
}

body {
  margin: 0;
}
</style>
