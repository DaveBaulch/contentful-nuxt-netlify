<template>
  <main>
    <section v-for="(post, index) in posts" :key="index">
      <article-preview :post="post" />
    </section>
  </main>
</template>

<script>
// don't need to import componenets in Nuxt
// import ArticlePreview from '~/components/ui-elements/ArticlePreview.vue'

export default {
  // components: {
  //   ArticlePreview
  // },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  }
}
</script>
