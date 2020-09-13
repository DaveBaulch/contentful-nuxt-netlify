<template>
  <button id="open-contact-button" ref="contactButton" class="button open-contact-button" @click="toggleContact">
    <slot>
      <span v-if="text">{{ text }}</span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    }
  },
  created () {
    this.$nuxt.$on('focus-open-contact-button', () => {
      this.$refs.contactButton.focus()
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('focus-open-contact-button')
  },
  methods: {
    toggleContact () {
      this.$store.dispatch('contact/toggleContact', 'open-contact-button')
    }
  }
}
</script>

<style lang="scss" scoped>
  .open-contact-button {
    color: $white;
    border-color: $white;
    background: linear-gradient(to left, rgba(217, 74, 25, 0.9) 60%, rgba(217, 74, 25, 0.5) 90%);
    display: block;
    overflow: visible;

    &:active,
    &:focus {
      outline: 0;
      border: $focus-outline;
    }
  }
</style>
