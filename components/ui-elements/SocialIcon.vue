<template>
  <a :href="url" :class="platform"><span class="social-icon__text">{{ text }}</span></a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    platform: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.social-icon {
  &:before {
    width: 21px;
    height: 21px;
    content: '';
  }

  @include breakpoint(sm) {
    &:before {
      margin-right: 10px;
    }
  }
}

.social-icon__facebook {
  &:before {
    background-image: url('~assets/layout/icon-facebook.svg');
  }
}

.social-icon__linkedin {
  &:before {
    background-image: url('~assets/layout/icon-linkedin.svg');
  }
}

.social-icon__twitter {
  &:before {
    width: 20px;
    height: 16px;
    background-image: url('~assets/layout/icon-twitter.svg');
  }
}

.social-icon__text {
  @include between-breakpoints($xs-min, $xs-max) {
    @include sr-only;
  }
}
</style>
