<template>
  <div class="container">
    <h1>Name : {{ profileData.name }}</h1>

    <h1>Qualification : {{ profileData.qualification }}</h1>

    <h1>Phone No : {{ profileData.phoneNumber }}</h1>

    <h1>Country : {{ profileData.country }}</h1>

    <h1>State : {{ profileData.state }}</h1>

    <p v-if="isAMentor" class="notice_wrapper">* No more want to Teach</p>
    <p v-else>* Delete as A student</p>
    <button v-on:click="deleteDataHandler" class="delete_wrapper">
      Delete as a Coach
    </button>
    <p v-if="isDeleted" class="notice_wrapper">Data Deleted Successfully</p>
  </div>
</template>

<style scoped></style>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      profileData: {},
    };
  },
  computed: {
    ...mapGetters(['authenticatedData', 'isDeleted', 'isAMentor']),
  },
  async created() {
    console.log('iddata at myprofile', this.authenticatedData.localId);

    const data = this.isAMentor
      ? await fetch(
          `https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${this.authenticatedData.localId}.json`
        )
      : await fetch(
          `https://coach-finder-5a7ed-default-rtdb.firebaseio.com/students/${this.authenticatedData.localId}.json`
        );
    const resData = await data.json();

    this.profileData.name = resData.firstName + ` ` + resData.lastName;
    this.profileData.qualification = resData.qualification;
    this.profileData.phoneNumber = resData.phoneNumber;
    this.profileData.country = resData.country;
    this.profileData.state = resData.state;
  },
  methods: {
    ...mapActions(['userDataHandler', 'deleteDataHandler']),
  },
};
</script>

<style scoped>
.container {
  background-color: #424eb8;
  color: aliceblue;
  width: 40%;
  border-radius: 1rem;
  padding: 1rem;
  margin-left: 27%;
}
.delete_wrapper {
  background-color: #ff4949;
  padding: 8px 16px;
  border-style: none;
  cursor: pointer;
  color: aliceblue;
}
.notice_wrapper {
  color: #ff4949;
  font-weight: bold;
}
</style>
