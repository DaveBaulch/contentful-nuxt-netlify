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
      // clear the state values for the form on closing the modal
      this.$store.commit('contact/formEntered', false)
      this.$store.commit('contact/formSubmitted', false)
      this.$store.commit('contact/formSuccess', false)
      this.$store.commit('contact/formError', false)
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
