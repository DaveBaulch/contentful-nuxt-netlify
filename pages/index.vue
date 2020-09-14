<template>
  <main>
    <div class="container">
      <h1>{{ homePageTitle }}</h1>
      <div v-html="homePageBody" />
    </div>
  </main>
</template>

<script>

export default {
  computed: {
    homePageTitle () {
      return this.$store.state.home.title
    },
    homePageBody () {
      return this.$store.state.home.body
    }
  },
  head: {
    title: 'Homepage',
    meta: []
  }
  // mounted () {
  //   this.$store.dispatch('home/getHomeContent')
  // }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

  main {
    padding-top: 50px;

    @include breakpoint(sm) {
      padding-top: 60px;
    }

    @include breakpoint(md) {
      padding-top: 100px;
    }
  }

</style>
