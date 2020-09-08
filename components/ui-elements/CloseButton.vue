<template>
  <button
    id="close-button"
    ref="closebutton"
    type="button"
    class="button close-button"
    @click="toggleContact"
  >
    Close
    </span>
  </button>
</template>

<script>
export default {
  methods: {
    toggleContact () {
      this.$store.dispatch('contact/toggleContact')
      // clear the state values for the form on closing the modal
      this.$store.dispatch('contact/formEntered', false)
      this.$store.dispatch('contact/formSubmitted', false)
      this.$store.dispatch('contact/formSuccess', false)
      this.$store.dispatch('contact/formError', false)
      this.$nextTick(() => document.getElementById('contact-button').focus())
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
  z-index: 2000;
  background: transparent url('~assets/layout/icon-mobile-menu-close.svg') no-repeat center center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &:focus {
    border: 2px solid #f0f;
  }

  .contact-wrapper.visible & {
    opacity: 1;
  }

}
</style>
