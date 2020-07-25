export const state = () => ({
  counter: 0,
  drawer: false,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setDrawer(state, drawer) {
    state.drawer = drawer
  },
}

export const actions = {
  nuxtServerInit(vuexContext, context) {},
}
