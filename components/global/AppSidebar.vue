<template>
  <div class="sidebar-wrapper">
    <div v-if="showSidebar" class="sidebar-background" @click="toggleSidebar" />

    <div
      id="sidebar"
      ref="sidebar"
      class="sidebar"
      :class="{active: showSidebar}"
      aria-label="Primary Navigation"
      aria-expanded="false"
      aria-hidden="true"
    >
      <CloseSidebarButton class="js-sidebar-focussable" />

      <div class="sidebar-inner">
        <AppMobileLinks />
        <OpenContactButton2 text="Contact me!" class="js-sidebar-focussable" tabindex="-1" />
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
  watch: {
    showSidebar (val) {
      const sidebarElement = this.$refs.sidebar
      if (sidebarElement.getAttribute('aria-expanded') === 'false') {
        sidebarElement.setAttribute('aria-expanded', 'true')
        sidebarElement.setAttribute('aria-hidden', 'false')
      } else {
        sidebarElement.setAttribute('aria-expanded', 'false')
        sidebarElement.setAttribute('aria-hidden', 'true')
      }
    }
  },
  methods: {
    toggleSidebar () {
      this.sidebarActive = !this.sidebarActive
      this.$store.dispatch('nav/toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

  .sidebar-wrapper {
    overflow-y: auto;

    @include breakpoint(md) {
      display: none;
    }
  }

  .sidebar {
    height: 100%;
    width: 100%;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    transform: translateX(-100%);
    transition: all 0.5s ease-out;
    background: rgba(10, 50, 70, 0.5);

    @include breakpoint(sm) {
      width: 90%;
      padding: 25px;
    }

    &.active {
      transform: translateX(0);
      background: rgba(10, 50, 70, 1);
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
    margin-top: 60px;
    border: 1px solid $white;
    padding: 3rem 3rem 6rem 3rem;
    opacity: 0;
    transition: all 0.2s ease-in-out;
    border-radius: 1px;

    button {
      margin: 0 auto;
      display: block;
      background-color: rgba(217, 74, 25, 0.9);
    }
  }

  .sidebar.active .sidebar-inner {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
  }

</style>
