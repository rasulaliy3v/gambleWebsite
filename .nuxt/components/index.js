export const CardGame = () => import('../../components/card/card-game.vue' /* webpackChunkName: "components/card-game" */).then(c => wrapFunctional(c.default || c))
export const FreeWheel = () => import('../../components/free/free-wheel.vue' /* webpackChunkName: "components/free-wheel" */).then(c => wrapFunctional(c.default || c))
export const ModalAuth = () => import('../../components/modal/modal-auth.vue' /* webpackChunkName: "components/modal-auth" */).then(c => wrapFunctional(c.default || c))
export const ModalProfileFullname = () => import('../../components/modal/modal-profile-fullname.vue' /* webpackChunkName: "components/modal-profile-fullname" */).then(c => wrapFunctional(c.default || c))
export const ModalRegister = () => import('../../components/modal/modal-register.vue' /* webpackChunkName: "components/modal-register" */).then(c => wrapFunctional(c.default || c))
export const ModalWithdraw = () => import('../../components/modal/modal-withdraw.vue' /* webpackChunkName: "components/modal-withdraw" */).then(c => wrapFunctional(c.default || c))
export const ModalSectionSocial = () => import('../../components/modal/section-social.vue' /* webpackChunkName: "components/modal-section-social" */).then(c => wrapFunctional(c.default || c))
export const SectionAppFooter = () => import('../../components/section/app-footer.vue' /* webpackChunkName: "components/section-app-footer" */).then(c => wrapFunctional(c.default || c))
export const SectionAppHeader = () => import('../../components/section/app-header.vue' /* webpackChunkName: "components/section-app-header" */).then(c => wrapFunctional(c.default || c))
export const SectionAppSidebar = () => import('../../components/section/app-sidebar.vue' /* webpackChunkName: "components/section-app-sidebar" */).then(c => wrapFunctional(c.default || c))
export const UiAppLanguageSwitcher = () => import('../../components/ui/app-language-switcher.vue' /* webpackChunkName: "components/ui-app-language-switcher" */).then(c => wrapFunctional(c.default || c))
export const UiAppNotification = () => import('../../components/ui/app-notification.vue' /* webpackChunkName: "components/ui-app-notification" */).then(c => wrapFunctional(c.default || c))
export const UiAppSpoiler = () => import('../../components/ui/app-spoiler.vue' /* webpackChunkName: "components/ui-app-spoiler" */).then(c => wrapFunctional(c.default || c))
export const UserBalance = () => import('../../components/user/user-balance.vue' /* webpackChunkName: "components/user-balance" */).then(c => wrapFunctional(c.default || c))
export const ModalCrashInstruction = () => import('../../components/modal/crash/modal-crash-instruction.vue' /* webpackChunkName: "components/modal-crash-instruction" */).then(c => wrapFunctional(c.default || c))
export const GamesCrashChart = () => import('../../components/games/crash/crash-chart.vue' /* webpackChunkName: "components/games-crash-chart" */).then(c => wrapFunctional(c.default || c))
export const GamesCrashTable = () => import('../../components/games/crash/crash-table.vue' /* webpackChunkName: "components/games-crash-table" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
