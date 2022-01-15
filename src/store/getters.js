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
               }

}