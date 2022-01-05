import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const store = createStore({
  state() {
    return {
      coaches: [
        {
          id: 1,
          firstName: 'Alex',
          lastName: 'corvous',
          areas: ['front-end', 'backend'],
          description: 'Hi i am Alex when I was 12 I start Coding Because I love to develop Apps',
          HourlyRate: 45
        },
        {
          id: 2,
          firstName: 'Xavior',
          lastName: 'Akaserx',
          areas: ['Data Science', 'Machine Learning'],
          description: 'I have 12 years of Teaching Experience I give you full responsibilty for your dataScience future',
          HourlyRate: 30
        }
      ]

    }

  },
  mutations: mutations,
  actions: actions,
  getters: getters


})

export default store;