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

  },

  contactFormHandler(state, data) {

    state.requests.push({
      id: state.requests.length + 1,
      email: data.email,
      message: data.message
    })
    console.log('contact Data', state.requests)
  },

  getCoachList(state, data) {
    state.coaches = data
  },

  addAuthenticateUserData(state, data) {
    state.authenticateInformation.idToken = data.idToken,
      state.authenticateInformation.localId = data.localId
    if (state.authenticateInformation.idToken) {
      state.isOurUser = true;
    }

  },

  genereChangeHandler(state) {
    state.isMentor = !state.isMentor
  }
}
