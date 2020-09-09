<template>
  <transition-group tag="div">
    <img key="photo1" src="~/assets/layout/dave_250.jpg" class="photo" alt="Dave Baulch">

    <div key="button-name" class="button-name">
      <OpenContactButton text="Contact me!" />
    </div>

    <h2 key="profile-name" class="profile-name">
      <span>Dave Baulch</span>
    </h2>
  </transition-group>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/utilities/_mixins.scss';

  .photo {
    width: 120px;
    height: 134px;
    position: absolute;
    left: 20px;
    top: 115px;
    transition: all 0.5s ease-in-out;
    border: 2px solid $white;
    border-radius: 5px;

    .about & {
      width: 90px;
      height: 100px;
      transform: translate3d(0, -36px, 0);
    }

    @include breakpoint(sm) {
      width: 151px;
      height: 168px;
      left: 20px;
      top: 87px;

      .about & {
        width: 90px;
        height: 100px;
        transform: translate3d(0, -4px, 0);
      }
    }

    @include breakpoint(md) {
      width: 252px;
      height: 281px;
      left: 30px;
      top: 120px;

      .about & {
        width: 179px;
        height: 200px;
        transform: translate3d(0, 3px, 0)
      }
    }
  }

  .button-name {
    position: absolute;
    left: 153px;
    top: 138px;
    transition: all 0.5s ease-in-out;

    .about & {
      transform: translate3d(-30px, -10px, 0);
    }

    @include breakpoint(sm) {
      left: 190px;
      top: 130px;

      .about & {
        transform: translate3d(-70px, 4px, 0);
      }
    }

    @include breakpoint(md) {
      left: 300px;
      top: 224px;

      .about & {
        transform: translate3d(-70px, 9px, 0);
      }
    }
  }

  .profile-name {
    position: absolute;
    left: 150px;
    top: 180px;
    transition: all 0.5s ease-in-out;
    font-size: 2.6rem;
    color: #0a3246;

    .about & {
      left: 190px;
      top: 200px;
      transform: translate3d(-71px, -130px, 0);
      color: $white;
    }

    @include breakpoint(sm) {
      left: 190px;
      top: 185px;

      .about & {
        left: 190px;
        top: 200px;
      }
    }

    @include breakpoint(md) {
      left: 300px;
      top: 280px;
      font-size: 5rem;

      .about & {
        transform: translate3d(-71px, -130px, 0);
        color: $white;
        font-size: 4rem;
        left: 300px;
        top: 280px;
      }
    }
  }

</style>
