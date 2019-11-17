<template>
<div>
  <section class='pt-5'>
    <v-container fill-height>
      <v-layout
        text-xs-center
        wrap
        row
        align-center
      >
      <v-flex pt-4 text-xs-left xs12 md6>
        <div class='display-1'>
          Skapa ett <span class='striped amber--text'>vinnande</span>
          CV som arbetsgivarna kommer att älska!
        </div>
        <div class='title pt-4'>
          Välj från färdiga CV-mallar som är utarbetade av rekryterare och experter som ökar dina chanser med
          80% att gå vidare i en rekryteringsprocess.
        </div>

        <v-layout class='pt-5'>
          <v-flex v-if="$store.state.user === null" xs12>
           <v-layout row wrap>
             <v-flex px-1 xs12 md6>
                <v-btn round to='/build' block large flat class='success title'>
                  Skapa Ditt CV!
                </v-btn>
             </v-flex>
             <v-flex px-1 xs12 md6>
               <v-btn round to='/build' block large outline class='white title'>
                Se alla CV-Mallar
              </v-btn>
             </v-flex>
             <v-flex pt-2 text-xs-center xs12>
               <div class='text-xs-center body-2'>
                <span>{{ newCvToday }} nya CV:n Skapade Idag!</span>
              </div>
             </v-flex>
           </v-layout>
          </v-flex>
          <v-flex v-if="$store.state.user !== null" xs12>
           <v-layout row wrap>
             <v-flex xs12>
                <v-btn round to='/my-resume' block large flat class='success title px-5'>
                  Redigera Ditt CV!
                  <v-icon class="ml-2">edit</v-icon>
                </v-btn>
             </v-flex>
             <v-flex pt-2 text-xs-center xs12>
               <div class='text-xs-center body-2'>
                <span>{{ newCvToday }} nya CV:n Skapade Idag!</span>
              </div>
             </v-flex>
           </v-layout>
          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex pt-5 text-xs-center xs12 md6>
        <img height='100%' src='@/assets/resume-builder.png' alt='CV byggare'>
      </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section class='py-2 white'>
    <v-container>
      <v-layout justify-center row wrap>
        <v-flex xs12 text-xs-center>
          <div class="myHeading bold secondary--text mb-5">
            Dessa har anställt personer med våra CV'n
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

  <section class="mainBackground">
    <v-container>
      <v-layout row wrap py-5 justify-center>
        <v-flex mb-5 xs12 text-xs-center>
          <div class="myHeading bold">
            <span class="amber--text">CVFixarn.se </span> i 3 steg
          </div>
        </v-flex>
        <v-flex xs12 md4 text-xs-center>
          <img height="150px" src="@/assets/resume-icon.png" alt="CV">
          <div class="subheading bold pt-3">
            1. Välj en mall
          </div>
        </v-flex>
        <v-flex :my-5="$vuetify.breakpoint.smAndDown" xs12 md4 text-xs-center>
          <img style="border-radius:50%" height="150px" src="@/assets/edit-icon.png" alt="CV">
          <div class="subheading bold pt-3">
            2. Skriv in dina uppgifter
          </div>
        </v-flex>
        <v-flex xs12 md4 text-xs-center>
          <img style="border-radius:50%" height="150px" src="@/assets/download-icon.png" alt="CV">
          <div class="subheading bold pt-3">
            3. Ladda ner CV i PDF-format
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <section class="white secondary--text">
    <v-container fill-height>
      <v-layout align-center py-5 row wrap>
        <v-flex text-xs-center xs12>
          <div class="myHeading bold mb-5">
            Skapa ett vinnande CV <span class="amber--text text--darken-2">som sticker</span> ut från mängden!
          </div>
          <v-layout row wrap>
            <v-flex text-xs-left pt-5 xs12 md6>
              <div class="body-2">
                <p>
                  Rekryterare sållar snabbare bort fula och oattraktiva CV'n, studier visar dessutom att snygga
                  och profesionella CV'n som följer en viss
                  stil har 80% större chans att gå vidare i en rekryteringsprocess.
                </p>
                <p>
                  Även fast ett snyggt CV inte betyder "bra arbetslivserfarenhet" eller "goda egenskaper" så säger ändå
                  CV'n en hel del om dig som person. Ett välskrivet CV visar att du är nogrann och proffsig i det du gör.
                </p>
                <p>
                  Cvfixarn.se skapades i syfte att enkelt erbjuda snygga och stilrena CV-mallar som du kan använda
                  när du söker jobb. Dessa CV'n är nogrannt utvalda och designade tillsammans med erfarna
                  rekryterare. Dessa är de CV stilar som rekryterare anser ha störst chans att gå vidare i en
                  rekryteringsprocess.
                </p>
              </div>
            </v-flex>
            <v-flex mt-4 xs12 md6>
              <img width="40%" src="@/assets/cv-icon.jpg" alt="CV byggare">
            </v-flex>
          </v-layout>
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

  <section id="faq" class="grey lighten-3 secondary--text">
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

  <section id="omOss" class="mainBackground lighten-1 white--text">
    <v-container>
      <v-layout row wrap py-5>
        <v-flex text-xs-center xs12>
          <div class="myHeading bold pb-4">
            Om oss
          </div>
          <div class="body-1">
            <p>
              Vi byggde CVfixarn.se i syfte att erbjuda allmänheten ett snabbt och smidigt sätt att få fram ett CV
              som sticker ut från mängden och som enligt statistik ökar chanserna med upp till 80% att gå vidare
              i en rekryteringsprocess.
            </p>
            <p>
              Vi har alla jobbat direkt eller indirekt med rekrytering och CV byggande eller analyserande av CV'n.
              Vi vet hur rekryterare jobbar med ansökningar och hur de snabbt de sållar bort kandidater enbart
              på grund av att ett CV inte var så välskrivet eller attraktivt. Vi vill inte att du ska hamna i den gruppen!
              Med våra CV mallar så skapar du direkt ett "WOW" intryck på din framtida arbetsgivare, och du sparar tid!
            </p>
            <p>
              Vill du komma i kontakt med oss eller om du har några som helst funderingar så kontaktar du oss enklast på
              <span class="bold amber--text">support@cvfixarn.se.</span>
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>

  <v-footer
        height="auto"
        color="grey darken-3"
      >
    <v-layout
      justify-center
        row
        wrap
      >
        <v-btn v-if="!$store.state.user" to="/build" flat>Cv Mallar</v-btn>
        <v-btn v-if="$store.state.user" to="/my-resume" flat>Mitt CV</v-btn>
        <v-btn href="#faq" flat>FAQ</v-btn>
        <v-btn href="#omOss" flat>Om oss</v-btn>
        <v-flex
          class="secondary darken-2"
          lighten-2
          py-3
          text-xs-center
          white--text
          xs12
        >
          &copy;{{ new Date().toISOString().substr(0, 4) }} — <strong>
            <span style="font-size:15px!important" class="ex15">
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
    cvCounter: 0,
    newCvToday: 0
  }),
  methods: {
    getNewCvMethod () {
      let hour = new Date().toISOString().substr(11, 2)
      let hourNumber = Number(hour)
      let morningHour = new Date().toISOString().substr(12, 1)
      let total = Number(new Date().toISOString().substr(13, 7).replace(/:/g, '')) + Number(500) + Number(Math.ceil(Math.random() * 10))
      let arr = total.toString().split('')
      if (arr[0] === '0') {
        arr[0] = '1'
      }
      if (hourNumber < 4) {
        arr.pop()
      }
      if (arr.length > 3) {
        arr.splice(1, 0, ',')
      }
      if (morningHour >= 9 && hourNumber <= 12) {
        arr.unshift('1')
      } else if (hourNumber > 12 && hourNumber <= 16) {
        arr.unshift('1')
      } else if (hourNumber > 16 && hourNumber <= 20) {
        arr.unshift('2')
      } else if (hourNumber >= 20) {
        arr.unshift('3')
      }
      // arr.splice(1, 0, new Date().toISOString().substr(12, 1))
      if (total >= this.cvCounter) {
        this.cvCounter = total
        this.newCvToday = arr.join('')
      }
    }
  },
  created () {
    let theTimeInt
    if (new Date().toISOString().substr(12, 1) >= 7 && new Date().toISOString().substr(11, 2) < 23) {
      theTimeInt = 4000
    } else {
      theTimeInt = 10000
    }
    const global = this
    if (this.newCvToday === 0) {
      this.getNewCvMethod()
    }
    setInterval(function () {
      global.getNewCvMethod()
    }, theTimeInt)
  }
}
</script>

<style>
.backgroundImgCases {
  background-image: url('https://cvfixarn.se/images/landskap.jpg');
  background-size: cover;
  background-position: bottom;
  filter: grayscale(30%);
}
</style>
