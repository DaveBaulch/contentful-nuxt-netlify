<template>
  <div class="footer-wrapper">
    <footer class="footer">
      &copy; Dave Baulch 2020
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 100%;
  padding: 30px;
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
