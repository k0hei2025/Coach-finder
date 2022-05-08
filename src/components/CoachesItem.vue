<template>
  <div class="card">
    <h1>{{ fullName }}</h1>
    <b>${{ hourlyRate }}/hour</b>
    <div class="areasStyle">
      <areas v-for="i in areas" v-bind:key="i" v-bind:area="i"></areas>
    </div>
    <div class="buttons">
      <base-button mode="outline" link v-bind:linked="contactLink"
        >Contact</base-button
      >
      <base-button mode="inline" link v-bind:linked="viewDetailLink"
        >View Details</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
import Areas from '../components/Areas.vue';

export default {
  components: {
    BaseButton,
    Areas,
  },

  props: ['id', 'firstName', 'lastName', 'hourlyRate', 'areas', 'userId'],

  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    contactLink() {
      return this.$route.path + `/${this.id}/contact`;
    },
    viewDetailLink() {
      return this.$route.path + `/${this.id}`;
    },
  },
};
</script>

<style scoped>
.card {
  border-style: solid;
  border-radius: 1rem;

  padding: 1rem 1rem;
  margin: 1rem 0rem;

  border-color: grey;
}
.areasStyle {
  display: flex;
}
.areasStyle p {
  margin: 1rem 1rem 1rem 0rem;
}
.buttons {
  display: flex;
  justify-content: space-between;
}
</style>
