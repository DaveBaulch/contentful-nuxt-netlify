<template>
  <button
    type="button"
    class="button close-button"
    @click="toggleContact"
  >
    <span class="sr-only">
      Close</span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleContact () {
      this.$store.commit('contact/toggleContact')
    }
  }
}
</script>

<style lang="scss" scoped>
.close-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $grey-dark;
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 200;
  background: transparent url('~assets/layout/icon-mobile-menu-close.svg') no-repeat center center;
}
</style>
