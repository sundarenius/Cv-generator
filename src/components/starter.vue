<template>
<div>
  <div v-if="$store.state.step === 1">
    <v-container class="py-5">
      <v-layout row wrap>
        <v-flex text-xs-center class="pt-5 display-1" xs12>
          <div>
            <span class="white--text">Välj en</span>&nbsp;<span class="amber--text">CV-Mall</span>
          </div>
          <div class="body-1 white--text">
            Du kan ändra mall &amp; färg senare.
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout mb-5 justify-center row wrap>
        <v-flex mb-4 @click="$store.state.choosed = 1" @mouseover="hoverTrueOne = true" @mouseleave="hoverTrueOne = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueOne, 'choosed' : $store.state.choosed === 1}" px-2 py-2 xs12 lg4>
          <img width="100%" src="@/assets/cv1.png" alt="cv1">
          <div v-if="$vuetify.breakpoint.mdAndUp">
            <v-btn @click="previewWindow = true" v-show="hoverTrueOne" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
            <v-btn @click="nextStep" v-show="hoverTrueOne" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
          </div>
        </v-flex>
         <v-flex mb-4 @click="$store.state.choosed = 2" @mouseover="hoverTrueTwo = true" @mouseleave="hoverTrueTwo = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueTwo, 'choosed' : $store.state.choosed === 2}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv2.png" alt="cv2">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueTwo" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueTwo" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 7" @mouseover="hoverTrueSeven = true" @mouseleave="hoverTrueSeven = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueSeven, 'choosed' : $store.state.choosed === 7}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv7.png" alt="cv7">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueSeven" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueSeven" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 4" @mouseover="hoverTrueFour = true" @mouseleave="hoverTrueFour = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueFour, 'choosed' : $store.state.choosed === 4}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv4.png" alt="cv4">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueFour" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueFour" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 5" @mouseover="hoverTrueFive = true" @mouseleave="hoverTrueFive = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueFive, 'choosed' : $store.state.choosed === 5}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv5.png" alt="cv5">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueFive" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueFive" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 6" @mouseover="hoverTrueSix = true" @mouseleave="hoverTrueSix = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueSix, 'choosed' : $store.state.choosed === 6}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv6.png" alt="cv6">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueSix" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueSix" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 3" @mouseover="hoverTrueThree = true" @mouseleave="hoverTrueThree = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueThree, 'choosed' : $store.state.choosed === 3}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv3.png" alt="cv3">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueThree" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueThree" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 8" @mouseover="hoverTrueEight = true" @mouseleave="hoverTrueEight = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueEight, 'choosed' : $store.state.choosed === 8}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv8.png" alt="cv8">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueEight" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueEight" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 9" @mouseover="hoverTrueNine = true" @mouseleave="hoverTrueNine = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueNine, 'choosed' : $store.state.choosed === 9}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv9.png" alt="cv9">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueNine" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueNine" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 10" @mouseover="hoverTrueTen = true" @mouseleave="hoverTrueTen = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueTen, 'choosed' : $store.state.choosed === 10}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv10.png" alt="cv10">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueTen" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueTen" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 11" @mouseover="hoverTrueEleven = true" @mouseleave="hoverTrueEleven = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueEleven, 'choosed' : $store.state.choosed === 11}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv11.png" alt="cv11">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueEleven" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueEleven" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>
        <v-flex mb-4 @click="$store.state.choosed = 12" @mouseover="hoverTrueTwelve = true" @mouseleave="hoverTrueTwelve = false" :class="{'pointer chooseCardBig' : true, 'mall' : hoverTrueTwelve, 'choosed' : $store.state.choosed === 12}" px-2 py-2 xs12 lg4>
            <img width="100%" src="@/assets/cv12.png" alt="cv12">
            <div v-if="$vuetify.breakpoint.mdAndUp">
              <v-btn @click="previewWindow = true" v-show="hoverTrueTwelve" class="white--text" style="position:absolute;bottom:50px;left:0" round small block flat>Förhandsgranska</v-btn>
              <v-btn @click="nextStep" v-show="hoverTrueTwelve" style="position:absolute;bottom:0;left:0" block round flat class="success lighten-1 bold">VÄLJ</v-btn>
            </div>
        </v-flex>

        <!-- BOTTOMVIDARE  -->
        <div v-if="$store.state.choosed > 0" class="vidareBottom">
          <v-layout justify-center row>
            <v-flex text-xs-center xs6>
              <v-btn round @click="nextStep" class="success px-5 title" large>
                Vidare
                <v-icon x-large>arrow_right</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </div>

      <!-- ***********   TESTMALLEN ***********  -->
        <v-flex v-if="0" my-5 px-3 py-5 xs12>
          <testMall/>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
  <div v-if="$store.state.step === 2">
    <transition name="qfade" mode="out-in">
      <step2 />
    </transition>
  </div>
  <div v-if="$store.state.step === 3">
    <transition name="qfade" mode="out-in">
      <step3 />
    </transition>
  </div>
  <div v-if="$store.state.step === 4">
    <transition name="qfade" mode="out-in">
      <step4 />
    </transition>
  </div>
  <div v-if="$store.state.step === 5">
    <transition name="qfade" mode="out-in">
      <step5 />
    </transition>
  </div>

  <div v-if="$store.state.step > 1" style="position:fixed;bottom:0;z-index:10;width:100vw;height:60px" class="secondary px-5">
    <v-layout justify-center>
      <v-flex style="position:relative" xs12 md8>
          <v-progress-linear
          style="border-radius:10px"
          :color="progressColor"
          height="30"
          :value="progressStat"
        ></v-progress-linear>
        <span style="position:absolute;top:16px;left:30px;z-index:30" class="white--text subheading bold">
          Steg {{ $store.state.step }} av 5
        </span>
      </v-flex>
    </v-layout>
  </div>

  </div>
