<template>
  <div>
    <div style="position:absolute;top:15px;right:15px;z-index:20">
      <v-btn to="/my-resume" outline fab large>
        <v-icon class="white--text bold" x-large>close</v-icon>
      </v-btn>
    </div>
    <v-container>
      <v-btn v-if="0" style="position:absolute;top:80px" @click="downloadCv">LADDA NER</v-btn>
      <v-layout justify-center row wrap py-5>
        <v-flex text-xs-center xs12 pt-3 pb-5 px-3>
          <div class="display-1 bold">
            Maxa dina <span class="striped">jobbmöjligheter</span>
          </div>
          <div class="subheading bold py-4">
            Ett bra och välstrukturerat CV som sticker ut från mängden
            <span class="amber--text">har 80% större chans</span>
            att gå vidare i en rekryteringsprocess.
          </div>
          <div class="subheading bold">
            Alla priser är <span class="amber--text">engångskostnader</span>
            och du binder INTE upp dig på någonting!
          </div>
        </v-flex>
        <v-flex v-show="paymentInfo" class="pb-5" xs12 text-xs-center>
          <div class="body-2">
            Du kommer bli omdirigerad till nedladdningssidan så fort din betalning verifierats...
          </div>
          <div class="body-2">
            Vänta kvar, detta kan ta några sekunder...
          </div>
          <div class="pt-3">
            <v-progress-circular
              class="pl-2"
              :size="40"
              color="white"
              indeterminate
            ></v-progress-circular>
          </div>
        </v-flex>
        <v-flex :px-4="$vuetify.breakpoint.mdAndUp" xs12 md6>
          <v-card class="white secondary--text">
            <v-card-title class="justify-center primary lighten-3">
              <div class="display-1 bold white--text">
                Basic
              </div>
            </v-card-title>
            <v-card-text>
              <div class="display-1 pb-4 bold text-xs-center">
                {{ basicPrice }} SEK
              </div>
              <ul class="bold secondary--text text--lighten-1">
                <li>Engångskostnad <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>CV i PDF-format <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>Säker SSL- Krypterad Betalning med Stripe <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>Obegränsat med CV nedladdningar &amp; revideringar i 7 dagar <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>7 Dagars Pengarna Tillbaka Garanti! <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-btn large round @click="pay(1)" block class="success bold title">
                Betala nu
                <v-icon class="ml-2">credit_card</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex :my-4="$vuetify.breakpoint.smAndDown" :px-4="$vuetify.breakpoint.mdAndUp" xs12 md6>
          <v-card class="white secondary--text">
            <v-card-title class="justify-center yellow darken-2">
              <div class="display-1 bold white--text">
                Premium
              </div>
            </v-card-title>
            <v-card-text>
              <div class="display-1 pb-4 bold text-xs-center">
                {{ premiumPrice }} SEK
              </div>
              <ul class="bold secondary--text text--lighten-1">
                <li>Allt i basic <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>Obegränsat med CV nedladdningar för alltid <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>Obegränsat med revideringar (med din e-post) <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>Engångsbetalning <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
                <li>7 Dagars Pengarna Tillbaka Garanti <v-icon small class="success--text text--darken-1 bold">check</v-icon></li>
              </ul>
            </v-card-text>
            <v-card-actions>
              <v-btn large round @click="pay(2)" block class="success bold title">
                Betala nu
                <v-icon class="ml-2">credit_card</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex class="mt-4" xs12 text-xs-center>
          <img
            style="max-width:80vw"
            width="420px"
            src="@/assets/secure-stripe-payment-logo.png"
            alt="Söker betalning med Stripe">
        </v-flex>
      </v-layout>
    </v-container>

    <section class='py-2 white'>
    <v-container>
      <v-layout justify-center row wrap>
        <v-flex xs12 text-xs-center>
          <div class="myHeading bold secondary--text mb-5">
            Dessa företag har anställt personer med våra CV'n
          </div>
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/hm.png" alt="Hennes &amp; mauritz">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/stadium.png" alt="Stadium logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/starbucks.jpg" alt="Starbucks logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/ericsson.png" alt="Ericsson logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/ibm.jpg" alt="IBM logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/Nordea.png" alt="Nordea logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/jysk.jpg" alt="Jysk logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/betsson.jpg" alt="Betsson logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/beijer.png" alt="Beijer logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/peab.jpg" alt="Peab logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/schibsted.jpeg" alt="Schibsted logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/manpower.jpeg" alt="Manpower logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/bisnode.png" alt="Bisnode logga">
        </v-flex>
       <v-flex xs4 md2 my-2 mx-2 text-xs-center style="filter:grayscale(90%)">
          <img height="30px" src="@/assets/volvo.jpeg" alt="Volvo logga">
        </v-flex>
      </v-layout>
    </v-container>
  </section>

