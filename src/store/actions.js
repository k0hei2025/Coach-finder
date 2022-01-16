export default {
               async actionAddCoachHandler(context, refObject) {

                              if (refObject.firstName !== '' && refObject.lastName !== '' && refObject.description !== '' && refObject.areas !== [] && refObject.HourlyRate !== 0 && refObject.HourlyRate > 0) {

                                             const coachData = {
                                                            id: new Date().getTime(),
                                                            firstName: refObject.firstName,
                                                            lastName: refObject.lastName,
                                                            description: refObject.description,
                                                            areas: refObject.areas,
                                                            HourlyRate: refObject.HourlyRate
                                             }

                                             console.log('id coach', coachData.id)
                                             console.log('form data', refObject)

                                             const data = await fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${coachData.id}.json`, {
                                                            method: 'PUT',
                                                            body: JSON.stringify(coachData),

                                             })
                                             const resData = await data.json();
                                             console.log('httpData', resData)
                                             if (data.ok) {
                                                            const resData = await data.json();
                                                            console.log(resData)
                                             } else {
                                                            console.log('error')
                                             }
                                             context.commit('addCoachHandler', coachData)
                              }

               },
               async getCoachList() {
                              console.log('fdkjflksjflkds')
                              const data = await fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches.json`);
                              const resData = await data.json();
                              console.log(resData);
                              let coaches = [];
                              for (let i in resData) {
                                             coaches.push({
                                                            id: resData[i].id,
                                                            firstName: resData[i].firstName,
                                                            lastName: resData[i].lastName,
                                                            description: resData[i].description,
                                                            HourlyRate: resData[i].HourlyRate,
                                                            areas: resData[i].areas
                                             })
                              }
                              console.log(coaches)


               },

               async addContact(context, data) {


                              const requestAdd = []

                              const contactData = {
                                             id: new Date().getTime(),
                                             email: data.email,
                                             message: data.message
                              }
                              console.log(`at action`, data)

                              requestAdd.push(contactData)

                              const JsonData = await fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${data.coachId}/requests.json`, {
                                             method: 'POST',
                                             body: JSON.stringify(contactData)
                              })
                              const resData = await JsonData.json();
                              console.log(resData);

                              context.commit(`contactFormHandler`, data)
               }
}