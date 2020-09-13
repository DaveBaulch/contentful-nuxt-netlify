// state
export const state = () => ({
  sidebarActive: false
})

// getters
export const getters = {
  showSidebar: state => state.sidebarActive
}

// actions
export const actions = {
  toggleSidebar ({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

// mutations
export const mutations = {
  TOGGLE_SIDEBAR (state) {
    state.sidebarActive = !state.sidebarActive

    // manage focus
    const focusableSidebarItems = document.querySelectorAll('.js-sidebar-focussable')
    const notFocusableSidebarItems = document.querySelectorAll('a[href]:not(.js-sidebar-focussable), input:not(.js-sidebar-focussable), button:not(.js-sidebar-focussable), select, textarea, iframe')

    const tabindexOtherItems = state.sidebarActive ? '-1' : '0'
    Array.prototype.forEach.call(notFocusableSidebarItems, function (item) {
      item.setAttribute('tabindex', tabindexOtherItems)
    })

    const tabindexNavItems = state.sidebarActive ? '0' : '-1'
    Array.prototype.forEach.call(focusableSidebarItems, function (item) {
      item.setAttribute('tabindex', tabindexNavItems)
    })

    const notFocusableContactItems = document.querySelectorAll('.js-contact-focussable')
    Array.prototype.forEach.call(notFocusableContactItems, function (item) {
      item.setAttribute('tabindex', -1)
    })
  }
}
