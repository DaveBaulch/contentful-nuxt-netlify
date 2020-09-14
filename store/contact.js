// Nuxt.js lets you have a store directory with every file corresponding to a module.

// state
export const state = () => ({
  contactActive: false,
  formEntered: false,
  formSubmitted: false,
  formSuccess: false,
  formError: false,
  whichOpenButtonId: null
})

// getters
export const getters = {
  showContact: state => state.contactActive
}

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
    const focusableContactItems = document.querySelectorAll('.js-contact-focussable')
    const notFocusableContactItems = document.querySelectorAll('a[href]:not(.js-contact-focussable), input:not(.js-contact-focussable), button:not(.js-contact-focussable), select, textarea, iframe')

    const tabindexOtherItems = state.contactActive ? '-1' : '0'
    Array.prototype.forEach.call(notFocusableContactItems, function (item) {
      item.setAttribute('tabindex', tabindexOtherItems)
    })

    const tabindexContactItems = state.contactActive ? '0' : '-1'
    Array.prototype.forEach.call(focusableContactItems, function (item) {
      item.setAttribute('tabindex', tabindexContactItems)
    })

    if ((state.contactActive === false) && (state.sidebarActive === true)) {
      const notFocusableSidebarItems = document.querySelectorAll('a[href]:not(.js-sidebar-focussable), input:not(.js-sidebar-focussable), button:not(.js-sidebar-focussable), select, textarea, iframe')
      Array.prototype.forEach.call(notFocusableSidebarItems, function (item) {
        item.setAttribute('tabindex', -1)
      })

      const focusableSidebarItems = document.querySelectorAll('.js-sidebar-focussable')
      Array.prototype.forEach.call(focusableSidebarItems, function (item) {
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
