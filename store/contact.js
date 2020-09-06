// Nuxt.js lets you have a store directory with every file corresponding to a module.

export const state = () => ({
  contactActive: false
})

export const getters = {
  // Here we will create a getter
}

export const mutations = {
  // Here we will create mutations
  toggleContact (state) {
    state.contactActive = !state.contactActive
  }
}

export const actions = {
  // Here we will create action
}
