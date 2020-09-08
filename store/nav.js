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
  }
}
