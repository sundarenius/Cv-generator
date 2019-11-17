<template>
  <div>
    <v-layout class="v-card white" row wrap>
      <v-flex class="secondary--text" xs4>
        <div class="display-1 px-3 py-3 bold">
          {{ $store.state.mallData.name }}
        </div>
        <div :class="{[headingClass] : true}">
          {{ $store.getters.whatLang[10] }}
          <hr class="secondary--text">
        </div>
        <div class="body-1 px-3 py-2">
          <div class="bold">
              {{ $store.getters.whatLang[12] }}
          </div>
          <div>
            {{ $store.state.mallData.zip }}
            {{ $store.state.mallData.city }},
            {{ $store.state.mallData.country }}
          </div>
          <div class="pt-2">
            <div class="bold">
              {{ $store.getters.whatLang[11] }}
            </div>
            <div>
              {{ $store.state.mallData.phoneNr }}
            </div>
          </div>
          <div class="pt-2 pb-1">
            <div class="bold">
              {{ $store.getters.whatLang[13] }}
            </div>
            <div>
              {{ $store.state.mallData.email }}
            </div>
          </div>
        </div>
        <div v-if="$store.state.mallData.skills.length > 0">
          <div :class="{[headingClass] : true}">
            {{ $store.getters.whatLang[2] }}
            <hr class="secondary--text">
          </div>
          <div class="body-1 px-3 py-2">
            <ul>
              <li class="pb-1" :key="i" v-for="(x, i) in $store.state.mallData.skills">
                {{ x }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="$store.state.mallData.languages.length > 0">
          <div :class="{[headingClass] : true}">
            {{ $store.getters.whatLang[8] }}
            <hr class="secondary--text">
          </div>
          <div class="pb-5 pt-2">
            <div :key="x.id" v-for="x in $store.state.mallData.languages" class="py-1 px-3">
              <div style="margin-bottom:-10px" class="subheading bold">
                {{ x.lang }}
              </div>
              <div style="position:relative">
                <v-progress-linear height="10px" :value="x.niva * 20" color="secondary"></v-progress-linear>
                <div style="position:absolute;right:0;top:13px" class="secondary--text">
                  {{ level(x.niva) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex class="px-3 pt-3 pb-5 grey lighten-5 secondary--text text--darken-4" xs8>
        <div v-if="$store.state.mallData.sammanfattning.length > 0" class="secondary--text body-1 pt-2 pl-5">
          <div class="pl-5">
            {{ $store.state.mallData.sammanfattning }}
          </div>
        </div>
        <div class="py-2 my-2">
            <div class="title bold py-1">
              <div>
                {{ $store.getters.whatLang[1] }}
              </div>
            </div>
          <hr class="secondary--text">
        </div>
        <div class="pb-5" :key="x.id" v-for="x in $store.state.mallData.work">
          <v-layout class="secondary--text" row>
            <v-flex xs3>
              <div class="body-1 bold">
                <div>
                  {{ x.period.split('-')[0] }} -
                </div>
                <div>
                  {{ x.period.split('-')[1] }}
                </div>
              </div>
            </v-flex>
            <v-flex xs9>
              <div class="subheading bold">
                {{ x.roll }}
              </div>
              <div class="body-1 pb-1 bold secondary--text text--lighten-1" style="font-style:italic">
                {{ x.corp }}
              </div>
              <ul :key="index" v-for="(d, index) in x.description.split('.')">
                <span v-if="index < (x.description.split('.').length - 1)">
                  <li>{{ d }}.</li>
                </span>
              </ul>
            </v-flex>
          </v-layout>
        </div>
        <div v-if="$store.state.mallData.education.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[3] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <div class="pb-4" :key="x.id" v-for="x in $store.state.mallData.education">
            <v-layout class="secondary--text" row>
              <v-flex xs3>
                <div class="body-1 bold">
                  <div>
                    {{ x.period.split('-')[0] }} -
                  </div>
                  <div>
                    {{ x.period.split('-')[1] }}
                  </div>
                </div>
              </v-flex>
              <v-flex xs9>
                <div class="subheading bold">
                  {{ x.subject }}
                </div>
                <div class="body-2 pb-1 bold secondary--text text--lighten-1" style="font-style:italic">
                  {{ x.school }}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
        <div v-if="$store.state.mallData.utmarkelser.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[4] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <div>
            <ul>
              <li class="secondary--text bold subheading" :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser">
                {{ x }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="$store.state.mallData.hobbier.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[6] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <div>
            <ul>
              <li class="secondary--text bold subheading" :key="i" v-for="(x, i) in $store.state.mallData.hobbier">
                {{ x }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="$store.state.mallData.volontararbete.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[9] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <div>
            <ul>
              <li class="secondary--text bold subheading" :key="i" v-for="(x, i) in $store.state.mallData.volontararbete">
                {{ x }}
              </li>
            </ul>
          </div>
        </div>
        <div class="pb-3" v-if="$store.state.mallData.links.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[7] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <ul>
            <span class="mb-2 secondary--text" :key="i" v-for="(x, i) in $store.state.mallData.links">
              <li class="body-2">
                <a target="_blank" :href="x">{{ x }}</a>
              </li>
            </span>
          </ul>
        </div>
        <div v-if="$store.state.mallData.referenser.length > 0">
          <div class="py-2 my-2">
              <div class="title bold py-1">
                <div>
                  {{ $store.getters.whatLang[5] }}
                </div>
              </div>
            <hr class="secondary--text">
          </div>
          <div :class="{'secondary--text bold subheading px-2 py-1' : true, 'grey lighten-2' : i % 2 === 0, 'white' : i % 2 !== 0}" :key="x.id" v-for="(x, i) in $store.state.mallData.referenser">
            <div>
              {{ x.name }}
            </div>
            <div class="body-1 bold">
              {{ x.tel }}
            </div>
            <div class="body-1 bold">
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
    msg: true
  }),
  computed: {
    headingClass () {
      return 'subheading bold px-3 py-1 darken-3 borderTopAndBottom'
    },
    darkenClass () {
      return 'darken-3'
    },
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

<style>
.borderTopAndBottom {
  border-top: 1px solid #fff!important;
  border-bottom: 1px solid #fff!important;
}
</style>
