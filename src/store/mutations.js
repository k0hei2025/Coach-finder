export default {
               addCoachHandler(state, refObject) {

                              if (refObject.firstName !== '' && refObject.lastName !== '' && refObject.description !== '' && refObject.areas !== [] && refObject.HourlyRate !== 0 && refObject.HourlyRate > 0) {
                                             state.coaches.push({
                                                            id: state.coaches.length + 1,
                                                            firstName: refObject.firstName,
                                                            lastName: refObject.lastName,
                                                            description: refObject.description,
                                                            areas: refObject.areas,
                                                            HourlyRate: refObject.HourlyRate
                                             })
                                             console.log(state.coaches)
                                             state.isError = false;

                              } else {
                                             state.isError = true;
                                             console.log('error please fill fields correctly', state.isError)
                              }

                              // console.log(state.coaches)
                              // state.isSubmittedForm = true;
                              // console.log('isSubmit', state.isSubmittedForm)
               }

}