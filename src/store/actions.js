export default {
  async actionAddCoachHandler(context, refObject) {

    if (refObject.firstName !== '' && refObject.lastName !== '' && refObject.description !== '' && refObject.areas !== [] && refObject.HourlyRate !== 0 && refObject.HourlyRate > 0) {

      const coachData = {
        id: new Date().getTime(),
        firstName: refObject.firstName,
        lastName: refObject.lastName,
        description: refObject.description,
        areas: refObject.areas,
        HourlyRate: refObject.HourlyRate,
        phoneNumber: refObject.phoneNumber,
        email: refObject.email,
        country: refObject.country,
        state: refObject.state,
        qualification: refObject.qualification,
        userId: context.state.authenticateInformation.localId
      }

      console.log('id coach', coachData.id)
      console.log('form data', refObject, context.state.authenticateInformation, 'datatata')

      const data = await fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${context.state.authenticateInformation.localId}.json`, {
        method: 'PATCH',
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
    console.log(coaches, 'csososo')


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

    const JsonData = await fetch(`https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${data.userId
      }/requests.json`, {
      method: 'POST',
      body: JSON.stringify(contactData)
    })
    const resData = await JsonData.json();
    console.log(resData);

    context.commit(`contactFormHandler`, data)
  },

  async userDataHandler(context) {
    const data = await fetch(
      `https://coach-finder-5a7ed-default-rtdb.firebaseio.com/coaches/${this.authenticatedData.localId}/requests.json`
    );
    const resData = await data.json();
    for (let i in resData) {
      context.state.profileData.name = resData[i].firstName + ` ` + resData[i].lastName;
      context.state.profileData.qualification = resData[i].qualification;
      context.state.profileData.phoneNumber = resData[i].phoneNumber;
      context.state.profileData.country = resData[i].country;
      context.state.profileData.city = resData[i].city;
    }
  }
}