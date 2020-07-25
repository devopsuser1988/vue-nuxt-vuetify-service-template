export default {
  getCars(state) {
    return state.cars
  },
  getCarList(state) {
    return state.cars.map((car) => {
      return {
        value: car._id,
        text: car.license_plate_str,
      }
    })
  },
  getDrivers(state) {
    return state.drivers
  },
  getDriverList(state) {
    return state.drivers.map((driver) => {
      return {
        value: driver._id,
        text: driver.name,
      }
    })
  },
  getCustomers(state) {
    return state.customers
  },
  getCustomerList(state) {
    return state.customers.map((customer) => {
      return {
        value: customer._id,
        text: customer.name,
      }
    })
  },
  getProducts(state) {
    return state.products
  },
  getProductList(state) {
    return state.products.map((product) => {
      return {
        value: product._id,
        text: product.name,
      }
    })
  },
}
