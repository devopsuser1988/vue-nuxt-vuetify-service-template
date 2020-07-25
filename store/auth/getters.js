export default {
  isAuthenticated(state) {
    return state.token != null
  },
  getToken(state) {
    return state.token
  },
  isInfo(state) {
    return state.info != null
  },
  getInfo(state) {
    return state.info
  },
  getFullName(state) {
    let firstName = ''
    let familyName = ''
    if (typeof state.info !== 'undefined' && state.info !== null) {
      let name
      name = state.info.first_name
      firstName = String(
        typeof name !== 'undefined' && name !== 'undefined' ? name : ''
      )
      name = state.info.family_name
      familyName = String(
        typeof name !== 'undefined' && name !== 'undefined' ? name : ''
      )
    }

    return firstName + ' ' + familyName
  },
}
