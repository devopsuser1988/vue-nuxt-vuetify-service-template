export default {
  getCars(vuexContext) {
    return new Promise((resolve, reject) => {
      const cars = vuexContext.rootState.basics.cars
      if (cars.length > 0) return resolve(cars)
      if (vuexContext.state.cars.length > 0)
        return resolve(vuexContext.state.cars)
      this.$api
        .getCars()
        .then((result) => {
          const data = [...result.data]
          vuexContext.commit('setCars', data)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addCar(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addCar(data)
        .then((result) => {
          vuexContext.commit('addCar', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editCar(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editCar(data)
        .then((result) => {
          vuexContext.commit('editCar', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteCar(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteCar(id)
        .then((result) => {
          vuexContext.commit('deleteCar', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getDrivers(vuexContext) {
    return new Promise((resolve, reject) => {
      const drivers = vuexContext.rootState.basics.drivers
      if (drivers.length > 0) return resolve(drivers)
      if (vuexContext.state.drivers.length > 0)
        return resolve(vuexContext.state.drivers)
      this.$api
        .getDrivers()
        .then((result) => {
          const data = [...result.data]
          vuexContext.commit('setDrivers', data)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addDriver(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addDriver(data)
        .then((result) => {
          vuexContext.commit('addDriver', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editDriver(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editDriver(data)
        .then((result) => {
          vuexContext.commit('editDriver', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteDriver(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteDriver(id)
        .then((result) => {
          vuexContext.commit('deleteDriver', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getCustomers(vuexContext) {
    return new Promise((resolve, reject) => {
      const customers = vuexContext.rootState.basics.customers
      if (customers.length > 0) return resolve(customers)
      if (vuexContext.state.customers.length > 0)
        return resolve(vuexContext.state.customers)
      this.$api
        .getCustomers()
        .then((result) => {
          const data = [...result.data]
          vuexContext.commit('setCustomers', data)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addCustomer(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addCustomer(data)
        .then((result) => {
          vuexContext.commit('addCustomer', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editCustomer(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editCustomer(data)
        .then((result) => {
          vuexContext.commit('editCustomer', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteCustomer(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteCustomer(id)
        .then((result) => {
          vuexContext.commit('deleteCustomer', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  getProducts(vuexContext) {
    return new Promise((resolve, reject) => {
      const products = vuexContext.rootState.basics.products
      if (products.length > 0) return resolve(products)
      if (vuexContext.state.products.length > 0)
        return resolve(vuexContext.state.products)
      this.$api
        .getProducts()
        .then((result) => {
          const data = [...result.data]
          vuexContext.commit('setProducts', data)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  addProduct(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .addProduct(data)
        .then((result) => {
          vuexContext.commit('addProduct', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  editProduct(vuexContext, data) {
    return new Promise((resolve, reject) => {
      this.$api
        .editProduct(data)
        .then((result) => {
          vuexContext.commit('editProduct', result)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  deleteProduct(vuexContext, id) {
    return new Promise((resolve, reject) => {
      this.$api
        .deleteProduct(id)
        .then((result) => {
          vuexContext.commit('deleteProduct', id)
          resolve(result)
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
}
