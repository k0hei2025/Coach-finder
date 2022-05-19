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
          areas: ['frontend', 'backend'],
          description: 'Hi i am Alex when I was 12 I start Coding Because I love to develop Apps',
          HourlyRate: 45
        },
        {
          id: 2,
          firstName: 'Xavior',
          lastName: 'Akaserx',
          areas: ['DataScience', 'MachineLearning'],
          description: 'I have 12 years of Teaching Experience I give you full responsibilty for your dataScience future',
          HourlyRate: 30
        }
      ],
      isSubmittedForm: false,
      isError: false,
      requests: [

      ],
      authenticateInformation: {
        idToken: '',
        localId: ''
      },
      isOurUser: false,
      isMentor: false,

      profileData: {},
      isDeleted: false
    }

  },
  mutations: mutations,
  actions: actions,
  getters: getters


})

export default store;