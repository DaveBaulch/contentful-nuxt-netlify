<template>
  <nuxt-link to="/" class="site-logo-link">
    <img :src="logo" class="site-logo" :alt="alt">
  </nuxt-link>
</template>

<script>
import logo from 'assets/assets/layout/logo.png'

export default {
  props: {
    src: {
      type: String,
      default: logo
    },
    alt: {
      type: String,
      default: 'Homepage'
    }
  },

  data () {
    return {
      logo: this.src || logo
    }
  }
}
</script>
