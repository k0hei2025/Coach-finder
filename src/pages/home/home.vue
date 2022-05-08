<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <component-1 />
      <div class="containerOfAnimate">
        <component-2 />
        <component-3 />
      </div>
    </body>
  </html>
</template>

<script>
import Component1 from '../../components/home/Component1.vue';
import Component2 from '../../components/home/Component2.vue';
import Component3 from '../../components/home/Component3.vue';
export default {
  components: {
    Component1,
    Component2,
    Component3,
  },
};
</script>

<style scoped>
.containerOfAnimate {
  animation: zweep 2s alternate both;
}
@keyframes zweep {
  0% {
    transform: translateY(0%);
  }

  100% {
    transform: translateY(-3%);
  }
}
</style>
