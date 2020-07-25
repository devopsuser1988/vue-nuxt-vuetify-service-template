export default function (context) {
  if (!context.store.getters['apps/getItems']) {
    const name = context.route.name.split('-')
    context.store.dispatch('apps/setActiveApp', name[0])
  }
}
