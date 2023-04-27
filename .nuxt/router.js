import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _46d4886e = () => interopDefault(import('../pages/bonus/index.vue' /* webpackChunkName: "pages/bonus/index" */))
const _5f2fe7e5 = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _2b483f10 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _39bbfa60 = () => interopDefault(import('../pages/wallet/index.vue' /* webpackChunkName: "pages/wallet/index" */))
const _3acdfe36 = () => interopDefault(import('../pages/games/crash.vue' /* webpackChunkName: "pages/games/crash" */))
const _72282af4 = () => interopDefault(import('../pages/user/confirmation/_token.vue' /* webpackChunkName: "pages/user/confirmation/_token" */))
const _54d3597e = () => interopDefault(import('../pages/user/social/_provider.vue' /* webpackChunkName: "pages/user/social/_provider" */))
const _0bf7055e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bonus",
    component: _46d4886e,
    name: "bonus"
  }, {
    path: "/help",
    component: _5f2fe7e5,
    name: "help"
  }, {
    path: "/profile",
    component: _2b483f10,
    name: "profile"
  }, {
    path: "/wallet",
    component: _39bbfa60,
    name: "wallet"
  }, {
    path: "/games/crash",
    component: _3acdfe36,
    name: "games-crash"
  }, {
    path: "/user/confirmation/:token?",
    component: _72282af4,
    name: "user-confirmation-token"
  }, {
    path: "/user/social/:provider?",
    component: _54d3597e,
    name: "user-social-provider"
  }, {
    path: "/",
    component: _0bf7055e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
