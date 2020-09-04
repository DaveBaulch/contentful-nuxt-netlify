<template>
  <div class="single-post">
    <div v-if="!isLoading" class="single-post__article">
      <h1 class="single-post__title">
        {{ currentPost.fields.title }}
      </h1>
      <article v-html="$md.render(currentPost.fields.body)" />
    </div>
    <p v-else class="single-post__loading">
      Loading
    </p>
  </div>
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
