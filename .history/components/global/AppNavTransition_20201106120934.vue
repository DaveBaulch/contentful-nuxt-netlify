<template>
  <transition-group tag="div">
    <img key="photo1" src="~/assets/layout/dave_250.jpg" class="photo" alt="Dave Baulch">

    <div key="button-name" class="button-name">
      <OpenContactButton text="Contact me!" />
    </div>

    <h2 key="profile-name" class="profile-name">
      <span class="profile-name__name">Dave Baulch</span>
      <span class="profile-name__title">Front-End Developer</span>
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

    .about &,
    .cv &,
    .work &,
    .blog &,
    .blog-slug & {
      width: 90px;
      height: 100px;
      transform: translate3d(0, -36px, 0);
    }

    @include breakpoint(sm) {
      width: 151px;
      height: 168px;
      left: 20px;
      top: 87px;
      transform: translate3d(0, 0, 0);

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
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
      transform: translate3d(0, 0, 0);

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug &{
        width: 179px;
        height: 200px;
        transform: translate3d(0, -37px, 0)
      }
    }
  }

  .button-name {
    position: absolute;
    //left: 143px;
    left: 153px;
    top: 138px;
    transition: all 0.5s ease-in-out;

    .about &,
    .cv &,
    .work &,
    .blog &,
    .blog-slug & {
      display: none;
      transform: translate3d(-30px, -10px, 0);
    }

    @include breakpoint(sm) {
      left: 190px;
      top: 130px;
      display: block;

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
        display: block;
        transform: translate3d(-70px, 4px, 0);
      }
    }

    @include breakpoint(md) {
      left: 300px;
      top: 224px;

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
        transform: translate3d(-70px, 9px, 0);
      }
    }
  }

  .profile-name {
    position: absolute;
    //left: 140px;
    left: 150px;
    top: 180px;
    font-size: 2.6rem;
    transition: all 0.5s ease-in-out;
    color: #0a3246;

    @include breakpoint(sm) {
      left: 150px;
    }

    .profile-name__name {
      font-weight: bold;
      display: block;
      line-height: 1.3;

      @include breakpoint(md) {
        line-height: 1.5;
      }
    }

    .profile-name__title {
      text-transform: uppercase;
      display: block;
      font-size: 1.6rem;
      line-height: 1;

      @include breakpoint(md) {
        font-size: 2.6rem;
      }

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
        display: none;
      }
    }

    .about &,
    .cv &,
    .work &,
    .blog &,
    .blog-slug & {
      //left: 180px;
      left: 190px;
      top: 200px;
      transform: translate3d(-71px, -130px, 0);
      color: $white;
      font-weight: normal;
    }

    @include breakpoint(sm) {
      left: 190px;
      top: 185px;
      transform: translate3d(0, 0, 0);

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
        left: 190px;
        top: 200px;
      }
    }

    @include breakpoint(md) {
      left: 300px;
      top: 280px;
      font-size: 5rem;
      transform: translate3d(0, 0, 0);

      .about &,
      .cv &,
      .work &,
      .blog &,
      .blog-slug & {
        transform: translate3d(-71px, -130px, 0);
        color: $white;
        font-size: 4rem;
        left: 300px;
        top: 280px;
      }
    }
  }

</style>
