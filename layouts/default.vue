<template>
  <div class="app-container">
    <AppHeader />
    <AppSidebar />
    <div class="app-content-wrapper">
      <div class="app-content">
        <Nuxt />
      </div>
      <AppContact />
      <AppFooter />
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    isSidebar () {
      return this.$store.getters['nav/showSidebar']
    }
  },

  watch: {
    '$route' () {
      if (process.client && this.isSidebar && window.innerWidth < 768) {
        this.$store.dispatch('nav/toggleSidebar')
      }
    }
  }
}

</script>

<style>
html {
  /* font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif; */
  /* font-size: 16px; */
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
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

.app-content-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;;
}

.app-content {
  width: 100%;
  flex: 1;
}
</style>
