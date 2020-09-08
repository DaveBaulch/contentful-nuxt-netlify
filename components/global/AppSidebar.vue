<template>
  <div class="sidebar-wrapper">
    <div v-if="showSidebar" class="sidebar-background" @click="toggleSidebar" />

    <div class="sidebar" :class="{active: showSidebar}">
      <button
        type="button"
        class="button"
        @click="toggleSidebar"
      >
        Close
      </button>

      <AppLinks />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showSidebar () {
      return this.$store.getters['nav/showSidebar']
    }
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('nav/toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

  .sidebar-wrapper {
    width: 100%;
    height: 100%;

    @include breakpoint(md) {
      display: none;
    }
  }

  .sidebar {
    height: 100%;
    width: 80%;
    background-color: #d6d6d6;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px;
    transform: translateX(-100%);
    transition: all 0.5s ease-out;

    &.active {
      transform: translateX(0);
    }
  }

  .sidebar-background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>
