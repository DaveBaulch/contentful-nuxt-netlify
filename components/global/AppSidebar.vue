<template>
  <div class="sidebar-wrapper">
    <div v-if="showSidebar" class="sidebar-background" @click="toggleSidebar" />

    <div class="sidebar" :class="{active: showSidebar}">
      <CloseSidebarButton />

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
    width: 90%;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px;
    transform: translateX(-100%);
    transition: all 0.5s ease-out;
    background: rgba(10, 50, 70, 0.5);

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
  }

  .sidebar.active .sidebar-inner {
    opacity: 1;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
  }

</style>
