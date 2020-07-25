export default function (context) {
  context.store.dispatch('auth/initInfo', context.req)
}
