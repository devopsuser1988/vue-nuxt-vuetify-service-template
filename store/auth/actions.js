import Cookie from 'js-cookie'

export default {
  registerUser(vuexContext, authData) {
    return new Promise((resolve, reject) => {
      this.$api
        .registerUser({
          userName: authData.user_name,
          password: authData.password,
          name: authData.name,
          email: authData.email,
        })
        .then((result) => {
          const token = result['x-access-token']
          const expireDate = result['X-Expires-After']
          const expireToken = Number.parseInt(new Date(expireDate).getTime())
          vuexContext.commit('setToken', token)
          localStorage.setItem('token', token)
          localStorage.setItem('expireToken', expireToken)
          Cookie.set('token', token)
          Cookie.set('expireToken', expireToken)
          resolve()
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  athenticateUser(vuexContext, authData) {
    return new Promise((resolve, reject) => {
      this.$api
        .athenticateUser({
          userName: authData.user_name,
          password: authData.password,
        })
        .then((result) => {
          const token = result['x-access-token']
          const expireDate = result['X-Expires-After']
          const expireToken = Number.parseInt(new Date(expireDate).getTime())
          vuexContext.commit('setToken', token)
          localStorage.setItem('token', token)
          localStorage.setItem('expireToken', expireToken)
          Cookie.set('token', token)
          Cookie.set('expireToken', expireToken)
          resolve()
        })
        .catch((status) => {
          reject(status)
        })
    })
  },
  initAuth(vuexContext, req) {
    let token
    let expireToken

    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const tokenCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('token='))
      if (!tokenCookie) {
        return
      }
      token = tokenCookie.split('=')[1]
      const expireTokenCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('expireToken='))
      if (expireTokenCookie) {
        expireToken = expireTokenCookie.split('=')[1]
      }
    } else {
      token = localStorage.getItem('token')
      expireToken = localStorage.getItem('expireToken')
    }

    if (new Date().getTime() > +expireToken || !token) {
      vuexContext.dispatch('logout')
      return
    }

    vuexContext.commit('setToken', token)
  },
  logout(vuexContext) {
    vuexContext.commit('clearToken')
    vuexContext.commit('clearInfo')
    Cookie.remove('token')
    localStorage.removeItem('token')
  },
  getUserInfo(vuexContext) {
    this.$api.getUserInfo().then((info) => {
      const strInfo = JSON.stringify(info)
      vuexContext.commit('setInfo', info)
      localStorage.setItem('info', strInfo)
      Cookie.set('first_name', String(info.first_name))
      Cookie.set('family_name', String(info.family_name))
      Cookie.set('email', String(info.email))
    })
  },
  initInfo(vuexContext, req) {
    let info

    if (req) {
      if (!req.headers.cookie) {
        return
      }
      let firstName
      let familyName
      let _email

      const firstNameCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('first_name='))
      if (firstNameCookie) {
        firstName = firstNameCookie.split('=')[1]
      }
      const familyNameCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('family_name='))
      if (familyNameCookie) {
        familyName = familyNameCookie.split('=')[1]
      }
      const emailCookie = req.headers.cookie
        .split(';')
        .find((c) => c.trim().startsWith('email='))
      if (emailCookie) {
        _email = emailCookie.split('=')[1]
      }
      info = {
        first_name: decodeURI(firstName),
        family_name: decodeURI(familyName),
        email: decodeURI(_email),
      }
    } else {
      const strInfo = localStorage.getItem('info')
      info = JSON.parse(strInfo)
    }

    if (!info) {
      return
    }
    vuexContext.commit('setInfo', info)
  },
}
