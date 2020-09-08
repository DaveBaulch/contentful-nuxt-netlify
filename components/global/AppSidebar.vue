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

      <div class="sidebar-inner">
        <AppLinks />
      </div>
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
    @include breakpoint(md) {
      display: none;
    }
  }

  .sidebar {
    height: 100%;
    width: 80%;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px;
    transform: translateX(-100%);
    transition: all 0.5s ease-out;
    background: rgba(144, 71, 3, 0.5);

    &.active {
      transform: translateX(0);
      background: rgba(144, 71, 3, 0.95);
    }

    .button {
      position: absolute;
      right: 30px;
    }
  }

  .sidebar-background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }

  .sidebar-inner {
    margin-top: 80px;
    background: rgba(200, 108, 21, 0.5);
    padding: 3rem;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    border-radius: 5px;
  }

  .sidebar.active .sidebar-inner {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
  }

</style>
