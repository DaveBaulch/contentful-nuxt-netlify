<template>
  <article v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="cv-item">
    <div class="cv-item__inner">
      <h2 class="cv-item__position">
        {{ item.fields.position }}
      </h2>
      <div class="cv-item__company">
        {{ item.fields.company }}
      </div>
      <div class="cv-item__date">
        {{ item.fields.date }}
      </div>
      <div class="cv-item__body">
        <div v-html="cvItemBody" />
      </div>
    </div>
  </article>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

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
  computed: {
    cvItemBody () {
      return documentToHtmlString(this.item.fields.body)
    }
  },
  methods: {
    onWaypoint ({ el, going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        el.classList.add('js-fade-up')
      }
    }
  }
}
</script>

<style lang="scss">
@import '~assets/sass/utilities/_mixins.scss';

.cv-item {
  margin: 0;
    opacity: 0;
    transform: translateY(20px);

  &.js-fade-up {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.5s ease-in-out;
  }
}

.cv-item__inner {
  width: 100%;
  margin: 3rem 0 2rem 0;
  border: 1px solid $grey;
  border-radius: 5px;
  padding: 1rem;
  flex-direction: column;

  @include breakpoint(sm) {
    padding: 2rem;
  }
}

.cv-item__position {
  font-weight: bold;
  line-height: 1.2;

  @include breakpoint(sm) {
    font-size: 2.8rem;
  }
}

.cv-item__company {
  font-weight: bold;
  color: #d94a19;
  font-size: 2rem;
}

.cv-item__date {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.cv-item__body {
  ul {
    margin-left: 0;
  }

  li {
    list-style: none;
    padding-left: 13px;
    position: relative;

    &:before {
      content: '-';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
    }

    p {
      margin: 0;
      display: inline-block;
    }
  }
}

</style>
