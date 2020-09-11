import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import client from '~/plugins/contentful'

// state
export const state = () => ({
  all: null,
  title: null,
  body: null,
  items: null
})

// actions
export const actions = {
  async getCvContent ({ commit }) {
    try {
      if (!client) { return }
      const response = await client.getEntries({
        content_type: 'cvPage',
        include: 2
      })
      if (response.items.length > 0) {
        commit('UPDATE_ALL', response.items[0].fields)
        commit('UPDATE_CV_TITLE', response.items[0].fields.title)
        commit('UPDATE_CV_BODY', documentToHtmlString(response.items[0].fields.body))
        commit('UPDATE_CV_ITEMS', response.items[0].fields.cvItems)
        console.log('items' + response.items[0].fields.cvItems)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

// mutations
export const mutations = {
  UPDATE_ALL: (state, all) => {
    state.all = all
  },
  UPDATE_CV_TITLE: (state, title) => {
    state.title = title
  },
  UPDATE_CV_BODY: (state, body) => {
    state.body = body
  },
  UPDATE_CV_ITEMS: (state, items) => {
    state.items = items
  }
}
