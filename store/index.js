import client from '~/plugins/contentful'

// state
export const state = () => ({
  posts: null
})

// actions
export const actions = {
  async getPosts ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        // content_type: 'blogPost'
        content_type: 'blogItems',
        include: 2
      })
      if (response.items.length > 0) {
        // commit('updatePosts', response.items)
        // commit('updatePosts', response.items[0].fields.blogs)
        // console.log(response.items[0].fields.blogs)
        commit('UPDATE_POSTS', response.items[0].fields)
        console.log(response.items[0].fields)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

// mutations
export const mutations = {
  UPDATE_POSTS: (state, posts) => {
    state.posts = posts
  }
}
