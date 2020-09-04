<template>
  <main>
    <div class="container">
      <h1 class="title">
        Contentful blogs
      </h1>
      <section v-for="(post, index) in posts" :key="index">
        <h2 class="title">
          <nuxt-link :to="post.fields.slug">
            {{ post.fields.title }}
          </nuxt-link>
        </h2>
        <p class="author">
          By {{ post.fields.author.fields.name }}
        </p>
        <p class="description">
          {{ post.fields.description }}<br>
          <nuxt-link :to="post.fields.slug" class="more">
            Read more ⟶
          </nuxt-link>
        </p>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  head: {
    title: 'Dave Contenful, Latest Posts'
  }
}
</script>
