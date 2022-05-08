<template>
  <h1>Name : {{ profileData.name }}</h1>

  <h1>Qualification : {{ profileData.qualification }}</h1>

  <h1>Phone No : {{ profileData.phoneNumber }}</h1>

  <h1>Country : {{ profileData.country }}</h1>

  <h1>City : {{ profileData.city }}</h1>
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
    ...mapGetters(['authenticatedData']),
  },
  async created() {
    console.log('iddata at myprofile', this.authenticatedData.localId);
    const data = await fetch(
      `https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${this.authenticatedData.localId}.json`
    );
    const resData = await data.json();

    this.profileData.name = resData.firstName + ` ` + resData.lastName;
    this.profileData.qualification = resData.qualification;
    this.profileData.phoneNumber = resData.phoneNumber;
    this.profileData.country = resData.country;
    this.profileData.city = resData.city;

    //     console.log(this.profileData && this.profileData, 'adffds');
  },
  methods: {
    ...mapActions(['userDataHandler']),
  },
};
</script>
