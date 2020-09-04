<template>
  <main>
    <div class="container">
      <h1 class="title">
        Contentful blogs
      </h1>
      <section v-for="(post, index) in posts" :key="index">
        <ArticlePreview :post="post" />
      </section>
    </div>
  </main>
</template>

<script>
import ArticlePreview from '~/components/elements/ArticlePreview.vue'

export default {
  components: {
    ArticlePreview
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
