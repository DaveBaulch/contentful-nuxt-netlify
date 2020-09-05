<template>
  <main>
    <div class="single-post">
      <div v-if="!isLoading" class="single-post__article">
        <h1 class="single-post__title">
          {{ currentPost.fields.title }}
        </h1>
        <article>
          {{ $md.render(currentPost.fields.body) }}
        </article>

        <nuxt-link to="/blog" class="back-link">
          Back
        </nuxt-link>
      </div>
      <p v-else class="single-post__loading">
        Loading
      </p>
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
