<template>
  <div class="header-wrapper" :class="currentPage">
    <transition-group name="bg" tag="div" class="bg-img">
      <div v-if="currentPage === 'index'" key="img1" class="header-img header-img--1" />
      <div v-else-if="currentPage === 'cv'" key="img2" class="header-img header-img--2" />
      <div v-else key="img3" class="header-img header-img--3" />
    </transition-group>

    <div class="header">
      <header class="header__inner container">
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
  </div>
</template>

<script>
export default {
  // props: {
  //   imageSrc: {
  //     type: String,
  //     default: null
  //   },
  //   height: {
  //     type: String,
  //     default: '400'
  //   }
  // },
  computed: {
    bgImage () {
      return require('assets/layout/' + this.imageSrc)
    },
    currentPage () {
      return this.$route.name
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
    height: 400px;
  }

  &.about,
  &.cv,
  &.blog {
    @include breakpoint(md) {
      height: 300px;
    }
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
    height: 400px;

    .header-wrapper.about &,
    .header-wrapper.cv &,
    .header-wrapper.blog & {
      @include breakpoint(md) {
        height: 300px;
      }
    }
  }
}

.header-img {
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 400px;
  overflow-y: hidden;

  .header-wrapper.about &,
  .header-wrapper.cv &,
  .header-wrapper.blog & {
    @include breakpoint(md) {
      height: 300px;
    }
  }
}

.header-img--1 {
  background: url('~assets/layout/hero-bg.jpg') center center;
  background-size: cover;
}

.header-img--2 {
  background: url('~assets/layout/bg.jpg') center center;
  background-size: cover;
}

.header-img--3 {
  background: url('~assets/layout/bg.jpg') center center;
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
  background: rgba(10, 50, 70, 0.5);
}

.header__inner {
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
