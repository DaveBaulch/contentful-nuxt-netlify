<template>
  <article class="section">
    <div class="hero">
      <div class="hero__background" :style="`background-image: url(${bgImage})`">
        <div class="hero__content">
          <div class="hero__inner">
            <h1 class="hero__heading">
              {{ title }}
            </h1>
            <div class="hero__content-inner">
              <p>{{ content }}</p>
            </div>
            <a href="" class="button hero__button">View more</a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: null
    }
  },
  computed: {
    bgImage () {
      return require('assets/layout/' + this.imageSrc)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.hero {
  position: relative;
  background-color: $light-grey;
}

.hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  // height: 100%;
  background-size: cover;
  z-index: 2;
}

.hero__content {
  text-align: center;
  padding: 4rem 10% 4rem 10%;

  @include breakpoint(lg) {
    padding: 4rem 40% 4rem 10%;
  }
}

.hero__inner {
  @include content-background();
  padding: 4rem;
  color: $black;
  margin-bottom: 3rem;
  text-align: left;
}

.hero__button {
  width: 100%;

  @include breakpoint(md) {
    min-width: 300px;
    width: auto;
  }
}

</style>
