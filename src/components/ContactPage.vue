<template>
  <div class="contact-page mt-5 mb-5 " id="contact" ref="contact">
    <h1 class="offer-page__title--main text-xs-center  mt-5 mb-5">
      <hr>Jak można się z nami skontaktować?</h1>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6>
          <v-expansion-panel  accordion>
            <v-expansion-panel-content style="background: #f9f8f4"
            >
              <h2 slot="header" class="display-1">
                <!--<v-icon left dark>{{expandIcon(n)}}</v-icon>-->
                Adres:
              </h2>
              <v-card style="background: #f9f8f4">
                <v-card-text class="title">
                  <p class="mb-2 mt-2">Pomoc drogowa</p>
                  <p class="mb-2 mt-2">Opoczno ul. Dworcowa 1</p>
                  <p class="mb-2 mt-2">26-332 Opoczno</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content style="background: #f9f8f4"
            >
              <h2 slot="header" class="display-1" style="background: #f9f8f4">
                <!--<v-icon left dark>{{expandIcon(n)}}</v-icon>-->
                Konakt:
              </h2>
              <v-card style="background: #f9f8f4">
                <v-card-text class="title">
                  <p class="title">609 049 726</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content style="background: #f9f8f4"
            >
              <h2 slot="header" class="display-1" style="background: #f9f8f4">
                <!--<v-icon left dark>{{expandIcon(n)}}</v-icon>-->
                Email:
              </h2>
              <v-card style="background: #f9f8f4">
                <v-card-text class="title">
                  <p class="title">Cpd@vp.pl</p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <iframe class="hidden-md-and-up map-mobile" src="https://www.google.com/maps/d/embed?mid=1oOn_9Wul2EwESvSt2qp5gdFgwBuHjYeo"></iframe>
            <iframe class="hidden-sm-and-down map"  src="https://www.google.com/maps/d/embed?mid=1oOn_9Wul2EwESvSt2qp5gdFgwBuHjYeo"></iframe>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
