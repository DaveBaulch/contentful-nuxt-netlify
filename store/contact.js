// Nuxt.js lets you have a store directory with every file corresponding to a module.

export const state = () => ({
  contactActive: false,
  formEntered: false,
  formSubmitted: false,
  formSuccess: false,
  formError: false
})

export const getters = {
}

export const mutations = {
  toggleContact (state) {
    state.contactActive = !state.contactActive
  },
  formEntered (state, status) {
    state.formEntered = status
  },
  formSubmitted (state, status) {
    state.formSubmitted = status
  },
  formSuccess (state, status) {
    state.formSuccess = status
  },
  formError (state, status) {
    state.formError = status
  }
}

export const actions = {
  // Here we will create action
}
