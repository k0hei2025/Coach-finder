<template>
  <div class="parent-container">
    <h1>Request Receieved</h1>
    <div class="card" v-for="i in messageList" v-bind:key="i.id">
      <b>{{ i.email }}</b>
      <p>{{ i.message }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      messageList: [],
    };
  },
  computed: {
    ...mapGetters(['getRequests', 'authenticatedData']),
  },
  created() {
    fetch(
      `https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${this.authenticatedData.localId}/requests.json`
    )
      .then((res) => res.json())
      .then((resData) => {
        let tempArr = [];
        for (let i in resData) {
          tempArr.push({
            id: i,
            email: resData[i].email,
            message: resData[i].message,
          });
        }
        this.messageList = tempArr;
      });
  },
};
</script>

<style scoped>
.parent-container {
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 70%;
  margin-left: 14rem;
  margin-top: 2rem;
}
.parent-container h1 {
  text-align: center;
}
.card {
  margin: 1rem;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-width: 1px;
  border-radius: 0.1rem;
  width: 70%;
  margin-left: 12rem;
}
.card b {
  color: #000957;
}
</style>
