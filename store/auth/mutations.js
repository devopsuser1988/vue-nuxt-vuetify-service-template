export default {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  },
  setInfo(state, info) {
    state.info = info
  },
  clearInfo(state) {
    state.info = null
  },
}
