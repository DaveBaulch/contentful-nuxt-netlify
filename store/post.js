import client from '~/plugins/contentful'

// state
export const state = () => ({
  currentPost: {},
  isLoading: true
})

// actions
export const actions = {
  async getPostBySlug ({ commit }, slug) {
    commit('SET_LOADING', true)
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug
    })
    commit('SET_CURRENT_POST', response.items[0])
    commit('SET_LOADING', false)
  }
}

// mutations
export const mutations = {
  SET_CURRENT_POST (state, payload) {
    state.currentPost = payload
  },
  SET_LOADING (state, payload) {
    state.isLoading = payload
  }
}
