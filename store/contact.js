// Nuxt.js lets you have a store directory with every file corresponding to a module.

// state
export const state = () => ({
  contactActive: false,
  formEntered: false,
  formSubmitted: false,
  formSuccess: false,
  formError: false
})

// actions
export const actions = {
  toggleContact ({ commit }) {
    commit('TOGGLE_CONTACT')
  },

  formEntered ({ commit }, status) {
    commit('FORM_ENTERED', status)
  },

  formSubmitted ({ commit }, status) {
    commit('FORM_SUBMITTED', status)
  },

  formSuccess ({ commit }, status) {
    commit('FORM_SUCCESS', status)
  },

  formError ({ commit }, status) {
    commit('FORM_ERROR', status)
  }
}

// mutations
export const mutations = {

  TOGGLE_CONTACT (state) {
    state.contactActive = !state.contactActive

    // manage focus
    const focusableItems = document.querySelectorAll('a[href]:not(.js-contact-focussable), input:not(.js-contact-focussable), button:not(.js-contact-focussable), select, textarea, iframe')
    const tabindexVal = state.sidebarActive ? '-1' : '0'
    Array.prototype.forEach.call(focusableItems, function (item) {
      item.setAttribute('tabindex', tabindexVal)
    })
  },

  FORM_ENTERED (state, status) {
    state.formEntered = status
  },

  FORM_SUBMITTED (state, status) {
    state.formSubmitted = status
  },

  FORM_SUCCESS (state, status) {
    state.formSuccess = status
  },

  FORM_ERROR (state, status) {
    state.formError = status
  }
}
