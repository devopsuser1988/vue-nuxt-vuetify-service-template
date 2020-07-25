import momentJalaali from 'moment-jalaali'

export default {
  setDeliverys(state, { deliverys, rootState }) {
    deliveryFixes(deliverys, rootState)
    state.deliverys = deliverys
  },
  addDelivery(state, { delivery, rootState }) {
    deliveryFixes([delivery], rootState)
    state.deliverys.push(delivery)
  },
  editDelivery(state, { delivery, rootState }) {
    const index = state.deliverys.findIndex((item) => {
      return item._id === delivery._id
    })
    if (index !== -1) {
      deliveryFixes([delivery], rootState)
      state.deliverys.splice(index, 1, delivery)
    }
  },
  deleteDelivery(state, id) {
    const index = state.deliverys.findIndex((item) => {
      return item._id === id
    })
    if (index !== -1) state.deliverys.splice(index, 1)
  },
}

function deliveryFixes(deliverys, rootState) {
  deliverys.forEach((element) => {
    element.code_str = getShortCode(element.code)
    const customer = getCustomerNameAndAddress(element.customer_id, rootState)
    element.customer_name_str = customer.name
    element.address_str = customer.address
    element.driver_name_str = getDriverName(element.driver_id, rootState)
    element.product_name_str = getProductName(element.product_id, rootState)
    element.license_plate_str = getLicensePlateStr(element.car_id, rootState)
    element.date_delivery_str = getDateDeliveryStr(element.date_delivery)
  })
}

function getShortCode(code) {
  return code ? String(code).slice(-4) : ''
}

function getCustomerNameAndAddress(customerId, rootState) {
  const customers = rootState.basics.customers
  const index = customers.findIndex((item) => {
    return item._id === customerId
  })

  let name = ''
  let address = ''
  if (index !== -1) {
    name = customers[index].name
    address = customers[index].address
  }

  return {
    name,
    address,
  }
}

function getDriverName(driverId, rootState) {
  const drivers = rootState.basics.drivers
  const index = drivers.findIndex((item) => {
    return item._id === driverId
  })

  return index !== -1 ? drivers[index].name : ''
}

function getProductName(productId, rootState) {
  const products = rootState.basics.products
  const index = products.findIndex((item) => {
    return item._id === productId
  })

  return index !== -1 ? products[index].name : ''
}

function getLicensePlateStr(carId, rootState) {
  const cars = rootState.basics.cars
  const index = cars.findIndex((item) => {
    return item._id === carId
  })

  if (index !== -1) {
    const license = cars[index].license_plate
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
  } else return ''
}

function getDateDeliveryStr(dateDelivery) {
  if (dateDelivery) {
    return momentJalaali(dateDelivery).format('HH:mm')
  } else return ''
}
