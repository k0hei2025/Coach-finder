<template>
  <div class="wrap-container">
    <h1>Find Your Coach</h1>
    <div style="display: flex">
      <input type="checkbox" id="frontend" checked v-on:change="checkHandler" />
      <label for="frontend">frontend</label>
      <input type="checkbox" id="backend" checked v-on:change="checkHandler" />
      <label for="backend">Backend</label>
      <input
        type="checkbox"
        id="DataScience"
        checked
        v-on:change="checkHandler"
      />
      <label for="DataScience">Data Science</label>
      <input
        type="checkbox"
        id="MachineLearning"
        checked
        v-on:change="checkHandler"
      />
      <label for="MachineLearning">STEM</label>
      <input
        type="checkbox"
        id="MachineLearning"
        checked
        v-on:change="checkHandler"
      />
      <label for="MachineLearning">Performing Arts/Visual Arts</label>
      <input
        type="checkbox"
        id="MachineLearning"
        checked
        v-on:change="checkHandler"
      />
      <label for="MachineLearning">Sports</label>
      <input
        type="checkbox"
        id="MachineLearning"
        checked
        v-on:change="checkHandler"
      />
      <label for="MachineLearning">Others</label>
      <input
        type="checkbox"
        id="MachineLearning"
        checked
        v-on:change="checkHandler"
      />
      <label for="MachineLearning">Machine Learning</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataCheck: {
        frontend: true,
        backend: true,
        DataScience: true,
        MachineLearning: true,
      },
    };
  },
  methods: {
    checkHandler(event) {
      const inputId = event.target.id;
      const isCheck = event.target.checked;
      console.log(inputId, isCheck, 'fdsfsdfsd');
      const updatedFilter = {
        ...this.dataCheck,
        [inputId]: isCheck,
      };
      console.log(updatedFilter);
      this.dataCheck = updatedFilter;
      console.log(this.dataCheck, 'at dataCheck');
      this.$emit('change-filter', updatedFilter);
    },
  },
};
</script>

<style scoped>
.wrap-container {
  background-color: ivory;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  width: 50%;
  border-radius: 0.5rem;
  margin-left: 25rem;
  padding: 0.5rem;
  margin-top: 1rem;
}
</style>
