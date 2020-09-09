<template>
  <div class="header-wrapper" :class="currentPage">
    <transition-group name="bg" tag="div" class="bg-img">
      <div v-if="currentPage === 'index'" key="img1" class="header-img header-img--1" />
      <div v-else-if="currentPage === 'about'" key="img2" class="header-img header-img--2" />
      <div v-else-if="currentPage === 'cv'" key="img3" class="header-img header-img--3" />
      <div v-else key="img4" class="header-img header-img--4" />
    </transition-group>

    <div class="gradient-overlay" />

    <div class="header">
      <header class="header__inner container">
        <div class="drawer-toggle" role="button" @click="toggleSidebar">
          <div class="bar" />
          <div class="bar" />
          <div class="bar" />
        </div>

        <div class="app-links">
          <AppLinks />
        </div>

        <AppNavTransition />
      </header>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgImage () {
      return require('assets/layout/' + this.imageSrc)
    },
    currentPage () {
      return this.$route.name
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

.header-wrapper {
  width: 100%;
  height: 200px;

  @include breakpoint(md) {
    height: 300px;
  }
}

.bg-img {
  position: absolute;
  width: 100vw;
  height: 200px;
  overflow: hidden;
  top: 0;
  z-index: -1;

  @include breakpoint(md) {
    height: 300px;
  }
}

.gradient-overlay {
  width: 100%;
  height: 200px;
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(to left, rgba(10, 50, 70, 0.1) 80%, rgba(10, 50, 70, 0.4) 95%);
  display: block;

  .about &,
  .cv &,
  .blog & {
    background: linear-gradient(to left, rgba(10, 50, 70, 0.1) 10%, rgba(10, 50, 70, 0.4) 90%);
    display: block;
  }

  @include breakpoint(md) {
    height: 300px;
  }
}

.header-img {
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow-y: hidden;
}

.header-img--1 {
  background: url('~assets/layout/bg.jpg') center center;
  background-size: cover;
}

.header-img--2 {
  background: url('~assets/layout/bg2.jpg') center center;
  background-size: cover;
}

.header-img--3 {
  background: url('~assets/layout/bg3.jpg') center center;
  background-size: cover;
}

.header-img--4 {
  background: url('~assets/layout/bg4.jpg') center center;
  background-size: cover;
}

.bg-enter-active,
.bg-leave-active {
  transition: all 0.8s ease-in-out;
}

.bg-enter,
.bg-leave-to {
  transform: scale(1) translateZ(0);
  opacity: 0;
}

.header {
  width: 100%;
  background: rgba(10, 50, 70, 0.75);
  position: relative;
}

.header__inner {
  display: flex;
  justify-content: flex-end;
  position: relative;

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
