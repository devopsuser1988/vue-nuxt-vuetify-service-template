const DEFAULT_SKIP = 0
const DEFAULT_LIMIT = 1000

const urlRegister = 'users/register'
//const urlAuth = 'users/login'
const urlRequestOTP = 'account/login?type=mobilePhone'
const urlGetUserInfo = 'users/getUserInfo'
const urlGetCars = 'basics/car/gets'
const urlAddCar = 'basics/car/add'
const urlEditCar = 'basics/car/edit'
const urlDeleteCar = 'basics/car/delete'
const urlGetDrivers = 'basics/driver/gets'
const urlAddDriver = 'basics/driver/add'
const urlEditDriver = 'basics/driver/edit'
const urlDeleteDriver = 'basics/driver/delete'
const urlGetCustomers = 'basics/customer/gets'
const urlAddCustomer = 'basics/customer/add'
const urlEditCustomer = 'basics/customer/edit'
const urlDeleteCustomer = 'basics/customer/delete'
const urlGetProducts = 'basics/product/gets'
const urlAddProduct = 'basics/product/add'
const urlEditProduct = 'basics/product/edit'
const urlDeleteProduct = 'basics/product/delete'
const urlGetDeliverys = 'projects/delivery/gets'
const urlAddDelivery = 'projects/delivery/add'
const urlEditDelivery = 'projects/delivery/edit'
const urlDeleteDelivery = 'projects/delivery/delete'
const urlGetDeliverysDate = 'projects/delivery/gets/date'

export default ({ app }, inject) => {
  inject('api', {
    registerUser({ userName, password, name, email }) {
      return new Promise((resolve, reject) => {
        app.$axios
          .$post(urlRegister, {
            user_name: userName,
            password,
            name,
            email,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    athenticateUser({ userName, password }) {
      return new Promise((resolve, reject) => {
        app.$axios
          .$post(urlRequestOTP, {
            mobilePhone: userName,
            password,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetUserInfo)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getCars() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetCars, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addCar(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlAddCar, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editCar(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlEditCar, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteCar(id) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlDeleteCar, {
            _id: id,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getDrivers() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetDrivers, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addDriver(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlAddDriver, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editDriver(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlEditDriver, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteDriver(id) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlDeleteDriver, {
            _id: id,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getCustomers() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetCustomers, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addCustomer(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlAddCustomer, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editCustomer(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlEditCustomer, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteCustomer(id) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlDeleteCustomer, {
            _id: id,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getProducts() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetProducts, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addProduct(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlAddProduct, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editProduct(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlEditProduct, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteProduct(id) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlDeleteProduct, {
            _id: id,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getDeliverys() {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetDeliverys, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    addDelivery(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlAddDelivery, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    editDelivery(data) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlEditDelivery, data)
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    deleteDelivery(id) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlDeleteDelivery, {
            _id: id,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
    getDeliverysDate(date) {
      return new Promise((resolve, reject) => {
        app.$axios
          .create({
            headers: {
              'Content-Type': 'application/json',
              'x-access-token': app.store.state.auth.token,
            },
          })
          .$post(urlGetDeliverysDate, {
            skip: DEFAULT_SKIP,
            limit: DEFAULT_LIMIT,
            date,
          })
          .then((result) => {
            resolve(result)
          })
          .catch((error) => {
            reject(app.$mhandler.check(error))
          })
      })
    },
  })
}
