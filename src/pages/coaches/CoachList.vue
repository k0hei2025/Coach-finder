<template>
  <filter-coach v-on:change-filter="filterHandler"></filter-coach>

  <base-badge>
    <div class="btn">
      <base-button style="margin-left: 5%" mode="outline">
        Refresh
      </base-button>
      <router-link to="/register" style="textdecoration: none">
        <base-button mode="inline"> Register As A Coach </base-button>
      </router-link>
    </div>
    <ul>
      <coach-item
        v-for="i in data"
        v-bind:key="i.id"
        v-bind:id="i.id"
        v-bind:first-name="i.firstName"
        v-bind:last-name="i.lastName"
        v-bind:hourly-rate="i.HourlyRate"
        v-bind:areas="i.areas"
        v-bind:userId="i.userId"
      ></coach-item>
    </ul>
  </base-badge>
</template>

<script>
import CoachItem from '../../components/CoachesItem.vue';
import BaseBadge from '../../components/BaseBadge.vue';
import BaseButton from '../../components/BaseButton.vue';
import { mapGetters } from 'vuex';
import FilterCoach from './FilterCoaches.vue';
export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        MachineLearning: true,
        DataScience: true,
      },
      data: [],
    };
  },
  mounted() {
    console.log(this.getCoaches, 'get coaches at coachlist');
    fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches.json`)
      .then((e) => e.json())
      .then((resData) => {
        console.log(resData);
        let coaches = [];
        for (let i in resData) {
          coaches.push({
            id: resData[i].id,
            firstName: resData[i].firstName,
            lastName: resData[i].lastName,
            description: resData[i].description,
            HourlyRate: resData[i].HourlyRate,
            areas: resData[i].areas,
            userId: resData[i].userId,
          });
        }
        console.log('dsfsdfsd', coaches);

        this.data = coaches;
        console.log(this.data);
      });
  },
  components: {
    'coach-item': CoachItem,
    BaseBadge,
    BaseButton,
    FilterCoach,
  },

  computed: {
    ...mapGetters(['getCoaches']),

    filteredCoaches() {
      return this.getCoaches.filter((i) => {
        if (this.activeFilters.frontend && i.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && i.areas.includes('backend')) {
          return true;
        }
        if (
          this.activeFilters.MachineLearning &&
          i.areas.includes('MachineLearning')
        ) {
          return true;
        }
        if (this.activeFilters.DataScience && i.areas.includes('DataScience')) {
          return true;
        }
        return false;
      });
    },
  },

  methods: {
    filterHandler(updatedFilter) {
      console.log(updatedFilter, 'updatedSide');
      this.activeFilters = updatedFilter;
    },
    listHandler() {
      console.log('clicked');

      console.log('listCoahc', this.getCoachList);
    },
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
}
</style>
