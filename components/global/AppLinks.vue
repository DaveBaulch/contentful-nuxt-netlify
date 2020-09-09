<template>
  <div class="nav-wrapper">
    <ul
      class="nav"
    >
      <li class="nav__item">
        <nuxt-link to="/" class="nav__link">
          Home
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/about" class="nav__link">
          About
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/cv" class="nav__link">
          CV
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/blog" class="nav__link">
          Blog
        </nuxt-link>
      </li>
    </ul>

    <OpenContactButton text="Get in touch" />
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
  margin: 4rem 1rem;
  list-style: none;

  @include breakpoint(md) {
    margin: 2rem 1rem;
  }
}

a.nav__link {
  color: $white;
  text-decoration: none;

  &:active,
  &:visited {
    color: $white;
    text-decoration: none;
  }

  &:focus {
    color: $white;
    text-decoration: underline;
  }

  // @include breakpoint(md) {
  //   color: $white;

  //   &:hover {
  //     color: $white;
  //     text-decoration: underline;
  //   }
  // }

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
