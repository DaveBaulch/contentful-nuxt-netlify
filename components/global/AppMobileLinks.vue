<template>
  <div class="nav-wrapper">
    <ul
      class="nav"
    >
      <li class="nav__item">
        <nuxt-link to="/" class="nav__link js-sidebar-focussable" tabindex="-1">
          Home
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/about" class="nav__link js-sidebar-focussable" tabindex="-1">
          About
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/work" class="nav__link js-sidebar-focussable" tabindex="-1">
          Work
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/cv" class="nav__link js-sidebar-focussable" tabindex="-1">
          CV
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.nav-wrapper {
  width: 100%;
  height: 100%;
  text-align: center;

  @include breakpoint(md) {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    position: relative;
    opacity: 1;
    background-color: transparent;
    font-size: 1.6rem;
    padding-top: 0;
  }
}

.nav {
  @include breakpoint(md) {
    display: flex;
    flex-direction: row;
  }
}

.nav__item {
  margin: 3rem 1rem;
  list-style: none;

  @include breakpoint(md) {
    margin: 0.5rem;
    display: inline-block;
  }
}

.nav-item__contact {
  display: none;

  @include breakpoint(md) {
    display: block;
  }
}

.nav-item__contact-button {
  background-color: transparent;
  border: 1px solid transparent;
  color: $white;
  padding: 1rem;
  line-height: normal;
  display: inline-block;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &:active,
  &:focus {
    outline: 0;
    border: $focus-outline;
  }
}

a.nav__link {
  color: $white;
  text-decoration: none;
  padding: 1rem;
  line-height: normal;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:active,
  &:visited {
    color: $white;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    color: $white;
    text-decoration: underline;
  }
}

.nuxt-link-exact-active {
  border: 1px solid $white;
}

.nav__button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $grey-dark;
  position: absolute;
  right: 0;
  top: 10px;
  z-index: 200;
  background: transparent url('~assets/layout/icon-mobile-menu-open.svg') no-repeat center center;

  @include breakpoint(md) {
    display: none;
  }
}
</style>
