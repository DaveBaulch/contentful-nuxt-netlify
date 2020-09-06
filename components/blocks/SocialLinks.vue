<template>
  <ul class="social-links">
    <li class="social-links__item">
      <social-icon text="facebook" url="http://www.facebook.com" class="social-links__link social-icon social-icon__facebook" />
    </li>
    <li class="social-links__item">
      <social-icon text="linkedin" url="http://www.linkedin.com" class="social-links__link social-icon social-icon__linkedin" />
    </li>
    <li class="social-links__item">
      <social-icon text="twitter" url="http://www.twitter.com" class="social-links__link social-icon social-icon__twitter" />
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .social-links {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .social-links__link {
    margin: 2rem;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: $white;
    text-decoration: none;

    &:hover,
    &:focus {
      color: $white;
      text-decoration: underline;
    }
  }
</style>
