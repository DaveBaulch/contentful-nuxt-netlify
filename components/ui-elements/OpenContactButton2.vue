<template>
  <button
    id="open-contact-button2"
    ref="contactButton2"
    class="button open-contact-button"
    aria-controls="contact"
    aria-expanded="false"
    @click="toggleContact"
  >
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
  computed: {
    showContact () {
      return this.$store.getters['contact/showContact']
    }
  },
  watch: {
    showContact (val) {
      const contactButton2 = this.$refs.contactButton2
      if (contactButton2.getAttribute('aria-expanded') === 'false') {
        contactButton2.setAttribute('aria-expanded', 'true')
      } else {
        contactButton2.setAttribute('aria-expanded', 'false')
      }
    }
  },
  created () {
    this.$nuxt.$on('focus-open-contact-button2', () => {
      this.$refs.contactButton2.focus()
    })
  },
  beforeDestroy () {
    this.$nuxt.$off('focus-open-contact-button2')
  },
  methods: {
    toggleContact () {
      this.$store.dispatch('contact/toggleContact', 'open-contact-button2')
      this.$nextTick(() => this.$nuxt.$emit('focus-close-contact-button'))
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
