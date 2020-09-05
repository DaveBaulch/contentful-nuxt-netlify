<template>
  <main>
    <app-hero
      image-src="hero-bg.jpg"
      title="Blog page title"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      link="http://www.bbc.co.uk"
    />
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
