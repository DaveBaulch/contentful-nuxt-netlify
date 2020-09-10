import client from '~/plugins/contentful'

// state
export const state = () => ({
  work: null
})

// actions
export const actions = {
  async getWorkPosts ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        content_type: 'workPage',
        include: 2
      })
      if (response.items.length > 0) {
        commit('UPDATE_WORK', response.items[0].fields)
        console.log(response.items[0].fields)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

// mutations
export const mutations = {
  UPDATE_WORK: (state, work) => {
    state.work = work
  }
}
