<template>
  <header class="header">
    <AppLogo alt="Daves homepage" />

    <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </div>

    <div class="app-links">
      <AppLinks />
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template: 60px / auto 1fr;
  align-items: center;
  background-color: #333;
}

.app-links{
  justify-self: end;
}

.drawer-toggle .bar {
  width: 90%;
  height: 2px;
  background-color: white;
}

.drawer-toggle {
  display: flex;
  justify-self: end;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  padding-right: 16px;
  cursor: pointer;
}

@media (max-width: 767px) {
  header{
    padding: 0 16px;
  }
  header:nth-child{
    justify-self: end !important;
  }
  .app-links {
    display: none;
  }
}

@media (min-width: 768px) {
  header{
    padding: 0 64px;
  }
  .app-links {
    display: block;
  }
  .drawer-toggle {
    display: none;
  }
}
</style>
