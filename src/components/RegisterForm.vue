<template>
  <p class="switchWrapper" v-on:click="goToDashBoardHandler">
    Already Registered Go to Dashboard
  </p>
  <form
    class="parent-container"
    :class="{ invalid: isErrorStates }"
    v-on:submit.prevent="actionAddCoachHandler(formData)"
  >
    <h1>Register as a coach now!</h1>

    <p>Firstname</p>

    <input type="text" v-model="formData.firstName" />

    <p>Lastname</p>
    <input type="text" v-model="formData.lastName" />

    <p>Description</p>
    <textarea rows="5" v-model="formData.description" />

    <p>Email</p>
    <input type="text" v-model="formData.email" />

    <p>PhoneNumber</p>
    <input type="number" v-model="formData.phoneNumber" />

    <p>Qualification</p>
    <input type="text" v-model="formData.qualification" />

    <p>Country</p>
    <input type="text" v-model="formData.country" />

    <p>State</p>
    <input type="text" v-model="formData.state" />

    <p>Hourly Rate</p>
    <input type="number" v-model="formData.HourlyRate" />

    <p>Area of Expertise</p>

    <div class="form-control">
      <div style="display: flex">
        <input
          type="checkbox"
          id="STEM"
          value="STEM"
          v-model="formData.areas"
        />
        <label for="STEM">STEM</label>
      </div>
      <div style="display: flex">
        <input
          type="checkbox"
          id="PerformingArts_visualArts"
          value="Performing Arts/Visual Arts"
          v-model="formData.areas"
        />
        <label for="PerformingArts/visualArts"
          >Performing Arts/ visual Arts</label
        >
      </div>
      <div style="display: flex">
        <input
          type="checkbox"
          id="Sports"
          value="Sports"
          v-model="formData.areas"
        />
        <label for="Sports">Sports</label>
      </div>
      <div style="display: flex">
        <input
          type="checkbox"
          id="Others"
          value="Others"
          v-model="formData.areas"
        />
        <label for="Others">Others</label>
      </div>
      <base-button mode="inline">Register</base-button>
    </div>
  </form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import BaseButton from '../components/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },

  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        description: '',
        country: '',
        phoneNumber: 0,
        state: '',
        qualification: '',
        HourlyRate: 0,
        areas: [],
      },
    };
  },

  computed: {
    ...mapGetters(['isSubmitted', 'isErrorStates', 'authenticatedData']),
  },

  async created() {
    this.userDataHandler();
    // if (this.authenticatedData.localId) {
    //   this.$router.push('/teacherProfile');
    // }
  },

  methods: {
    ...mapMutations(['addCoachHandler']),
    ...mapActions(['actionAddCoachHandler', 'userDataHandler']),
    goToDashBoardHandler() {
      this.$router.push('/teacherProfile');
    },
  },
};
</script>

<style scoped>
.parent-container {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  width: 40%;
  margin-left: 30rem;
  margin-top: 2rem;
  border-radius: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid grey;
  font: inherit;
}

.parent-container p {
  font-weight: bold;
}

.form-control input {
  width: auto;
}
.parent-container h1 {
  font-size: 28px;
}

input:focus,
textarea:focus {
  background-color: #b5b9dc;
  border-color: #000957;
  outline: none;
}

.switchWrapper {
  cursor: pointer;
  font-weight: bold;
  margin-left: 40%;
  color: white;
  background-color: #000957;
  width: 16%;
  padding: 8px 16px;
}
.invalid {
  color: red;
}
</style>
