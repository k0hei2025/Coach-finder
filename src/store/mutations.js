export default {
               addCoachHandler(state, refObject) {
                              state.coaches.push({
                                             id: state.coaches.length + 1,
                                             firstName: refObject.firstName,
                                             lastName: refObject.lastName,
                                             description: refObject.description,
                                             areas: refObject.areas,
                                             HourlyRate: refObject.HourlyRate
                              })

                              console.log(state.coaches)
                              state.isSubmittedForm = true;
                              console.log('isSubmit', state.isSubmittedForm)
               }

}