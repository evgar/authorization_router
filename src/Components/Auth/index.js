import auth0 from 'auth0-js'

const LOGIN_SUCCESS_PAGE = '/profile'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'evgar.eu.auth0.com',
    clientID: '2SMSBOKFgoaZwxZe1LSGKKqp8PkwiCpO',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://evgar.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid',
  })

  login = () => {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        window.location.hash = ''
        window.location.pathname = LOGIN_SUCCESS_PAGE
      } else if (err) {
        console.log(err)
      }
    })
  }

  setSession(authResult) {
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime(),
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default Auth
