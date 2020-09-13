<template>
  <div class="footer-wrapper">
    <footer id="footer" class="footer">
      <SocialLinks />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

.footer-wrapper {
  width: 100%;
  color: $white;
  text-align: center;
  flex-shrink: 0;
  // position: fixed;
  position: relative;
  bottom: 0;
  background: rgba(10, 50, 70, 0.9);

  // @include breakpoint(md) {
  //   position: relative;
  // }
}

.footer {
  width: auto;
  max-width: $breakpoint-xl;
  margin: 0 auto;
}
</style>
