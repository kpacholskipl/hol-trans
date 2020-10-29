<template>
  <div class="homepage" id="homepage" ref="homepage">
    <div class="homepage-text">
      <p class="homepage-text__title">Pomoc drogowa</p>
      <a class="homepage-text__number" href="tel:609049726">609 049 726</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .homepage {
    text-align: center;
    width: 100vw;
    height: 100vh;
    background: url("../assets/images/tlo3.jpg") no-repeat;
    background-size: cover;
    @media only screen and (max-width: 800px) {
      background: url("../assets/images/mobile.jpg");
      background-size: cover;
    }
    &-text {
      padding-top: 10vh;

      &__title {
        font-size: 5rem;
        font-weight: bold;
        font-style: italic;
      }

      &__number {
        font-size: 3.5rem;
        font-weight: bold;
        color: yellow !important;
      }
    }
  }
</style>
