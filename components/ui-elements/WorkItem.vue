<template>
  <article v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="work-item">
    <h2 class="work-item__year">
      {{ item.fields.year }}
    </h2>
    <div class="work-item__inner">
      <div class="work-item__left-col">
        <div class="work-item__img-wrapper">
          <img
            :src="item.fields.image.fields.file.url"
            :alt="item.fields.image.fields.title"
            class="work-item__img"
            loading="lazy"
          >
        </div>
      </div>
      <div class="work-item__right-col">
        <h3 class="work-item__title">
          {{ item.fields.title }}
        </h3>
        <!-- <p class="work-item__description">
          {{ item.fields.body }}
        </p> -->
        <p v-if="item.fields.liveUrl" class="work-item__link">
          <a :href="`${item.fields.liveUrl}`">{{ item.fields.liveUrl }}</a>
        </p>
        <p v-if="item.fields.archiveUrl">
          <a :href="`${item.fields.archiveUrl}`" class="work-item__archive-link">View on webarchive.org</a>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
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
  methods: {
    onWaypoint ({ el, going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        el.classList.add('js-fade-up')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.work-item {
  margin: 0;
    opacity: 0;
    transform: translateY(20px);

  &.js-fade-up {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
}

.work-item__inner {
  width: 100%;
  margin: 3rem 0 2rem 0;
  border: 1px solid $grey;
  border-radius: 5px;
  //padding: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @include breakpoint(md) {
    right: 25px;
    flex-direction: row;
  }
}

.work-item__left-col {
  position:  relative;

  @include breakpoint(md) {
    margin-right: 30px;
  }
}

.work-item__img-wrapper {
  // padding: 1rem;
  max-height: 300px;
  overflow: hidden;
  text-align: center;

  @include breakpoint(md) {
    padding: 1rem;
    // border: 1px solid $grey;
  }
}

.work-item__right-col {
  position:  relative;
  flex: 1;
  justify-content: flex-end;
}

.work-item__year {
  margin: 0;
  padding: 0;
  font-size: 6rem;
  font-weight: bold;
  color: $grey-dark;
  opacity: 0.7;
  line-height: 1;
  text-align: right;
  position: relative;
  top: 20px;

  @include breakpoint(sm) {
    font-size: 6rem;
    text-align: right;
  }
}

.work-item__title {
  font-weight: bold;
  line-height: 1.2;

  @include breakpoint(sm) {
    font-size: 2.8rem;
  }
}

.work-item__archive-link {
  color: $white;
  border: 1px solid $white;
  background-color: rgba(217, 74, 25, 0.9);
  display: inline-block;
  padding: 1rem;
  text-decoration: none;

  &:active,
  &:hover {
    text-decoration: underline;
  }
}

.work-item__link {
  margin-top: 1rem;
  a {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
}

</style>
