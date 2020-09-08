<template>
  <div class="header-wrapper">
    <header class="header container">
      <!-- <AppLogo alt="Homepage" /> -->

      <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
        <div class="bar" />
        <div class="bar" />
        <div class="bar" />
      </div>

      <div class="app-links">
        <AppLinks />
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.header-wrapper {
  width: 100%;
  height: auto;
  background-color: #333;
}

.header {
  display: flex;
  justify-content: flex-end;

  @include breakpoint(md) {
    max-width: $breakpoint-xl;
    margin: 0 auto;
  }
}

.drawer-toggle {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 44px;
  width: 44px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid $white;

  @include breakpoint(md) {
    display: none;
  }
}

.drawer-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: white;
}

.app-links {
  display: none;

  @include breakpoint(md) {
    display: block;
  }
}
</style>
