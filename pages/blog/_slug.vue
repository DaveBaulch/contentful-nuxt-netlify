<template>
  <main>
    <app-hero
      image-src="hero-bg.jpg"
      title="Blog page title"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      link="http://www.bbc.co.uk"
    />

    <div class="container">
      <h2>Article page subtitle</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed metus ac mauris iaculis vestibulum et et velit. Pellentesque et ligula nec justo molestie tristique ac et felis. Suspendisse odio diam, tempor ac dui sed, pellentesque imperdiet ipsum. Fusce ut placerat eros. Curabitur vulputate nulla quis dui ornare, et fermentum felis egestas. Morbi consectetur tellus ipsum, ac bibendum velit viverra nec. Phasellus egestas ligula eget augue commodo, et pretium eros convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus convallis lectus nec quam suscipit aliquet. Vivamus ullamcorper tortor eget ipsum venenatis, vitae pulvinar metus facilisis. Phasellus eu eros est. Nullam vehicula, lectus a molestie venenatis, augue lorem venenatis sem, sed egestas felis magna vel arcu.</p>
    </div>

    <div class="container">
      <div class="single-post">
        <div v-if="!isLoading" class="single-post__article">
          <h1 class="single-post__title">
            {{ currentPost.fields.title }}
          </h1>
          <article v-html="$md.render(currentPost.fields.body)" />

          <nuxt-link to="/blog" class="back-link">
            Back
          </nuxt-link>
        </div>
        <p v-else class="single-post__loading">
          Loading
        </p>
      </div>
    </div>
    <main />
  </main>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('post/getPostBySlug', params.slug)
  },
  computed: {
    currentPost () {
      return this.$store.state.post.currentPost
    },
    isLoading () {
      return this.$store.state.post.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
.back-link {
  margin: 2rem 0;
  color: $red;
}
</style>
