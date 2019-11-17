<template>
  <div>
    <v-layout class="v-card white" row wrap>
      <v-flex :class="{[$store.state.colorTheme] : true}" text-xs-center xs12 px-5>
        <div class="dragToLeft">
          <v-layout justify-center row>
            <v-flex pt-4 xs3>
              <v-divider class="white white--text"></v-divider>
            </v-flex>
          </v-layout>
          <div class="display-2 py-4 bold white--text">
            {{ $store.state.mallData.name }}
          </div>
          <v-layout class="white--text" pb-2 justify-center row>
            <v-flex text-xs-right>
            {{ $store.state.mallData.zip }}, {{ $store.state.mallData.city }}, {{ $store.state.mallData.country }}
            </v-flex>
            <v-flex px-4 text-xs-center>
              {{ $store.state.mallData.phoneNr }}
            </v-flex>
            <v-flex text-xs-left>
              {{ $store.state.mallData.email }}
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex xs12 px-5 pt-3>
        <v-layout py-2 row justify-start>
          <v-flex xs3>
            <v-divider class="grey ligthen-4"></v-divider>
          </v-flex>
        </v-layout>
        <div :class="{'title bold' : true, [colorTheme] : true}">
          {{ $store.getters.whatLang[0] }}
        </div>
        <div class="py-2 secondary--text body-1 pr-5">
          {{ $store.state.mallData.sammanfattning }}
        </div>
      </v-flex>
      <v-flex xs12 px-5>
        <v-layout py-2 row justify-start>
          <v-flex xs3>
            <v-divider class="grey ligthen-4"></v-divider>
          </v-flex>
        </v-layout>
        <div :class="{'title bold pb-2' : true, [colorTheme] : true}">
          {{ $store.getters.whatLang[2] }}
        </div>
        <v-layout class="secondary--text body-1" row>
          <v-flex xs6>
            <ul>
              <span :key="i" v-for="(x, i) in $store.state.mallData.skills">
                <li v-if="i <= 3">{{ x }}</li>
              </span>
            </ul>
          </v-flex>
          <v-flex xs6>
            <ul>
              <span :key="i" v-for="(x, i) in $store.state.mallData.skills">
                <li v-if="i > 3">{{ x }}</li>
              </span>
            </ul>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 px-5 pt-2>
        <v-layout py-2 row justify-start>
          <v-flex xs3>
            <v-divider class="grey ligthen-4"></v-divider>
          </v-flex>
        </v-layout>
        <div :class="{'title bold' : true, [colorTheme] : true}">
          {{ $store.getters.whatLang[1] }}
        </div>
        <div :key="x.id" v-for="x in $store.state.mallData.work">
          <div v-if="x.corp.length > 0" class="py-2 secondary--text body-1">
            <div class="subheading bold">
              {{ x.roll }} - <span class="grey--text">{{ x.period }}</span>
            </div>
            <div style="margin-top:0px" class="body-1 bold">
              {{ x.corp }} -
                <span class="grey--text text--darken-2">
                  {{ x.city }}
              </span>
            </div>
            <div class="pt-2">
              <ul>
                <span :key="z" v-for="(d, z) in x.description.split('.')">
                  <li v-if="z < (x.description.split('.').length - 1)">{{ d }}.</li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 px-5 py-2>
        <v-layout pb-2 row justify-start>
          <v-flex xs3>
            <v-divider class="grey ligthen-4"></v-divider>
          </v-flex>
        </v-layout>
        <div :class="{'title bold' : true, [colorTheme] : true}">
          {{ $store.getters.whatLang[3] }}
        </div>
        <div :key="x.id" v-for="x in $store.state.mallData.education">
          <div class="py-2 secondary--text body-1 pr-5" v-if="x.school.length > 0">
            <div class="subheading bold">
              {{ x.school }}
            </div>
            <div class="subheading bold">
              {{ x.subject }}
            </div>
            <div class="subheading">
              {{ x.period }}
            </div>
          </div>
        </div>
        <div v-if="$store.state.mallData.languages.length > 0">
            <v-layout py-3 row justify-start>
              <v-flex xs3>
                <v-divider class="grey ligthen-4"></v-divider>
              </v-flex>
            </v-layout>
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[8] }}
              </div>
            </div>
            <div class="pb-1" :key="x.id" v-for="x in $store.state.mallData.languages">
                <div style="margin-bottom:-10px" class="subheading bold secondary--text">
                  {{ x.lang }}
                </div>
                <div style="position:relative;width:60%">
                  <v-progress-linear height="10px" :value="x.niva * 20" color="secondary"></v-progress-linear>
                  <div style="position:absolute;right:0;top:10px" class="secondary--text body-1">
                    {{ level(x.niva) }}
                  </div>
                </div>
            </div>
          </div>
        <div class="pb-3 secondary--text" v-if="$store.state.mallData.hobbier.length > 0">
          <v-layout class="title bold pt-3 pb-3" row justify-start>
            <v-flex xs3>
              <v-divider class="grey ligthen-4"></v-divider>
            </v-flex>
          </v-layout>
          <div class="title bold pb-3">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[6] }}
            </div>
          </div>
          <ul>
            <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.hobbier">
              <li class="body-2">
                {{ x }}
              </li>
            </span>
          </ul>
        </div>
        <div class="pb-3" v-if="$store.state.mallData.utmarkelser.length > 0">
          <v-layout class="title bold pt-3 pb-3" row justify-start>
            <v-flex xs3>
              <v-divider class="grey ligthen-4"></v-divider>
            </v-flex>
          </v-layout>
          <div class="title bold pb-3">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[4] }}
            </div>
          </div>
          <ul>
            <span class="mb-4 secondary--text" :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser">
              <li class="body-2">
                {{ x }}
              </li>
            </span>
          </ul>
        </div>
        <div class="pb-3" v-if="$store.state.mallData.volontararbete.length > 0">
          <v-layout class="title bold pt-3 pb-3" row justify-start>
            <v-flex xs3>
              <v-divider class="grey ligthen-4"></v-divider>
            </v-flex>
          </v-layout>
          <div class="title bold pb-3">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[9] }}
            </div>
          </div>
          <ul>
            <span class="mb-4 secondary--text" :key="i" v-for="(x, i) in $store.state.mallData.volontararbete">
              <li class="body-2">
                {{ x }}
              </li>
            </span>
          </ul>
        </div>
        <div class="pb-3" v-if="$store.state.mallData.links.length > 0">
          <v-layout class="title bold pt-3 pb-3" row justify-start>
            <v-flex xs3>
              <v-divider class="grey ligthen-4"></v-divider>
            </v-flex>
          </v-layout>
          <div class="title bold pb-3">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[7] }}
            </div>
          </div>
          <ul>
            <span class="mb-4 secondary--text" :key="i" v-for="(x, i) in $store.state.mallData.links">
              <li class="body-2">
                <a target="_blank" :href="x">{{ x }}</a>
              </li>
            </span>
          </ul>
        </div>
        <div v-if="$store.state.mallData.referenser.length > 0">
          <v-layout class="title bold pt-3 pb-3" row justify-start>
            <v-flex xs3>
              <v-divider class="grey ligthen-4"></v-divider>
            </v-flex>
          </v-layout>
          <div class="title bold">
            <span :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[5] }}
            </span>
          </div>
          <div style="width:50%" :key="x.id" v-for="(x, i) in $store.state.mallData.referenser" :class="{'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0, 'px-1 my-3 py-1 body-1 secondary--text' : true}">
            <div class="bold">
              {{ x.name }}
            </div>
              <div class="body-2">
              {{ x.tel }}
            </div>
            <div>
              {{ x.relation }}
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'hej'
  }),
  computed: {
    colorTheme () {
      return this.$store.state.colorTheme.split(' ')[0] + '--text'
    }
  },
  methods: {
    level (x) {
      let levels
      if (this.$store.state.choosedLang === 0) {
        levels = ['Låg', 'Medel', 'Bra', 'Mycket bra', 'Strålande']
      } else if (this.$store.state.choosedLang === 1) {
        levels = ['Low', 'Average', 'Good', 'Very good', 'Excellent']
      }
      if (x === 1) {
        return levels[0]
      } else if (x === 2) {
        return levels[1]
      } else if (x === 3) {
        return levels[2]
      } else if (x === 4) {
        return levels[3]
      } else if (x === 5) {
        return levels[4]
      } else {
        return ''
      }
    }
  }
}
</script>
