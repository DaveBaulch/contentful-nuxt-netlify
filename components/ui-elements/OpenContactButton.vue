<template>
  <button id="contact-button" class="button open-contact-button" @click="toggleContact">
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
  methods: {
    toggleContact () {
      this.$store.dispatch('contact/toggleContact')
      this.$nextTick(() => document.getElementById('close-button').focus())
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
  }
</style>
