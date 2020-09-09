<template>
  <ul class="social-links">
    <li class="social-links__item">
      <SocialIcon text="facebook" url="http://www.facebook.com" class="social-links__link social-icon social-icon__facebook" />
    </li>
    <li class="social-links__item">
      <SocialIcon text="linkedin" url="http://www.linkedin.com" class="social-links__link social-icon social-icon__linkedin" />
    </li>
    <li class="social-links__item">
      <SocialIcon text="twitter" url="http://www.twitter.com" class="social-links__link social-icon social-icon__twitter" />
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

  .social-links {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social-links__link {
    width: 44px;
    height: 44px;
    margin: 1rem 2rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: $white;
    text-decoration: none;

    @include breakpoint(sm) {
      width: auto;
      padding: 0 1rem;
    }

    &:hover,
    &:focus {
      color: $white;
      text-decoration: underline;
    }
  }
</style>
