<template>
  <nav>
    <v-toolbar
      :color="isTransparent ? 'transparent' : '#white'"
      class="menu-container hidden-sm-and-down"
      v-scroll="onScroll">
      <v-toolbar-title>
        <img @click="go('#homepage')" class="menu-logo" src="@/assets/images/logo.png"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="menu">
        <a @click="go('#homepage')" aria-label="Strona główna" class="menu-button mr-2">Strona
          główna</a>
        <a @click="go('#offer')" aria-label="Oferta" class="menu-button mr-2">Oferta</a>
        <a @click="go('#about')" aria-label="O firmie" class="menu-button mr-2">O firmie</a>
        <a @click="go('#contact')" aria-label="Kontakt" class="menu-button">Kontakt</a>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <social-media :dark="isTransparent"/>
    </v-toolbar>
    <div class="hidden-md-and-up menu-mobile">
      <div class="menu-mobile--container">
        <a href="tel:609049726" class="ml-5 ">
          <v-icon large color="success" href="tel:609049726"> mdi-cellphone</v-icon>
        </a>
        <picture>
          <img alt="Logo hol-trans" class="menu-mobile--logo mr-5" id="mlink0" src="@/assets/images/logo.png">
        </picture>
        <button @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </button>
      </div>
      <div class="block">
        <ul class="menu-mobile--list" v-show="drawer">
          <a @click="goMobile('#homepage')" aria-label="Strona główna"
             class="menu-mobile--list__button">Strona
            główna</a>
          <a @click="goMobile('#offer')" aria-label="Oferta"
             class="menu-mobile--list__button">Oferta</a>
          <a @click="goMobile('#about',mobileOptionsSecond)" aria-label="O firmie"
             class="menu-mobile--list__button">O firmie</a>
          <a @click="goMobile('#contact',mobileOptionsSecond)" aria-label="Kontakt"
             class="menu-mobile--list__button">Kontakt</a>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    components: {
      SocialMedia: () => import('@/components/SocialMedia')
    },
    data: () => ({
      isTransparent: true,
      offset: 70,
      duration: 1000,
      drawer: false,
      easing: 'easeInOutCubic',
    }),
    methods: {
      go(v, options = this.options) {
        this.$vuetify.goTo(v, options)
      },
      goMobile(v, options = this.mobileOptions) {
        this.drawer = !this.drawer
        this.$vuetify.goTo(v, options)
      },
      onScroll() {
        this.isTransparent = window.pageYOffset < 50
      },
      push() {
        window.open('https://www.facebook.com/pomocdrogowaopoczno', "_blank")
      },
    },
    computed: {
      options() {
        return {
          duration: this.duration,
          offset: this.offset,
          easing: this.easing
        }
      },
      mobileOptions() {
        return {
          duration: 1000,
          offset: 25,
          easing: 'easeInOutCubic'
        }
      },
      mobileOptionsSecond() {
        return {
          duration: 1000,
          offset: 100,
          easing: 'easeInOutCubic'
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
  @import "src/styles/variables.scss";

  .menu {
    display: flex;
    justify-content: space-around;
    width: 60vw;

    &-container {
      position: fixed;
      width: 100vw;
      height: 8vh;
      z-index: 10;
    }

    &-button {
      font-size: 2rem;
      height: 8vh;
      margin-top: 1vh;
      -webkit-transition: .4s;
      transition: .4s;
      cursor: pointer;
    }

    &-button:hover {
      color: $secondary !important;
      margin-top: 2vh;
    }

    &-logo {
      margin-top: 1vh;
      height: 10vh;
      width: auto;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      -webkit-transform: scale(0.7);
      transform: scale(0.7);
    }

    &-logo:hover {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      cursor: pointer;
    }
  }

  .menu-mobile {
    width: 100%;
    height: auto;
    position: fixed;
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.5);
    z-index: 3;
    background-color: #ffffff;

    &--container {
      width: 95%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &--logo {
      margin-top: 1vh;
      height: 7vh;
    }

    &--list {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding: 10px 0 20px 0;

      &__button {
        font-size: 30px;
        -webkit-transition: .2s;
        transition: .2s;
      }

      &__button::after {
        content: "";
        display: block;
        position: relative;
        top: -7px;
        width: 0%;
        height: 3px;
        background-color: $secondary;
        transition: .2s;
      }

      &__button:hover::after {
        width: 100%;
      }
    }
  }
</style>
