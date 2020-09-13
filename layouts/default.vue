<template>
  <div class="app-container">
    <div class="app-container__inner">
      <AppHeader
        image-src="bg.jpg"
      />
      <AppSidebar />
      <div id="content" class="app-content">
        <div class="app-content__inner">
          <Nuxt />
        </div>
      </div>

      <AppContact />
    </div>
    <AppFooter />
  </div>
</template>

<script>

export default {
  // computed: {
  //   isSidebar () {
  //     return this.$store.getters['nav/showSidebar']
  //   }
  // },

  // watch: {
  //   '$route' () {
  //     if (process.client && this.isSidebar && window.innerWidth > 768) {
  //       this.$store.dispatch('nav/toggleSidebar')
  //     }
  //   }
  // }
}

</script>

<style>

html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.app-container {
  min-height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.app-container__inner {
  flex: 1;
}

</style>
