<template>
  <main>
    <div class="container">
      <h2 class="page-title">
        {{ workPage.work.title }}
      </h2>
      <div v-html="$md.render(workPage.work.body)" />
      <section v-for="(item, index) in workPage.work.workItems" :key="index">
        <WorkItem :item="item" />
      </section>
    </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    workPage () {
      return this.$store.state.work
    }
  },
  head: {
    title: 'Work',
    meta: []
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';
</style>
