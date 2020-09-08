<template>
  <div>
    <div class="nav-wrapper">
      <ul
        class="nav"
      >
        <li class="nav__item">
          <nuxt-link to="/about" class="nav__link" @click.native="toggleMenu">
            About
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/cv" class="nav__link" @click.native="toggleMenu">
            CV
          </nuxt-link>
        </li>
        <li class="nav__item">
          <nuxt-link to="/blog" class="nav__link" @click.native="toggleMenu">
            Blog
          </nuxt-link>
        </li>
      </ul>

      <contact-button text="Contact Us" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuActive: false
    }
  },
  computed: {
    buttonText () {
      return !this.menuActive ? 'Open' : 'Close'
    },
    buttonClass () {
      return !this.menuActive ? '' : 'is-active'
    }
  },
  methods: {
    toggleMenu (event) {
      this.menuActive = !this.menuActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.nav-wrapper {
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 50px;
  font-size: 3rem;

  @include breakpoint(lg) {
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
  @include breakpoint(lg) {
    display: flex;
    flex-direction : row;
  }
}

.nav__item {
  margin: 4rem 1rem;
  list-style: none;

  @include breakpoint(lg) {
    margin: 2rem 1rem;
  }
}

a.nav__link {
  color: grey-dark;
  text-decoration: none;

  &:active,
  &:visited {
    color: grey-dark;
    text-decoration: none;
  }

  &:focus {
    color: grey-dark;
    text-decoration: underline;
  }

  @include breakpoint(lg) {
    color: $white;

    &:hover {
      color: $white;
      text-decoration: underline;
    }
  }

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

  &.is-active {
    background: transparent url('~assets/layout/icon-mobile-menu-close.svg') no-repeat center center;
  }

  @include breakpoint(lg) {
    display: none;
  }
}
</style>
