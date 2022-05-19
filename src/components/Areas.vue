<template>
  <div class="type" :class="area">
    {{ area }}
  </div>
</template>

<script>
export default {
  props: ['area'],
};
</script>

<style scoped>
.type {
  border-radius: 0.3rem;
  margin: 1rem 1rem 1rem 0px;
}
.STEM {
  background-color: rgb(187, 187, 36);
  padding: 8px 16px;
}
.PerformingArts_visualArts {
  background-color: lightgreen;
  padding: 8px 16px;
}
.Sports {
  background-color: skyblue;
  padding: 8px 16px;
}
.Others {
  background-color: grey;
  padding: 8px 16px;
}
</style>
