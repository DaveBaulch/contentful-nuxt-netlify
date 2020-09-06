<template>
  <div class="header-wrapper">
    <header class="header">
      <app-logo alt="Daves homepage" />
      <app-navigation />
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  padding: 0 30px;
  background-color: $white;
}

.header {
  width: auto;
  max-width: $breakpoint-xl;
  margin: 0 auto;
  background-color: $white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
