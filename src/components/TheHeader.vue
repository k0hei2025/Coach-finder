<template>
  <header class="buttonList">
    <nav>
      <router-link style="text-decoration: none; color: inherit" to="/"
        ><h1 class="iconLogo">MENTOR</h1></router-link
      >
      <ul>
        <!-- <li class="list_2">Be a Mentor</li> -->

        <router-link
          v-if="authenticatedData.localId"
          style="textdecoration: none"
          to="/requests"
          ><li>Requests</li></router-link
        >
        <router-link v-else style="text-decoration: none" to="/coaches"
          ><li>Find a Mentor</li></router-link
        >

        <li v-if="authenticatedData.localId" v-on:click="logoutHandler">
          Logout
        </li>
        <router-link v-else style="text-decoration: none" to="/auth">
          <li class="list_1">Be a Mentor</li></router-link
        >
        
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Roboto:wght@100;300&display=swap');

.buttonList h1 {
  color: #000957;
  margin: 0;
  margin: 15px 0px 0px 60px;
  font-size: 32px;
}
.buttonList ul {
  list-style: none;
  display: flex;
}
.buttonList li {
  margin: 0rem 1rem;
  border-style: solid;
  border-width: 1px;
  padding: 12px 15px;
  background-color: #000957;
  border-radius: 1.5rem;

  cursor: pointer;
  color: #efead8;
  font-weight: bold;
  text-decoration: none;
  font-family: Roboto, Arial, sans-serif;
}
.buttonList li:hover {
  background-color: #ffc900;
  color: #000957;
}
.buttonList {
  background-color: ivory;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
}
.buttonList nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
}
.iconLogo {
  font-family: 'Luckiest Guy', cursive;
  letter-spacing: 5px;
}
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['authenticatedData']),
  },
  methods: {
    logoutHandler() {
      this.authenticatedData.localId = null;
      alert('logout');
    },
  },
};
</script>
