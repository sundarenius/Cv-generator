<template>
  <v-app
    dark
    :class="{'mainBackground' : $route.path !== '/my-resume', 'grey lighten-4' : $route.path === '/my-resume'}"
  >
    <v-toolbar v-if="$route.path !== '/my-resume'" class="mainBackground" absolute flat>
      <v-toolbar-title class="headline text-uppercase">
        <div class="ex15 white--text">
          CVFixarn.se
          <v-icon class="white--text" large style="margin-bottom:1px;margin-left:-8px">turned_in</v-icon>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$route.path === '/'">
          <v-btn
          class="hidden-sm-and-down"
          flat
          round
          to="/build"
        >
          <span class="mr-2">CV-MALLAR</span>
        </v-btn>
        <v-btn
          class="hidden-sm-and-down"
          flat
          round
          href="#faq"
        >
          <span class="mr-2">FAQ</span>
        </v-btn>
        <v-btn
          class="hidden-sm-and-down"
          flat
          round
          href="#omOss"
        >
          <span class="mr-2">OM OSS</span>
        </v-btn>
        <v-btn
          round
          v-if="$store.state.user === null"
          class="success subheading"
          :large="$vuetify.breakpoint.mdAndUp"
          :medium="$vuetify.breakpoint.smAndDown"
          flat
          @click="logInModal = true"
        >
          <span class="mr-2">LOGGA IN</span>
        </v-btn>
        <v-btn
          v-if="$store.state.user !== null"
          class="success subheading"
          to="/my-resume"
          :large="$vuetify.breakpoint.mdAndUp"
          :medium="$vuetify.breakpoint.smAndDown"
          flat
          round
        >
          <span class="mr-2">Mitt CV</span>
          <v-icon>edit</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-btn v-if="0" style="position:absolute;z-index:10;top:5px;left:5px" class="success" small flat @click="test">TEST</v-btn>

    <v-content>
      <transition name="component-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-content>

    <!-- **********  DIALOG FÖR ATT VISA MALLAR **********  -->
    <v-dialog v-model="previewWindow" max-width="950">
      <v-card class="grey lighten-3">
        <div style="position:absolute;top:0px;left:0px;z-index:40">
          <span style="padding:2px" class="white secondary--text body-1 bold">Förhandsgranskning</span>
        </div>
        <div style="position:absolute;top:10px;right:21px;z-index:40">
          <v-icon @click="previewWindow = false" class="pointer bold secondary--text" large>close</v-icon>
        </div>
        <v-layout row>
          <v-flex id="theMallPreview" xs11>
            <div v-if="$store.state.choosed === 1">
              <mall1 />
            </div>
            <div v-if="$store.state.choosed === 2">
              <mall2 />
            </div>
            <div v-if="$store.state.choosed === 3">
              <mall3 />
            </div>
            <div v-if="$store.state.choosed === 4">
              <mall4 />
            </div>
            <div v-if="$store.state.choosed === 5">
              <mall5 />
            </div>
            <div v-if="$store.state.choosed === 6">
              <mall6 />
            </div>
            <div v-if="$store.state.choosed === 7">
              <mall7 />
            </div>
            <div v-if="$store.state.choosed === 8">
              <mall8 />
            </div>
            <div v-if="$store.state.choosed === 9">
              <mall9 />
            </div>
            <div v-if="$store.state.choosed === 10">
              <mall10 />
            </div>
            <div v-if="$store.state.choosed === 11">
              <mall11 />
            </div>
            <div v-if="$store.state.choosed === 12">
              <mall12 />
            </div>
          </v-flex>
          <v-flex style="margin-top:55px" xs1>
            <div @click="$store.state.colorTheme = x" style="padding:20px;cursor:pointer;position:relative;z-index:20" :key="i" v-for="(x, i) in $store.state.themes" :class="{[x] : true}"></div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-dialog max-width="500" v-model="logInModal">
      <v-card>
        <v-card-title class="justify-center">
          <div class="display-1 bold">
            Logga in
          </div>
          <div style="position:absolute;top:10px;right:10px">
            <v-icon @click="logInModal = false" large class="bold pointer">close</v-icon>
          </div>
        </v-card-title>
        <v-card-text>
          <v-text-field
            color="white"
            box
            label="Din e-postadress"
            v-model="emailLogIn"
          ></v-text-field>
          <v-card-actions>
            <v-btn :loading="logginIn" @click="logIn" large :disabled="!logInBtn" class="success title" block>
              Logga in
              <v-icon class="ml-2">lock</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-app>