<section class="backgroundImgCases lighten-2">
    <v-container>
      <v-layout row wrap py-5>
        <v-flex text-xs-center xs12>
          <div class="myHeading bold pb-5">
            Nöjda kunder från hela landet
          </div>
        </v-flex>
        <v-flex px-4 text-xs-center md4 xs12>
          <div class="subheading">
            <blockquote class="mainBackground white--text py-3 px-3 bold v-card" style="border-radius:20px">
              "Cvfixarn.se var enkel och smidig att använda och jag har helt klart fått mycket bättre respons från arbetsgivare nu.
              Tack för en bra tjänst!"
              <br>
               - Anette från Uppsala, 34 år
            </blockquote>
          </div>
        </v-flex>
        <v-flex :my-4="$vuetify.breakpoint.smAndDown" px-4 text-xs-center md4 xs12>
          <div class="subheading">
            <blockquote class="mainBackground white--text py-3 px-3 bold v-card" style="border-radius:20px">
              "Jag fick mitt drömjobb inom 2 veckor med mitt nya CV,
              och de sa faktiskt specifikt att de var väldigt imponerade av hur välskrivet mitt CV var."
              <br>
              - Johan från Stockholm, 21 år
            </blockquote>
          </div>
        </v-flex>
        <v-flex px-4 text-xs-center md4 xs12>
          <div class="subheading">
            <blockquote class="mainBackground white--text py-3 px-3 bold v-card" style="border-radius:20px">
              "Tack för en smidig och enkel tjänst. Fixade mitt CV på under 30 minuter, och väldigt snyggt blev det ju
              dessutom! Kan helt klart rekommendera Cvfixarn.se till andra." <br>
              - Sofie från Halmstad, 29 år
            </blockquote>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section class="grey lighten-3 secondary--text">
    <v-container>
      <v-layout row wrap py-5 text-xs-left>
        <v-flex text-xs-center xs12>
          <div class="myHeading bold pb-5">
            Frågor &amp; Svar
          </div>
        </v-flex>
        <v-flex :px-5="$vuetify.breakpoint.mdAndUp" xs12 md6>
          <div class="body-2">
            Hur har ni fått fram dessa CV mallar?
          </div>
          <div class="body-1">
            Vi har jobbat tätt ihop med erfarna rekryterare som har stor erfarenhet av att läsa igenom CV'n, dessa CV'n
            är utarbetade på ett sätt som gör det lättare och behagligare för rekryterare att läsa igenom ditt CV,
            samt att dessa CV'n (enligt våra rekryterare) ger bäst intryck.
          </div>
          <div class="body-2 pt-4">
            Kommer dessa CV mallar att öka mina chanser till att få ett bra jobb?
          </div>
          <div class="body-1">
            Ja. Men grunden för att få ett bra jobb är trots allt dina personliga egenskaper och erfarenheter.
            Men med dessa CV'n så optimerar du dina chanser att inte bli bortsållad snabbt som man annars kan bli
            när man har ett CV som till utseendet inte sticker ut så mycket eller ser alldeles för tråkigt och ointressant ut.
          </div>
          <div class="body-2 pt-4">
            Hur mycket ökar chanserna att gå vidare i en rekryteringsprocess med era CV mallar?
          </div>
          <div class="body-1">
            Vi har sett statistik på att kandidater med ett välskrivet och snyggt strukturerat CV 
            ökar sina chanser med upp till 80% att gå
            vidare i en rekryteringsprocess. Ett välskrivet och snyggt CV ger ett seriöst och proffsigt första intryck.
          </div>
        </v-flex>
        <v-flex :px-5="$vuetify.breakpoint.mdAndUp" xs12 md6>
          <div class="body-2">
            Varför inte bara bygga ett eget CV?
          </div>
          <div class="body-1">
            Att bygga ett eget CV med Word eller liknande program är mycket möjligt men då är det
            mycket svårare att få till ett CV som till utseendet sticker ut från mängden.
            Du sparar tid genom att använda vår CV byggare, du skriver bara i dina uppgifter och sedan
            kan kan du direkt välja vilken färdig CV mall som helst ur vårt arkiv.
          </div>
          <div class="body-2 pt-4">
            Har jag alla rättigheter till mitt CV?
          </div>
          <div class="body-1">
            Ja! När du har laddat ner ditt CV så äger du alla rättigheter till dokumentet.
          </div>
          <div class="body-2 pt-4">
            Vad kostar ett CV?
          </div>
          <div class="body-1">
            Du kan använda vår CV byggare helt utan kostnad. Är du nöjd med resultatet så kan du välja att betala
            en engångsavgift för att kunna ladda ner ditt CV. Vi har alltid 7 dagars pengarna tillbaka garanti!
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <v-footer
        height="auto"
      >
    <v-layout
      justify-center
        row
        wrap
      >
        <v-flex
          class="secondary"
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;{{ new Date().toISOString().substr(0, 4) }} — <strong>
            <span style="font-size:15px!important" class="ex15 bold">
              CVFixarn.se
            </span>
            - All rights reserved.
          </strong>
        </v-flex>
      </v-layout>
    </v-footer>

  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'hej',
    premiumPrice: 119,
    basicPrice: 49,
    paymentInfo: false
  }),
  methods: {
    downloadCv () {
      this.$store.commit('updateUserData')
      this.$store.state.startDownload = true
      this.$router.push('/my-resume')
    },
    pay (x) {
      if (x === 2) {
        this.$store.state.choosedPlan = 'premium'
        document.querySelector('#payBtnPrem').click()
      } else {
        this.$store.state.choosedPlan = 'basic'
        document.querySelector('#payBtnBasic').click()
      }
      this.paymentInfo = true
    }
  },
  mounted () {
    console.log('mounted from checkout.vue')
  },
  created () {
    if (!this.$store.state.user) {
      this.$router.push('/')
    }
    document.querySelector('#theEmail').innerText = this.$store.state.mallData.email
    addCheckoutMethod()
    document.querySelector('#triggerOrderFunctions').addEventListener('click', this.downloadCv)
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 15px;
}
</style>
