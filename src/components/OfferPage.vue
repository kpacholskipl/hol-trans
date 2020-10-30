<template>
  <div class="offer-page" id="offer" ref="offer">
      <h1 class="offer-page__title--main text-xs-center pa-5 mt-5">
        <hr>
        Jak możemy pomóc naszym klientom?
      </h1>
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon2.png"/>
            </v-avatar>
            <p :class="mobile?'mobile__title':'offer-page__title'">Autoholowanie</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'">Z niewiadomych przyczyn zepsuł Ci się samochód? Zadzwoń do nas!</p>
          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon6.png"/>
            </v-avatar>

            <p :class="mobile?'mobile__title':'offer-page__title'"> Złe warunki pogodowe</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'"> Warunki atmosferyczne nie stanowią dla nas problemu</p>
          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon3.png"/>
            </v-avatar>
            <p :class="mobile?'mobile__title':'offer-page__title'">Zakopałeś się?</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'"> Wyciągniemy Cię z największego błota i nie tylko!</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon1.png"/>
            </v-avatar>
            <p :class="mobile?'mobile__title':'offer-page__title'"> Wyleciałeś z drogi?</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'"> Wyciągniemy samochód po dachowaniu jak i wpadnięciu do rowu</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon5.png"/>
            </v-avatar>
            <p :class="mobile?'mobile__title':'offer-page__title'"> Pojazd w ciężkim stanie</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'"> Stan techniczny pojazdu nie stanowi dla nas problemu!</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>

            <v-avatar
              class="profile offer-page__image"
              :size="mobile?96:164"
              tile>
              <img alt="avatar" src="@/assets/images/icon4.png"/>
            </v-avatar>
            <p :class="mobile?'mobile__title':'offer-page__title'"> Holowanie tirów</p>
            <p :class="mobile?'mobile__subtitle':'offer-page__subtitle'"> W swojej ofercie posiadamy również holowanie pojazdów tirowych</p>

          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>
<script>
  export default {
    computed: {
      mobile() {
        return this.$vuetify.breakpoint.smAndDown
      }
    }
  }
</script>
<style lang="scss" scoped>
  .offer-page {
    clear: both;
    width: 100vw;
    height: auto;

    &__title {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 22px;
      color: black;
    }

    &__title--main {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 40px;
      color: black;
      text-align: center;
    }

    &__subtitle {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 18px;
      color: black;
      opacity: 0.7;
    }

    &__image {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .mobile {
    width: 100vw;
    height: auto;

    &__title {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 1.25rem;
      font-weight: bold;
      color: black;
    }

    &__title--main {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 3rem;
      color: black;
    }

    &__subtitle {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-display: auto;
      font-size: 1rem;
      color: black;
      padding: 0% 20%;
      opacity: 0.7;
    }

    &__image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1vh;
      width: auto;
      height: auto;
    }
  }
</style>
