<template>
  <article class="section">
    <div class="hero">
      <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="hero__background" :style="`background-image: url(${bgImage})`">
        <div class="container">
          <div class="hero__content">
            <div class="hero__inner">
              <h1 class="hero__heading">
                {{ title }}
              </h1>
              <div class="hero__content-inner">
                <p>{{ content }}</p>
              </div>
              <a :href="link" class="button hero__button">View more</a>
            </div>
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
    },
    link: {
      type: String,
      default: null
    }
  },

  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
    } // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  }),

  computed: {
    bgImage () {
      return require('assets/layout/' + this.imageSrc)
    }
  },

  methods: {
    onWaypoint ({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        // console.log('waypoint going in!')
        el.classList.add('js-fade-up')
      }

      // if (direction === this.$waypointMap.DIRECTION_TOP) {
      //   console.log('waypoint going top!')
      // }
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
  width: 100%;
  background-size: cover;
  z-index: 2;

  @include breakpoint(md) {
    opacity: 0;

    &.js-fade-up {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.5s ease-in-out;
    }
  }
}

.hero__content {
  text-align: center;
  padding: 3rem 0;

  @include breakpoint(md) {
    padding: 3rem 40% 3rem 10%;
  }
}

.hero__inner {
  @include content-background();
  padding: 3rem;
  color: $black;
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
