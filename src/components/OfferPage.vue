<template>
  <div class="offer-page" id="offer" ref="offer">
    <div class="hidden-sm-and-down">

      <h1 class="offer-page__title--main text-xs-center pa-5 mt-5">
        <hr>Jak możemy pomóc naszym klientom?
      </h1>
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon2.png"/>
            </v-avatar>
            <p class="offer-page__title">Autoholowanie</p>
            <p class="offer-page__subtitle">Z niewiadomych przyczyn zepsuł Ci się samochód? Zadzwoń do nas!</p>
          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon6.png"/>
            </v-avatar>

            <p class="offer-page__title"> Złe warunki pogodowe</p>
            <p class="offer-page__subtitle"> Warunki atmosferyczne nie stanowią dla nas problemu</p>
          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon3.png"/>
            </v-avatar>
            <p class="offer-page__title">Zakopałeś się?</p>
            <p class="offer-page__subtitle"> Wyciągniemy Cię z największego błota i nie tylko!</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon1.png"/>
            </v-avatar>
            <p class="offer-page__title"> Wyleciałeś z drogi?</p>
            <p class="offer-page__subtitle"> Wyciągniemy samochód po dachowaniu jak i wpadnięciu do rowu</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon5.png"/>
            </v-avatar>
            <p class="offer-page__title"> Pojazd w cieżim stanie</p>
            <p class="offer-page__subtitle"> Stan techniczny pojazdu nie stanowi dla nas problemu!</p>

          </v-flex>

          <v-flex class="pa-5" lg4 md4 sm6 text-xs-center xs12>

            <v-avatar
              class=" profile offer-page__image"
              size="164"
              tile>
              <img alt="avatar" src="@/assets/images/icon4.png"/>
            </v-avatar>
            <p class="offer-page__title"> Holowanie tirów</p>
            <p class="offer-page__subtitle"> W swojej ofercie posiadamy również holowanie pojazdów tirowych</p>

          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="offer-page hidden-md-and-up">
      <a class="mobile__title--main  pl-1 pr-1 mt-5">
        <center>Jak możemy pomóc naszym klientom?</center>
      </a>
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon2.png"/>
            </v-avatar>
            <p class="mobile__title">Autoholowanie</p>
            <p class="mobile__subtitle">Z niewiadomych przyczyn zepsuł Ci się samochód? Zadzwoń do nas!</p>
          </v-flex>

          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class="profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon6.png"/>
            </v-avatar>

            <p class="mobile__title"> Złe warunki pogodowe</p>
            <p class="mobile__subtitle"> Warunki atmosferyczne nie stanowią dla nas problemu</p>
          </v-flex>

          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon3.png"/>
            </v-avatar>
            <p class="mobile__title">Zakopałeś się?</p>
            <p class="mobile__subtitle"> Wyciągniemy Cię z największego błota i nie tylko!</p>

          </v-flex>

          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon1.png"/>
            </v-avatar>
            <p class="mobile__title"> Wyleciałeś z drogi?</p>
            <p class="mobile__subtitle"> Wyciągniemy samochód po dachowaniu jak i wpadnięciu do rowu</p>

          </v-flex>

          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>
            <v-avatar
              class=" profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon5.png"/>
            </v-avatar>
            <p class="mobile__title"> Pojazd w cieżim stanie</p>
            <p class="mobile__subtitle"> Stan techniczny pojazdu nie stanowi dla nas problemu!</p>

          </v-flex>

          <v-flex class="pa-0" lg4 md4 sm6 text-xs-center xs12>

            <v-avatar
              class=" profile mobile__image"
              size="96"
              tile>
              <img alt="avatar" src="@/assets/images/icon4.png"/>
            </v-avatar>
            <p class="mobile__title"> Holowanie tirów</p>
            <p class="mobile__subtitle"> W swojej ofercie posiadamy również holowanie pojazdów tirowych</p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
