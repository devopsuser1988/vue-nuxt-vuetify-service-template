export default ({ app }, inject) => {
  inject('mhandler', {
    check(error, source, params) {
      let status = -1
      let message = ''
      if (error == null) {
        switch (source) {
          case 'addNewOrder':
            message = 'New order added for ' + params.name
            break
          case 'checkProjectStatus':
            message = 'Project chck status OK'
            break
        }
        showMessage(app, message)
      } else {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data) // eslint-disable-line no-console
          // console.log(error.response.status) // eslint-disable-line no-console
          // console.log(error.response.headers) // eslint-disable-line no-console
          message = error.response.data.message
          status = error.response.status
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log(error.request) // eslint-disable-line no-console
          status = 0
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('Error', error.message) // eslint-disable-line no-console
        }
        // console.log(error.config) // eslint-disable-line no-console
        //
        showMessage(app, message, 'error')
      }
      //
      return status
    },
  })
}

const showMessage = function (
  app,
  content = '',
  type = 'success',
  timeout = 5
) {
  app.$notifier.showMessage({
    content,
    type,
    timeout,
  })
}
