import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'
import { Oauth2Scheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": false,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/login",
    "logout": "/",
    "home": "/",
    "callback": "/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/",
      "expires": 365
    }
  },
  "localStorage": false,
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "user": {
    "property": "data.user"
  },
  "token": {
    "property": "data.token",
    "maxAge": 31536000
  },
  "refreshToken": false,
  "autoLogout": true,
  "endpoints": {
    "login": {
      "url": "/api/v1/auth/login",
      "method": "post"
    },
    "user": {
      "url": "/api/v1/auth/user",
      "method": "get"
    },
    "logout": false
  },
  "name": "local"
}))

  // vkontakte
  $auth.registerStrategy('vkontakte', new Oauth2Scheme($auth, {
  "token": {
    "property": "data.token",
    "maxAge": 31536000
  },
  "user": {
    "property": "data.user",
    "autoFetch": true
  },
  "endpoints": {
    "authorization": "https://oauth.vk.com/authorize",
    "userInfo": "http://localhost:3333/api/v1/auth/user"
  },
  "scope": [
    "email",
    "first_name",
    "last_name",
    "photo_100"
  ],
  "clientId": "7832576",
  "responseType": "token",
  "codeChallengeMethod": "",
  "redirectUri": "http://localhost:3000/user/social/vk",
  "name": "vkontakte"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
