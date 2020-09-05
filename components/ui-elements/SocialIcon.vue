<template>
  <button class="button">
    <slot>
      <span v-if="text" class="sr-only">{{ text }}</span>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
