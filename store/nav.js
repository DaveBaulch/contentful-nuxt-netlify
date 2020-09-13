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
    const notFocusableItems = document.querySelectorAll('a[href]:not(.js-sidebar-focussable), input:not(.js-sidebar-focussable), button:not(.js-sidebar-focussable), select, textarea, iframe')
    const tabindexVal = state.sidebarActive ? '-1' : '0'
    Array.prototype.forEach.call(notFocusableItems, function (item) {
      item.setAttribute('tabindex', tabindexVal)
    })
  }
}
