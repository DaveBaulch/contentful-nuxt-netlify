<template>
  <main>
    <div class="container">
      <h2 class="page-title">
        {{ cvPageTitle }}
      </h2>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
