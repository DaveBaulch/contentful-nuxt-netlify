// Nuxt.js lets you have a store directory with every file corresponding to a module.

export const state = () => ({
  contactActive: false,
  formSubmitted: false,
  formSuccess: false,
  formError: false
})

export const getters = {
  // Here we will create a getter
}

export const mutations = {
  // Here we will create mutations
  toggleContact (state) {
    state.contactActive = !state.contactActive
  },
  formSubmitted (state) {
    state.formSubmitted = true
  },
  formSuccess (state) {
    state.formSuccess = true
  },
  formError (state) {
    state.formError = true
  }
}

export const actions = {
  // Here we will create action
}
