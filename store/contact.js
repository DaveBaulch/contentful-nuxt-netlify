// Nuxt.js lets you have a store directory with every file corresponding to a module.

// state
export const state = () => ({
  contactActive: false,
  sidebarActive: false,
  formEntered: false,
  formSubmitted: false,
  formSuccess: false,
  formError: false,
  whichOpenButtonId: null
})

// actions
export const actions = {
  toggleContact ({ commit }, id) {
    commit('TOGGLE_CONTACT', id)
  },

  toggleSidebar ({ commit }, id) {
    commit('TOGGLE_SIDEBAR')
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

  TOGGLE_CONTACT (state, id) {
    state.contactActive = !state.contactActive

    // manage focus
    if (state.contactActive === true) {
      const notFocusableItems = document.querySelectorAll('a[href]:not(.js-contact-focussable), input:not(.js-contact-focussable), button:not(.js-contact-focussable), select, textarea, iframe')
      const tabindexVal = state.contactActive ? '-1' : '0'
      Array.prototype.forEach.call(notFocusableItems, function (item) {
        item.setAttribute('tabindex', tabindexVal)
      })

      const focusableItems = document.querySelectorAll('.js-contact-focussable')
      Array.prototype.forEach.call(focusableItems, function (item) {
        item.setAttribute('tabindex', 0)
      })
    }

    if ((state.contactActive === false) && (state.sidebarActive === true)) {
      const notFocusableItems = document.querySelectorAll('a[href]:not(.js-sidebar-focussable), input:not(.js-sidebar-focussable), button:not(.js-sidebar-focussable), select, textarea, iframe')
      Array.prototype.forEach.call(notFocusableItems, function (item) {
        item.setAttribute('tabindex', -1)
      })

      const focusableItems = document.querySelectorAll('.js-sidebar-focussable')
      Array.prototype.forEach.call(focusableItems, function (item) {
        item.setAttribute('tabindex', 0)
      })
    }

    state.whichOpenButtonId = id
  },

  TOGGLE_SIDEBAR (state) {
    state.sidebarActive = !state.sidebarActive
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