</template>

<script>
import testMall from '@/components/mallar/testMall.vue'
import step2 from '@/components/steps/step2.vue'
import step3 from '@/components/steps/step3.vue'
import step4 from '@/components/steps/step4.vue'
import step5 from '@/components/steps/step5.vue'

export default {
  components: {
    testMall,
    step2,
    step3,
    step4,
    step5
  },
  data: () => ({
    hoverTrueOne: false,
    hoverTrueTwo: false,
    hoverTrueThree: false,
    hoverTrueFour: false,
    hoverTrueFive: false,
    hoverTrueSix: false,
    hoverTrueSeven: false,
    hoverTrueEight: false,
    hoverTrueNine: false,
    hoverTrueTen: false,
    hoverTrueEleven: false,
    hoverTrueTwelve: false,
    previewItem: '',
    choosed: 0,
    progressColors: ['warning', 'primary', 'success', 'success', 'success']
  }),
  computed: {
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    },
    progressColor () {
      return this.progressColors[this.$store.state.step - 2]
    },
    progressStat () {
      return (this.$store.state.step / 5) * 100
    }
  },
  methods: {
    preview () {
      this.previewWindow = true
    },
    nextStep () {
      // Nollställ mallData
      this.$store.state.mallData.name = ''
      this.$store.state.mallData.sammanfattning = ''
      this.$store.state.mallData.email = ''
      this.$store.state.mallData.phoneNr = '000-00 00 000'
      this.$store.state.mallData.city = ''
      this.$store.state.mallData.zip = ''
      this.$store.state.mallData.country = 'Sverige'
      this.$store.state.mallData.skills = []
      this.$store.state.mallData.work = []
      this.$store.state.mallData.education = []
      this.$store.state.mallData.utmarkelser = []
      this.$store.state.mallData.hobbier = []
      this.$store.state.mallData.languages = []
      this.$store.state.mallData.volontararbete = []
      this.$store.state.mallData.links = []
      this.$store.state.mallData.referenser = []
      this.$store.state.step = 2
    }
  }
}
</script>

<style>
.vidareBottom {
  position: fixed;
  bottom: 0;
  height: 54px;
  background: #3e3e3e;
  width: 100vw;
  z-index: 15;
}
</style>
