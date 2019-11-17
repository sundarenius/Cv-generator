<template>
  <div>
    <v-layout class="v-card grey lighten-5" pb-5 row wrap>
      <v-flex align-content-end :class="{[$store.state.colorTheme] : true}" text-xs-left xs12 pt-5 pb-1 px-5>
        <div class="display-2 bold white--text">
          {{ $store.state.mallData.name }}
        </div>
      </v-flex>
      <v-flex xs12 px-5 py-2 class="secondary--text">
        <span class="body-1">
          <span :class="{[colorTheme]: true}">
            <span class="bold">
              {{ $store.getters.whatLang[11] }}<span class="secondary--text">:</span>
            </span>
          </span>
          {{ $store.state.mallData.phoneNr }}
        </span>
        <span class="grey--text px-1">|</span>
        <span class="body-1">
          <span :class="{[colorTheme]: true}">
            <span class="bold">
              {{ $store.getters.whatLang[12] }}<span class="secondary--text">:</span>
            </span>
          </span>
          {{ $store.state.mallData.zip }}, {{ $store.state.mallData.city }}, {{ $store.state.mallData.country }}
        </span>
      <span class="grey--text px-1">|</span>
        <span class="body-1">
          <span :class="{[colorTheme]: true}">
            <span class="bold">
              {{ $store.getters.whatLang[13] }}<span class="secondary--text">:</span>
            </span>
          </span>
          {{ $store.state.mallData.email }}
        </span>
      </v-flex>
      <v-flex xs12 px-5 py-3 class="secondary--text">
        <div v-if="$store.state.mallData.sammanfattning.length > 0" class="pb-2">
          <div class="title bold">
            <span :class="{[colorTheme]: true}">
              {{ $store.getters.whatLang[0] }}
            </span>
          </div>
          <div class="body-1 py-2">
            {{ $store.state.mallData.sammanfattning }}
          </div>
        </div>
        <div v-if="$store.state.mallData.skills.length > 0" class="pb-2">
          <div class="title bold">
            <span :class="{[colorTheme]: true}">
              {{ $store.getters.whatLang[2] }}
            </span>
          </div>
          <div class="body-2 py-2">
            <div :key="i" v-for="(x, i) in $store.state.mallData.skills" style="padding: 2px 5px;border:1px solid lightgrey;margin:2px;display:inline-block">
              #{{ x }}
            </div>
          </div>
        </div>
      </v-flex>
      <div :class="{[$store.state.colorTheme]: true}">
        <div class="px-5 title bold">
         {{ $store.getters.whatLang[1] }}
        </div>
      </div>
      <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
      <v-flex xs12 class="secondary--text" px-5 py-3>
        <div class="mb-4" :key="x.id" v-for="x in $store.state.mallData.work">
          <div class="subheading bold secondary--text">
            {{ x.roll }}, {{ x.corp }}
          </div>
          <div class="body-2 pt-1 pb-2 secondary--text">
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
      </v-flex>

      <v-flex v-if="$store.state.mallData.education.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[3] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div class="pb-3" :key="x.id" v-for="x in $store.state.mallData.education">
                <div class="subheading bold secondary--text">
                  {{ x.subject }}
                </div>
                <div class="subheading secondary--text">
                  {{ x.school }}
                </div>
                <div class="body-2 pt-1 pb-2 secondary--text">
                  {{ x.period }}
                </div>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.languages.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[8] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div class="pb-3" :key="x.id" v-for="x in $store.state.mallData.languages">
                  <div style="margin-bottom:-10px" class="subheading bold">
                    {{ x.lang }}
                  </div>
                  <div style="position:relative;width:60%">
                    <v-progress-linear height="10px" :value="x.niva * 20" color="secondary"></v-progress-linear>
                    <div style="position:absolute;right:0;top:10px" class="secondary--text body-1">
                      {{ level(x.niva) }}
                    </div>
                  </div>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.hobbier.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[6] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div class="body-2 py-2">
                <span :key="i" v-for="(x, i) in $store.state.mallData.hobbier" style="padding: 2px 5px;border:1px solid lightgrey;margin:2px;display:inline-block">
                  #{{ x }}
                </span>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.utmarkelser.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[4] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div class="body-2 py-2">
                <span :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser" style="padding: 2px 5px;border:1px solid lightgrey;margin:2px;display:inline-block">
                  #{{ x }}
                </span>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.volontararbete.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[9] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div class="body-2 py-2">
                <span :key="i" v-for="(x, i) in $store.state.mallData.volontararbete" style="padding: 2px 5px;border:1px solid lightgrey;margin:2px;display:inline-block">
                  #{{ x }}
                </span>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.links.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[7] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <ul>
                <span class="mb-4" :key="i" v-for="(x, i) in $store.state.mallData.links">
                  <li class="body-2">
                    {{ x }}
                  </li>
                </span>
              </ul>
            </v-flex>
        </v-layout>
      </v-flex>

      <v-flex v-if="$store.state.mallData.referenser.length > 0" xs12>
        <v-layout row wrap>
          <div :class="{[$store.state.colorTheme]: true}">
              <div class="px-5 title bold">
              {{ $store.getters.whatLang[5] }}
              </div>
            </div>
            <v-flex style="padding:2px 2px" xs12 :class="{[$store.state.colorTheme]: true}"></v-flex>
            <v-flex xs12 class="secondary--text" px-5 py-3>
              <div style="width:50%" :key="x.id" v-for="(x, i) in $store.state.mallData.referenser" :class="{'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0, 'px-1 my-3 py-1 body-1' : true}">
                <div class="bold">
                  {{ x.name }}, {{ x.relation }}
                </div>
                  <div class="body-2">
                  {{ x.tel }}
                </div>
              </div>
            </v-flex>
        </v-layout>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    msg: 'hej'
  }),
  methods: {
    progressColor (c) {
      const colors = ['warning', 'primary', 'primary', 'success', 'success']
      return colors[(c - 1)]
    },
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
  },
  computed: {
    colorTheme () {
      return this.$store.state.colorTheme.split(' ')[0] + '--text'
    }
  }
}
</script>

<style>
.fontFace {
  font-family: Palatino Linotype!important;
  transform: scale(2)!important;
}
.fontTitle {
  font-family: Palatino Linotype!important;
  font-size: 18px;
  letter-spacing: 0.5px;
}
</style>
