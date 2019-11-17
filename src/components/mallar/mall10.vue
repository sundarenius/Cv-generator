<template>
  <div>
    <v-layout class="v-card white secondary--text" row wrap>
      <v-flex class="white" py-5 xs4>
        <div class="py-1 pl-3 display-2 bold">
          <div :class="{[colorTheme] : true}">
            {{ $store.state.mallData.name.split(' ')[0] }}
          </div>
          <div :class="{[colorTheme] : true}">
            {{ $store.state.mallData.name.split(' ')[1] }}
            <span v-if="$store.state.mallData.name.split(' ').length > 2">
              {{ $store.state.mallData.name.split(' ')[2] }}
            </span>
            <span v-if="$store.state.mallData.name.split(' ').length > 3">
              {{ $store.state.mallData.name.split(' ')[3] }}
            </span>
            <span v-if="$store.state.mallData.name.split(' ').length > 4">
              {{ $store.state.mallData.name.split(' ')[4] }}
            </span>
            <span v-if="$store.state.mallData.name.split(' ').length > 5">
              {{ $store.state.mallData.name.split(' ')[5] }}
            </span>
          </div>
        </div>
      </v-flex>
      <v-flex style="position:relative" px-3 py-5 xs8>
      </v-flex>
      <v-layout row wrap>
        <v-flex style="border-top:2px solid lightgrey;border-right:2px solid lightgrey" pl-3 pt-4 xs3>
          <div class="title bold pb-4 pr-5">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[10] }}
            </div>
            <div style="width:100px;height:3px;background:#999"></div>
          </div>
          <div class="body-2">
            {{ $store.getters.whatLang[12] }}
          </div>
          <div class="body-1">
            {{ $store.state.mallData.zip }}, {{ $store.state.mallData.city }}, {{ $store.state.mallData.country }}
          </div>
          <div class="body-2 pt-3">
            {{ $store.getters.whatLang[11] }}
          </div>
          <div class="body-1">
            {{ $store.state.mallData.phoneNr }}
          </div>
          <div class="body-2 pt-3">
            {{ $store.getters.whatLang[13] }}
          </div>
          <div class="body-1">
            {{ $store.state.mallData.email }}
          </div>
          <div v-if="$store.state.mallData.skills.length > 0" class="pt-5">
            <div class="title bold pb-3 pr-5">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[2] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <ul>
              <span :key="i" v-for="(x, i) in $store.state.mallData.skills">
                <li>
                  {{ x }}
                </li>
              </span>
            </ul>
          </div>
          <div v-if="$store.state.mallData.languages.length > 0">
            <div class="title bold pt-5 pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[8] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <div class="mb-4" :key="x.id" v-for="x in $store.state.mallData.languages">
                <div style="margin-bottom:-10px" class="subheading bold">
                  {{ x.lang }}
                </div>
                <div style="position:relative;width:90%">
                  <v-progress-linear height="10px" :value="x.niva * 20" color="secondary"></v-progress-linear>
                  <div style="position:absolute;right:0;top:10px" class="secondary--text body-1">
                    {{ level(x.niva) }}
                  </div>
                </div>
            </div>
          </div>
          <div v-if="$store.state.mallData.hobbier.length > 0">
            <div class="title bold pt-5 pb-3 pr-5">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[6] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.hobbier">
                <li class="body-2">
                  {{ x }}
                </li>
              </span>
            </ul>
          </div>
        </v-flex>
        <v-flex style="border-top:2px solid lightgrey" px-5 pt-4 xs9>
          <div v-if="$store.state.mallData.sammanfattning.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[0] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <div>
              {{ $store.state.mallData.sammanfattning }}
            </div>
            <div class="mt-4 mb-4">
              <div style="width:100%;height:2px;background:lightgrey"></div>
            </div>
          </div>
          <div class="title bold pb-3">
            <div :class="{[colorTheme] : true}">
              {{ $store.getters.whatLang[1] }}
            </div>
            <div style="width:100px;height:3px;background:#999"></div>
          </div>
          <div class="mb-4" :key="x.id" v-for="x in $store.state.mallData.work">
            <div class="subheading bold">
              {{ x.roll }}, {{ x.corp }}
            </div>
            <div class="body-2 pt-1 pb-2">
              {{ x.period }}
            </div>
            <div>
              <ul>
                <span :key="index" v-for="(d, index) in x.description.split('.')">
                  <li v-if="index < (x.description.split('.').length - 1)">
                    {{ d }}
                  </li>
                </span>
              </ul>
            </div>
          </div>
          <div class="mt-4 mb-4">
            <div style="width:100%;height:2px;background:lightgrey"></div>
          </div>
          <div v-if="$store.state.mallData.education.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[3] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <div class="mb-4" :key="x.id" v-for="x in $store.state.mallData.education">
              <div class="subheading bold">
                {{ x.subject }}
              </div>
              <div class="subheading">
                {{ x.school }}
              </div>
              <div class="body-2 pt-1 pb-2">
                {{ x.period }}
              </div>
            </div>
            <div class="mt-4 mb-4">
              <div style="width:100%;height:2px;background:lightgrey"></div>
            </div>
          </div>
          <div v-if="$store.state.mallData.utmarkelser.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[4] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser">
                <li class="body-2">
                  {{ x }}
                </li>
              </span>
            </ul>
            <div class="mt-4 mb-4">
              <div style="width:100%;height:2px;background:lightgrey"></div>
            </div>
          </div>
          <div v-if="$store.state.mallData.volontararbete.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[9] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.volontararbete">
                <li class="body-2">
                  {{ x }}
                </li>
              </span>
            </ul>
            <div class="mt-4 mb-4">
              <div style="width:100%;height:2px;background:lightgrey"></div>
            </div>
          </div>
          <div v-if="$store.state.mallData.links.length > 0">
            <div class="title bold pb-3">
              <div :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[7] }}
              </div>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <ul>
              <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.links">
                <li class="body-2">
                  <a target="_blank" :href="x">{{ x }}</a>
                </li>
              </span>
            </ul>
            <div class="mt-4 mb-4">
              <div style="width:100%;height:2px;background:lightgrey"></div>
            </div>
          </div>
          <div v-if="$store.state.mallData.referenser.length > 0">
            <div class="title bold">
              <span :class="{[colorTheme] : true}">
                {{ $store.getters.whatLang[5] }}
              </span>
              <div style="width:100px;height:3px;background:#999"></div>
            </div>
            <div style="width:50%" :key="x.id" v-for="(x, i) in $store.state.mallData.referenser" :class="{'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0, 'px-1 my-3 py-1 body-1' : true}">
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
