<template>
  <div>
    <v-layout class="v-card px-2 py-2 grey lighten-5" row wrap>
      <v-flex :class="{[$store.state.colorTheme] : true}" text-xs-center xs12 px-5>
        <div class="dragToLeft">
          <div class="display-2 py-5 bold white--text">
            {{ $store.state.mallData.name }}
          </div>
        </div>
      </v-flex>
      <v-flex py-3 px-1 xs8 class="fontTitle bold italic secondary--text text--lighten-1 pr-2">
        <div v-if="$store.state.mallData.sammanfattning.length > 0">
          <div>{{ $store.getters.whatLang[0] }}</div>
          <div class="body-1 pt-2">
            {{ $store.state.mallData.sammanfattning }}
          </div>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.work.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div>
            {{ $store.getters.whatLang[1] }}
          </div>
          <div :key="x.id" v-for="x in $store.state.mallData.work">
            <div class="py-3" v-if="x.corp.length > 0">
              <div class="body-2 bold">
                {{ x.corp }} - {{ x.roll }}
              </div>
              <div class="body-2">
                {{ x.city }}
              </div>
              <div class="body-2">
                {{ x.period }}
              </div>
              <ul class="body-1 pt-2">
                <span :key="y" v-for="(s, y) in x.description.split('.')">
                  <li v-if="y < (x.description.split('.').length - 1)">
                    {{ s }}.
                  </li>
                </span>
              </ul>
            </div>
          </div>
        </div>
      </v-flex>
      <v-flex py-3 px-3 xs4 class="white">
        <div class="body-1 secondary--text">
          {{ $store.state.mallData.email }}
        </div>
        <div class="body-1 secondary--text">
          {{ $store.state.mallData.phoneNr }}
        </div>
        <div class="body-1 secondary--text">
          {{ $store.state.mallData.city }}, {{ $store.state.mallData.country }}, {{ $store.state.mallData.zip }}
        </div>
        <div>
          <v-divider class="mt-3 grey lighten-2"></v-divider>
        </div>
        <div v-if="$store.state.mallData.skills.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          {{ $store.getters.whatLang[2] }}
          <ul class="body-1 pt-2">
            <li :key="i" v-for="(x, i) in $store.state.mallData.skills">
              {{ x }}
            </li>
          </ul>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.education.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-3">
            {{ $store.getters.whatLang[3] }}
          </div>
          <div :key="x.id" v-for="(x, i) in $store.state.mallData.education">
            <div :class="{'mb-2 py-1 px-1 body1' : true, 'grey lighten-4' : i % 2 === 0}" v-if="x.school.length > 0">
              <div class="body-1 bold">
                {{ x.school }}
              </div>
              <div class="body-1 bold">
                {{ x.subject }}
              </div>
              <div class="body-1">
                {{ x.period }}
              </div>
            </div>
          </div>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.utmarkelser.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-2">
            {{ $store.getters.whatLang[4] }}
          </div>
          <ul class="body-1">
            <li :key="i" v-for="(x, i) in $store.state.mallData.utmarkelser">
              {{ x }}
            </li>
          </ul>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.hobbier.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-2">
            {{ $store.getters.whatLang[6] }}
          </div>
          <ul class="body-1">
            <li :key="i" v-for="(x, i) in $store.state.mallData.hobbier">
              {{ x }}
            </li>
          </ul>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.languages.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-3">
            {{ $store.getters.whatLang[8] }}
          </div>
          <div :key="x.id" v-for="(x, i) in $store.state.mallData.languages" :class="{'grey lighten-4' : i % 2 === 0, 'white' : i % 2 !== 0, 'py-1 px-1' : true}">
            <div class="body-1 bold">{{ x.lang }}</div>
            <v-progress-linear :value="x.niva * 20" :color="progressColor(x.niva)"></v-progress-linear>
          </div>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.volontararbete.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-2">
            {{ $store.getters.whatLang[9] }}
          </div>
          <ul class="body-1">
            <li :key="i" v-for="(x, i) in $store.state.mallData.volontararbete">
              {{ x }}
            </li>
          </ul>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.referenser.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-3">
            {{ $store.getters.whatLang[5] }}
          </div>
          <div :key="x.id" v-for="(x, i) in $store.state.mallData.referenser" :class="{'grey lighten-4' : i % 2 === 0, 'white' : i % 2 !== 0, 'py-1 px-1' : true}">
            <div class="body-1 bold">{{ x.name }}</div>
            <div class="body-1 bold">{{ x.tel }}</div>
            <div class="body-1">{{ x.relation }}</div>
          </div>
          <div>
            <v-divider class="mt-3 grey lighten-2"></v-divider>
          </div>
        </div>
        <div v-if="$store.state.mallData.links.length > 0" class="mt-3 fontTitle bold italic secondary--text text--lighten-1">
          <div class="pb-2">
            {{ $store.getters.whatLang[7] }}
          </div>
          <div class="body-1" :key="i" v-for="(x, i) in $store.state.mallData.links">
            <a target="_blank" :href="x">{{ x }}</a>
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
  methods: {
    progressColor (c) {
      const colors = ['warning', 'primary', 'primary', 'success', 'success']
      return colors[(c - 1)]
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
