<template>
  <button id="contact-button" class="button" @click="toggleContact">
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
      this.$store.commit('contact/toggleContact')
      this.$nextTick(() => document.getElementById('close-button').focus())
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
