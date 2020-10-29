<template>
  <div class="contact-page mt-5 mb-5 " id="contact" ref="contact">
    <h1 class="contact-page__title--main text-xs-center  mt-5 mb-5">
      <hr>
      Jak można się z nami skontaktować?
    </h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 class="contact-page__panel">
          <v-expansion-panels style="background: #f9f8f4">
            <v-expansion-panel style="background: #f9f8f4">
              <v-expansion-panel-header>
                Adres
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="mb-2 mt-2">Pomoc drogowa</p>
                <p class="mb-2 mt-2">Opoczno ul. Dworcowa 1</p>
                <p class="mb-2 mt-2">26-332 Opoczno</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel style="background: #f9f8f4">
              <v-expansion-panel-header>
                Konakt
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="title">609 049 726</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel style="background: #f9f8f4">
              <v-expansion-panel-header>
                Email
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="title">Cpd@vp.pl</p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-flex>
        <v-flex xs12 sm12 md4>
          <iframe class="hidden-md-and-up contact-page__map-mobile"
                  src="https://www.google.com/maps/d/embed?mid=1oOn_9Wul2EwESvSt2qp5gdFgwBuHjYeo"></iframe>
          <iframe class="hidden-sm-and-down contact-page__map"
                  src="https://www.google.com/maps/d/embed?mid=1oOn_9Wul2EwESvSt2qp5gdFgwBuHjYeo"></iframe>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<style lang="scss" scoped>
  .contact-page {
    clear: both;
    width: 100vw;
    height: auto;

    &__panel {
      margin-top: auto;
      margin-bottom: auto;
    }

    &__title--main {
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 40px;
      color: black;
      text-align: center;
    }

    &__map-mobile {
      width: 85vw;
      height: 50vh;
      margin-left: 2vw;
      margin-right: 2vw;
    }

    &__map {
      width: 40vw;
      height: 40vh;
      margin-left: 2vw;
      margin-right: 2vw;
    }
  }
</style>
