<template>
  <main>
    <div class="container">
      <h1 class="page-title">
        {{ cvPageTitle }}
      </h1>
      <div v-html="cvPageBody" />
      <section v-for="(item, index) in cvPageItems" :key="index">
        <CvItem :item="item" />
      </section>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    cvPageTitle () {
      return this.$store.state.cv.title
    },
    cvPageBody () {
      return this.$store.state.cv.body
    },
    cvPageItems () {
      return this.$store.state.cv.items
    }
  },
  head: {
    title: 'CV',
    meta: []
  }
}
</script>

<style lang="scss" scoped>
</style>
