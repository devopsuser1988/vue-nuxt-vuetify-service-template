export default {
  setCars(state, cars) {
    carFixes(cars)
    state.cars = cars
  },
  addCar(state, car) {
    carFixes([car])
    state.cars.push(car)
  },
  editCar(state, car) {
    const index = state.cars.findIndex((item) => {
      return item._id === car._id
    })
    if (index !== -1) {
      carFixes([car])
      state.cars.splice(index, 1, car)
    }
  },
  deleteCar(state, id) {
    const index = state.cars.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.cars.splice(index, 1)
  },
  setDrivers(state, drivers) {
    state.drivers = drivers
  },
  addDriver(state, driver) {
    state.drivers.push(driver)
  },
  editDriver(state, driver) {
    const index = state.drivers.findIndex((item) => {
      return item._id === driver._id
    })
    if (index !== -1) state.drivers.splice(index, 1, driver)
  },
  deleteDriver(state, id) {
    const index = state.drivers.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.drivers.splice(index, 1)
  },
  setCustomers(state, customers) {
    state.customers = customers
  },
  addCustomer(state, customer) {
    state.customers.push(customer)
  },
  editCustomer(state, customer) {
    const index = state.customers.findIndex((item) => {
      return item._id === customer._id
    })
    if (index !== -1) state.customers.splice(index, 1, customer)
  },
  deleteCustomer(state, id) {
    const index = state.customers.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.customers.splice(index, 1)
  },
  setProducts(state, products) {
    state.products = products
  },
  addProduct(state, product) {
    state.products.push(product)
  },
  editProduct(state, product) {
    const index = state.products.findIndex((item) => {
      return item._id === product._id
    })
    if (index !== -1) state.products.splice(index, 1, product)
  },
  deleteProduct(state, id) {
    const index = state.products.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.products.splice(index, 1)
  },
}

function carFixes(cars) {
  cars.forEach((element) => {
    element.license_plate_str = getLicensePlateStr(element.license_plate)
  })
}

function getLicensePlateStr(license) {
  return license
    ? String(
        ' ایران ' +
          (license.province === undefined ? ' ' : String(license.province)) +
          ' - ' +
          (license.three_part === undefined
            ? ' '
            : String(license.three_part)) +
          ' ' +
          (license.city === undefined ? ' ' : String(license.city)) +
          ' ' +
          (license.two_part === undefined ? ' ' : String(license.two_part))
      ).toLowerCase()
    : ''
}
