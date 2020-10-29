<template>
  <div class="about-company-page" id="about" ref="about">
    <h1 class="about-company-page__title--main mb-5">
      <hr>
      Kilka słów o nas
    </h1>
    <v-container text-xs-center>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12 class="about-company-page__text">
          <blockquote class="pl-5 pr-5 mb-5">
            Firma powstała w 2000 roku. Świadczymy pomoc drogą 24h na dobę przez 7 dni w tygodniu na terenie całego
            kraju i zagranicy.
            Działamy szybko i skutecznie, świadcząc pomoc drogową
            w miejscach wypadków i awarii samochodów ciężarowych
            i osobowych. Jesteśmy gotowi do podjęcia interwencji o każdej porze w najkrótszym możliwym czasie.
            <br><br>
            Jako firma z długoletnim doświadczeniem oferujemy również transport wozków widłowych, maszyn rolniczych i
            budowlanych.
            Zajmujemy się również wypożyczaniem samochodów zastępczych. Dodatkowo proponuejmy wynajem lawet.
            Dysponujemy specjalistycznym sprzętem najwyższej klasy!
          </blockquote>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-carousel
            class="hidden-sm-and-down about-company-page__slider mb-5" hide-delimiters>
            <v-carousel-item
              :key="i"
              :src="item.src"
              v-for="(item,i) in items"
            ></v-carousel-item>
          </v-carousel>
          <v-carousel class="hidden-md-and-up about-company-page__slider mb-5" hide-delimiters>
            <v-carousel-item
              :key="i"
              :src="item.src"
              v-for="(item,i) in items_mobile"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            src: require('@/assets/images/slider1.jpg'),
          },
          {
            src: require('@/assets/images/slider2.jpg'),
          },
          {
            src: require('@/assets/images/slider3.jpg'),
          },
          {
            src: require('@/assets/images/slider4.jpg'),
          },
          {
            src: require('@/assets/images/slider5.jpg'),
          },
          {
            src: require('@/assets/images/slider6.jpg'),
          },

        ],
        items_mobile: [
          {
            src: require('@/assets/images/slider2.jpg'),
          },
          {
            src: require('@/assets/images/slider1.jpg'),
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
  .about-company-page {
    height: auto !important;

    &__slider {
      float: right;
    }

    &__title--main {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 40px;
      color: black;
      text-align: center;
    }

    &__text {
      float: left;
      margin: auto;
      font-size: 135%;
      @media only screen and (max-width: 600px) {
        font-size: 110%;
        margin-bottom: 5vh !important;
      }
    }
  }
</style>
