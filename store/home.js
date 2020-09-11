import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful'

// state
export const state = () => ({
  // home: null,
  title: null,
  body: null
})

// actions
export const actions = {
  async getHomeContent ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        content_type: 'homePage',
        include: 2
      })
      if (response.items.length > 0) {
        // commit('UPDATE_HOME', response.items[0].fields)
        console.log(response.items[0].fields)
        commit('UPDATE_HOME_TITLE', response.items[0].fields.title)
        commit('UPDATE_HOME_BODY', documentToHtmlString(response.items[0].fields.body))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

// mutations
export const mutations = {
  UPDATE_HOME: (state, home) => {
    state.home = home
  },
  UPDATE_HOME_TITLE: (state, title) => {
    state.title = title
  },
  UPDATE_HOME_BODY: (state, body) => {
    state.body = body
  }
}
