import client from '~/plugins/contentful'

export const state = () => ({
  posts: null
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  }
}

export const actions = {
  async getPosts ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        // content_type: 'blogPost'
        content_type: 'blogItems'
      })
      if (response.items.length > 0) {
        // commit('updatePosts', response.items)
        // commit('updatePosts', response.items[0].fields.blogs)
        // console.log(response.items[0].fields.blogs)
        commit('updatePosts', response.items[0].fields)
        console.log(response.items[0].fields)
      }
    } catch (err) {
      console.error(err)
    }
  }
}