</template>

<script>
import mall1 from '@/components/mallar/mall1.vue'
import mall2 from '@/components/mallar/mall2.vue'
import mall3 from '@/components/mallar/mall3.vue'
import mall4 from '@/components/mallar/mall4.vue'
import mall5 from '@/components/mallar/mall5.vue'
import mall6 from '@/components/mallar/mall6.vue'
import mall7 from '@/components/mallar/mall7.vue'
import mall8 from '@/components/mallar/mall8.vue'
import mall9 from '@/components/mallar/mall9.vue'
import mall10 from '@/components/mallar/mall10.vue'
import mall11 from '@/components/mallar/mall11.vue'
import mall12 from '@/components/mallar/mall12.vue'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  components: {
    mall1,
    mall2,
    mall3,
    mall4,
    mall5,
    mall6,
    mall7,
    mall8,
    mall9,
    mall10,
    mall11,
    mall12
  },
  name: 'App',
  data () {
    return {
      logInModal: false,
      emailLogIn: '',
      logginIn: false
    }
  },
  computed: {
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    },
    logInBtn () {
      return this.emailLogIn.length > 3 && this.emailLogIn.includes('@')
    }
  },
  methods: {
    test () {
      // this.$store.state.step++
      // this.$store.commit('updateUserData')
      this.$store.commit('logOutUser')
      // console.log(this.$store.state.mallData)
    },
    logIn () {
      const global = this
      this.logginIn = true
      this.$store.state.mallData.email = this.emailLogIn
      this.$store.state.loggedInManually = true
      firebase.auth().signInAnonymously()
        .then(res => {
          global.logInModal = false
          global.logginIn = false
        })
    }
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Chewy);
.ex15 {
  letter-spacing: 3px!important;
  font-family: 'Chewy', cursive;
  font-weight: bold;
  font-style: italic;
  font-size: 30px;
}
.myHeading {
  font-size: 28px;
}
.container {
  max-width: 1264px!important;
}
.qfade-enter-active, .component-qfade-leave-active {
  transition: opacity 2.0s ease;
}
.qfade-enter, .component-qfade-leave-to {
  opacity: 0;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-btn {
  text-transform: none!important;
}
.choosed {
  background: linear-gradient(12deg, #75bd78, #306b33, #9ee2a0);
}
.beige {
  background: #bdaa7b;
}
.myBlue {
  background: #014982;
}
.beige--text {
  color: #bdaa7b!important;
}
.myBlue--text {
  color: #014982!important;
}
.mainBackground {
  background: #8797bb!important; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #8797bb, #334366)!important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #8797bb, #334366)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.mainBackgroundLight {
  background: #3f6aca!important; /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #3f6aca, #4279f1)!important; /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #3f6aca, #4279f1)!important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.title {
  line-height: 30px!important;
}
.display-1 {
  font-weight: bold;
}
.striped {
  position: relative;
}
.mall {
  cursor: pointer;
  position: relative;
}
.pointer {
  cursor: pointer!important;
}
.mall:before {
  content: '';
  height: 100%;
  width: 100%;
  background: #00000070;
  position: absolute;
  top:0;
  left: 0;
}
.bold {
  font-weight: bold!important;
}
.italic {
  font-style: italic!important;
}
.striped:before {
  position:absolute;
  bottom:3px;
  left:0;
  width:100%;
  height:4px;
  background-color:white;
  content:'';
  -webkit-transform:rotate(-1deg);
  -moz-transform:rotate(-1deg);
  -ms-transform:rotate(-1deg);
  -o-transform:rotate(-1deg);
  transform:rotate(-1deg)
}
.chooseCardBig {
  position:relative;
  height:430px;
  overflow:hidden
}
@media only screen and (max-width: 1200px) {
  .chooseCardBig {
    position:relative;
    height: 90%;
    max-height:730px;
    overflow:hidden
  }
}
</style>
