export default {
  getDeliverys(vuexContext) {
    return new Promise((resolve, reject) => {
      const deliverys = vuexContext.rootState.projects.deliverys
      if (deliverys.length > 0) return resolve(deliverys)
      this.$api
        // .getDeliverysDate('2020-04-20T19:30:00.000Z')
        .getDeliverys()
        .then((result) => {
          const deliverys = [...result.data]
          const rootState = vuexContext.rootState
          vuexContext.commit('setDeliverys', { deliverys, rootState })
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addDelivery(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addDelivery(data)
        .then((result) => {
          const rootState = vuexContext.rootState
          const delivery = result
          vuexContext.commit('addDelivery', { delivery, rootState })
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editDelivery(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editDelivery(data)
        .then((result) => {
          const rootState = vuexContext.rootState
          const delivery = result
          vuexContext.commit('editDelivery', { delivery, rootState })
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteDelivery(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteDelivery(id)
        .then((result) => {
          vuexContext.commit('deleteDelivery', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
}
