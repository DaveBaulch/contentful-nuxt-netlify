<template>
  <button
    ref="closeSidebarButton"
    type="button"
    class="button close-sidebar-button"
    aria-label="Primary Navigation"
    aria-controls="sidebar"
    aria-expanded="false"
    @click="toggleSidebar"
  >
    <span class="sr-only">
      Close
    </span>
  </button>
</template>

<script>
export default {
  computed: {
    showSidebar () {
      return this.$store.getters['nav/showSidebar']
    }
  },
  watch: {
    showSidebar (val) {
      const closeNavButton = this.$refs.closeSidebarButton
      if (closeNavButton.getAttribute('aria-expanded') === 'false') {
        closeNavButton.setAttribute('aria-expanded', 'true')
      } else {
        closeNavButton.setAttribute('aria-expanded', 'false')
      }
    }
  },
  created () {
    this.$nuxt.$on('focus-close-nav-button', () => {
      this.$refs.closeSidebarButton.focus()
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('focus-close-nav-button')
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('nav/toggleSidebar')
      this.$nextTick(() => this.$nuxt.$emit('focus-open-nav-button'))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.close-sidebar-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 2000;
  background: transparent url('~assets/layout/icon-mobile-menu-close-white.svg') no-repeat center center;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  border: 1px solid $white;

  @include breakpoint(sm) {
    right: 25px;
  }

  .sidebar.active & {
    opacity: 1;
  }

  &:active,
  &:focus {
    outline: 0;
    border: $focus-outline;
  }
}

</style>
