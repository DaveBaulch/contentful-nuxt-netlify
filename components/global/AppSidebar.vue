<template>
  <div class="sidebar-wrapper">
    <div v-if="showSidebar" class="sidebar-background" @click="toggleSidebar" />

    <transition name="slide-side">
      <div v-if="showSidebar" class="sidebar">
        <button
          type="button"
          class="button"
          @click="toggleSidebar"
        >
          Close
        </button>

        <AppLinks />
      </div>
    </transition>
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
    height: 100%;
    width: 100%;

    @include breakpoint(lg) {
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

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.5s ease-out;
  }

  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }
</style>
