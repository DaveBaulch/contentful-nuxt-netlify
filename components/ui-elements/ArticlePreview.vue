<template>
  <article>
    <h2 class="title">
      <nuxt-link :to="`/blog/${post.fields.slug}`">
        {{ post.fields.title }}
      </nuxt-link>
    </h2>
    <p class="author">
      By {{ post.fields.author.fields.name }}
    </p>
    <p class="description">
      {{ post.fields.description }}<br>
      <nuxt-link :to="`/blog/${post.fields.slug}`" class="more">
        Read more ⟶
      </nuxt-link>
    </p>
  </article>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  }
}
</script>
