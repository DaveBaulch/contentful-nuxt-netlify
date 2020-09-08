<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <SocialLinks />
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  background-color: $black;
  color: $white;
  text-align: center;
  flex-shrink: 0;
}

.footer {
  width: auto;
  max-width: $breakpoint-xl;
  margin: 0 auto;
}
</style>
