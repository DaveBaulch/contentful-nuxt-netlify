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

    // const navButton = document.getElementById('nav-button')
    // const sidebarElement = document.getElementById('sidebar')

    // const navButton = this.$refs.navButton
    // const sidebarElement = this.$refs.sidebar

    // if (navButton.getAttribute('aria-expanded') === 'false') {
    //   navButton.setAttribute('aria-expanded', 'true')
    //   sidebarElement.setAttribute('aria-expanded', 'true')
    //   sidebarElement.setAttribute('aria-hidden', 'false')
    // } else {
    //   navButton.setAttribute('aria-expanded', 'false')
    //   sidebarElement.setAttribute('aria-expanded', 'false')
    //   sidebarElement.setAttribute('aria-hidden', 'true')
    // }
  }
}
