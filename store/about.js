import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful'

// state
export const state = () => ({
  title: null,
  body: null
})

// actions
export const actions = {
  async getAboutContent ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        content_type: 'aboutPage',
        include: 2
      })
      if (response.items.length > 0) {
        console.log(response.items[0].fields)
        commit('UPDATE_ABOUT_TITLE', response.items[0].fields.title)
        commit('UPDATE_ABOUT_BODY', documentToHtmlString(response.items[0].fields.body))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

// mutations
export const mutations = {
  UPDATE_ABOUT_TITLE: (state, title) => {
    state.title = title
  },
  UPDATE_ABOUT_BODY: (state, body) => {
    state.body = body
  }
}
