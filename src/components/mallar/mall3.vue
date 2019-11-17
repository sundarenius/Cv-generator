<template>
  <div>
    <v-layout class="v-card white" row wrap>
      <v-flex :class="{[$store.state.colorTheme] : true}" xs12>
        <v-layout py-4 align-center row wrap>
          <v-flex class="white--text" text-xs-left px-4 xs10>
            <div class="display-2 bold">
              {{ $store.state.mallData.name }}
            </div>
            <div class="subheading bold pt-2">
              {{ $store.state.mallData.zip }}, {{ $store.state.mallData.city }}, {{ $store.state.mallData.country }}
            </div>
            <div class="subheading bold">
              {{ $store.state.mallData.email }}
            </div>
            <div class="subheading bold">
              {{ $store.state.mallData.phoneNr }}
            </div>
          </v-flex>
          <v-flex xs2></v-flex>
          <v-flex text-xs-left px-4 py-2 xs8>
            <v-chip class="secondary--text" style="border-radius:0px!important;box-shadow:0 0 0 !important" :key="i" v-for="(x, i) in $store.state.mallData.skills" small color="white" text-color="white">
              <span class="bold">#</span>{{ x }}
            </v-chip>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex class="secondary--text" pl-4 pr-5 py-4 xs8>
        <div class="title bold">
          <div :class="{[colorTheme] : true}">
            {{ $store.getters.whatLang[1] }}
          </div>
        </div>
        <div class="mt-2 mb-3">
          <hr :class="{[$store.state.colorTheme] : true}" />
        </div>
        <div :key="x.id" v-for="x in $store.state.mallData.work">
          <div v-if="x.corp.length > 0" class="my-3">
            <div class="body-2 bold grey--text text--darken-1">
              {{ x.corp }}
            </div>
            <div class="subheading bold">
              {{ x.roll }}
            </div>
            <div class="body-1 grey--text bold">
              {{ x.period }}
            </div>
            <div class="body-1">
              {{ x.description }}
            </div>
            <div class="mt-2 my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
        </div>
        <div v-if="$store.state.mallData.education.length > 0">
          <div class="title bold mt-4">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[3] }}
            </div>
            </div>
            <div class="mt-2 mb-3">
              <hr :class="{[$store.state.colorTheme] : true}" />
            </div>
            <div :key="x.id" v-for="x in $store.state.mallData.education">
              <div class="my-3" v-if="x.school.length > 0">
                <div class="body-2 bold grey--text text--darken-1">
                  {{ x.school }}
                </div>
                <div class="subheading bold">
                  {{ x.subject }}
                </div>
                <div class="body-1 grey--text bold">
                  {{ x.period }}
                </div>
                <div class="mt-2 my-3">
                  <v-divider class="grey lighten-2"></v-divider>
                </div>
              </div>
            </div>
          </div>
      </v-flex>

       <v-flex class="secondary--text" px-4 py-4 xs4>
         <div v-if="$store.state.mallData.sammanfattning.length > 0">
          <div class="title bold">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[0] }}
            </div>
          </div>
          <div class="mt-2">
            <hr :class="{[$store.state.colorTheme] : true}" />
          </div>
          <div class="body-1 secondary--text mt-3">
            {{ $store.state.mallData.sammanfattning }}
          </div>
          <div class="mt-2 my-3">
            <v-divider class="grey lighten-2"></v-divider>
          </div>
        </div>
          <div v-if="$store.state.mallData.skills.length > 0">
            <div class="title bold mt-3 mb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[2] }}
              </div>
            </div>
            <ul>
              <span :key="i" v-for="(x, i) in $store.state.mallData.skills">
                <li class="secondary--text">
                  {{ x }}
                </li>
              </span>
            </ul>
            <div class="mt-2 my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
           <div v-if="$store.state.mallData.languages.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[8] }}
              </div>
            </div>
            <div class="pb-3" :key="x.id" v-for="x in $store.state.mallData.languages">
                <div style="margin-bottom:-10px" class="subheading bold">
                  {{ x.lang }}
                </div>
                <div style="position:relative;width:100%">
                  <v-progress-linear height="10px" :value="x.niva * 20" color="secondary"></v-progress-linear>
                  <div style="position:absolute;right:0;top:10px" class="secondary--text body-1">
                    {{ level(x.niva) }}
                  </div>
                </div>
            </div>
            <div class="mt-2 my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
          <div v-if="$store.state.mallData.hobbier.length > 0">
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
            <div class="my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
          <div v-if="$store.state.mallData.utmarkelser.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[4] }}
              </div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser">
                <li class="body-2">
                  {{ x }}
                </li>
              </span>
            </ul>
            <div class="my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
          <div v-if="$store.state.mallData.volontararbete.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[9] }}
              </div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.volontararbete">
                <li class="body-2">
                  {{ x }}
                </li>
              </span>
            </ul>
            <div class="my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
          <div v-if="$store.state.mallData.links.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[7] }}
              </div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.links">
                <li class="body-2">
                  <a target="_blank" :href="x">{{ x }}</a>
                </li>
              </span>
            </ul>
            <div class="my-3">
              <v-divider class="grey lighten-2"></v-divider>
            </div>
          </div>
          <div v-if="$store.state.mallData.referenser.length > 0">
            <div class="title bold">
              <span :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[5] }}
              </span>
            </div>
            <div style="width:100%" :key="x.id" v-for="(x, i) in $store.state.mallData.referenser" :class="{'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0, 'px-1 my-3 py-1 body-1' : true}">
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
