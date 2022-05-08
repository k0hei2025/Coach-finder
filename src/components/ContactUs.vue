<template>
  <form
    v-on:submit.prevent="addContact(contactFormData)"
    class="parent-container"
  >
    <p>Your E-mail</p>
    <input type="text" v-model="contactFormData.email" />
    <p>Message</p>
    <textarea
      rows="5"
      placeholder="type your message here"
      v-model="contactFormData.message"
    />
    <button type="submit" v-if="isOurUser">Send Message</button>

    <router-link v-else style="textdecoration: none" to="/auth"
      ><li class="noticeOfSignUpStyle">
        SignUp before Sending the message
      </li></router-link
    >
  </form>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      contactFormData: {
        coachId: '',
        email: '',
        message: '',
        userId: '',
      },
    };
  },
  props: ['idStore', 'userId'],
  created() {
    this.contactFormData.coachId = this.idStore;
    this.contactFormData.userId = this.userId;
    console.log(this.contactFormData, 'idStore at contactUS component');
  },
  computed: {
    ...mapGetters(['authenticateInformation', 'isOurUser']),
  },

  methods: {
    ...mapMutations(['contactFormHandler']),
    ...mapActions(['addContact']),
  },
};
</script>
<style scoped>
.parent-container {
  margin: 0px;
  padding: 0px;
  border-radius: 0.2rem;
  border-color: grey;
  border-width: 1px;
}
.parent-container input,
.parent-container textarea {
  width: 100%;
  margin-top: 0px;
  border-style: solid;
  border-width: 1px;
  border-radius: 0.2rem;
  border-color: grey;
}
.parent-container input {
  padding: 0.3rem;
}
.parent-container p {
  font-weight: bold;
  color: black;
}
.noticeOfSignUpStyle {
  color: #000957;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
  text-align: center;
  margin-top: 0.5rem;
}
.parent-container button {
  background-color: #000957;
  color: white;
  padding: 8px 32px;
  border-style: none;
  border-radius: 0.2rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  margin-left: 10rem;
}
input:focus,
textarea:focus {
  background-color: #b5b9dc;
  border-color: #000957;
  outline: none;
}

textarea {
  font-family: 'Courier New', Courier, monospace;
}
</style>
