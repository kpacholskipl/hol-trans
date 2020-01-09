<template>
  <nav>
    <v-toolbar
      :color="isTransparent ? 'transparent' : '#white'"
      class="menucontainer hidden-sm-and-down"
      v-scroll="onScroll">
      <v-toolbar-title>
        <img @click="$vuetify.goTo('#homepage', options)" class="logo-1" src="@/assets/images/logo.png"/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items class="menu">
        <a @click="$vuetify.goTo('#homepage', options)" aria-label="Strona główna" class="menubutton mr-2">Strona główna</a>
        <a @click="$vuetify.goTo('#offer', options)" aria-label="Oferta" class="menubutton mr-2">Oferta</a>
        <a @click="$vuetify.goTo('#about', options)" aria-label="O firmie" class="menubutton mr-2">O firmie</a>
        <a @click="$vuetify.goTo('#contact', options)" aria-label="Kontakt" class="menubutton">Kontakt</a>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <social-media/>
    </v-toolbar>
    <div class="hidden-md-and-up menumobilecontainer">

      <div class="navcontainer">
        <v-btn class="ml-5 mr-0" href="tel:609049726" color="success" fab large dark>
          <v-icon> mdi-cellphone</v-icon>
        </v-btn>
        <picture>
          <img alt="Logo hol-trans" class="logo-mobile mr-5" id="mlink0" src="@/assets/images/logo.png">
        </picture>
        <button @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </button>
      </div>
      <div class="block">
        <ul id="menumobile" v-show="drawer">
          <a @click="drawer = !drawer; $vuetify.goTo('#homepage', mobileOptions)" aria-label="Strona główna"
             class="menumobilebutton">Strona
            główna</a>

          <a @click="drawer = !drawer; $vuetify.goTo('#offer', mobileOptions)" aria-label="Oferta"
             class="menumobilebutton">Oferta</a>
          <a @click="drawer = !drawer; $vuetify.goTo('#about', mobileOptionsSecond)" aria-label="O firmie"
             class="menumobilebutton">O firmie</a>
          <a @click="drawer = !drawer; $vuetify.goTo('#contact', mobileOptionsSecond)" aria-label="Kontakt"
             class="menumobilebutton">Kontakt</a>
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
      offset: 100,
      duration: 1000,
      drawer: false,
      easing: 'easeInOutCubic',
      menu: [
        {icon: 'home', title: 'Link A'},
        {icon: 'info', title: 'Link B'},
        {icon: 'warning', title: 'Link C'}
      ]
    }),


    methods: {
      go() {
        this.drawer = false
        this.$vuetify.goTo('#homepage', this.options)
      },
      onScroll() {
        this.isTransparent = window.pageYOffset < 50
      },
      push() {
        window.open('https://www.facebook.com/pomocdrogowaopoczno', "_blank")
        //window.location.href = path
      },
      menuItems() {
        return this.menu
      }
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
