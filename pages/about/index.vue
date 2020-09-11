<template>
  <main>
    <div class="container">
      <h2 class="page-title">
        {{ aboutPageTitle }}
      </h2>
      <div v-html="aboutPageBody" />
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    aboutPageTitle () {
      return this.$store.state.about.title
    },
    aboutPageBody () {
      return this.$store.state.about.body
    }
  },
  head: {
    title: 'About',
    meta: []
  }
}
</script>

<style lang="scss" scoped>
</style>
