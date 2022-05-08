export default {
               getCoaches(state) {
                              return state.coaches;
               },
               hasCoaches(state) {
                              return state.coaches && state.coaches.length > 0;
               },
               isSubmitted(state) {
                              state.isSubmittedForm;
                              console.log(state.isSubmittedForm)
               },
               isErrorStates(state) {
                              return state.isError
               },
               getRequests(state) {
                              return state.requests
               },
               authenticatedData(state) {
                              return state.authenticateInformation
               },
               isOurUser(state) {
                              return state.isOurUser
               },
               isAMentor(state) {
                              return state.isMentor
               },
               getUserData(state) {
                              return state.profileData
               }


}