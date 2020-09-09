<template>
  <button
    type="button"
    class="button close-sidebar-button"
    @click="toggleSidebar"
  >
    <span class="sr-only">
      Close
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleSidebar () {
      this.$store.dispatch('nav/toggleSidebar')
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
}

</style>
