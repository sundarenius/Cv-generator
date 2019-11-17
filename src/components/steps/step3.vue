<template>
  <div>
    <v-container>
      <v-layout justify-center py-5 row wrap>
        <v-flex text-xs-center pt-4 pb-5 xs12>
          <v-btn v-if="0" @click="test">test</v-btn>
          <div class="display-1">
            Fyll i <span class="amber--text">arbetslivserfarenhet</span>
          </div>
          <div class="body-1 pt-1">
            Du kan redigera dina erfarenheter senare (Dina erfarenheter sorteras automatiskt utifrån datum)
          </div>
        </v-flex>
        <v-flex xs12 md10>
          <v-layout py-1 justify-center row wrap>
            <v-flex text-xs-center xs12>
              <div class="subheading bold">
                <span v-show="$store.state.mallData.work.length > 0">
                  Arbetslivserfarenhet {{ $store.state.mallData.work.length }}
                </span>
                <span v-show="$store.state.mallData.work.length === 0">
                  Arbetslivserfarenhet 1
                </span>
                <v-icon class="ml-1">work</v-icon>
              </div>
            </v-flex>
            <v-flex px-4 xs12 md5>
              <v-text-field
                color="white"
                label="Företag"
                v-model="workExp.corp"
                @change="addExp"
              ></v-text-field>
            </v-flex>
            <v-flex px-4 xs12 md5>
              <v-text-field
                color="white"
                label="Roll / Titel"
                v-model="workExp.roll"
                @change="addExp"
              ></v-text-field>
            </v-flex>
            <v-flex px-4 xs12 md10>
              <v-text-field
                color="white"
                label="Stad"
                v-model="workExp.city"
                @change="addExp"
              ></v-text-field>
            </v-flex>
            <v-flex px-4 xs12 md10>
              <v-layout class="v-card" pt-2 pb-4 px-2 style="border:2px solid lightgrey;border-radius:5px" justify-center align-center row wrap>
                <v-flex text-xs-center xs12>
                  <div class="body-2">
                    Datum du jobbade här
                  </div>
                </v-flex>
                <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                  <v-autocomplete
                    color="white"
                    label="Månad"
                    :items="$store.getters.months"
                    v-model="month1"
                    @change="getPeriod"
                  ></v-autocomplete>
                </v-flex>
                <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md3>
                  <v-autocomplete
                    color="white"
                    label="År"
                    :items="$store.getters.years"
                    v-model="year1"
                    @change="getPeriod"
                  ></v-autocomplete>
                </v-flex>
                <v-flex text-xs-center xs12 md1>
                  <span class="bold">-</span>
                </v-flex>
                <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                  <v-autocomplete
                    color="white"
                    label="Månad"
                    :items="$store.getters.months"
                    v-model="month2"
                    :disabled="nuvarande"
                    @change="getPeriod"
                  ></v-autocomplete>
                </v-flex>
                <v-flex style="position:relative" :pl-2="$vuetify.breakpoint.mdAndUp" md3>
                  <v-autocomplete
                    color="white"
                    label="År"
                    :items="$store.getters.years"
                    v-model="year2"
                    :disabled="nuvarande"
                    @change="getPeriod"
                  ></v-autocomplete>
                  <div style="position:absolute;bottom:-45px;left:7px" class="bold">
                    <v-checkbox
                      color="white"
                      @change="getPeriod"
                      class="bold"
                      label="Nuvarande"
                      v-model="nuvarande"
                    ></v-checkbox>
                  </div>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex px-4 xs12 md10>
              <v-textarea
                @change="addExp"
                color="white"
                name="input-7-1"
                label="Arbetsbeskrivning"
                hint="Skriv två till tre meningar om din tjänst."
                v-model="workExp.description"
              ></v-textarea>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex mt-4 text-xs-center xs12>
          <v-btn :disabled="!addNewExpBtn" @click="addNewExpFunction" large :class="{'white secondary--text px-3' : addNewExpBtn, 'secondary secondary--text px-3' : !addNewExpBtn}" round flat>
            Lägg till ny erfarenhet
            <v-icon class="ml-1">add</v-icon>
          </v-btn>
          <v-btn @click="$store.state.step++" large class="success bold white--text px-3" round flat>
            NÄSTA
            <v-icon class="ml-1">arrow_right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

    <cvSnapCorner />

  </div>
</template>

<script>
import cvSnapCorner from '@/components/reusable/cvSnapCorner.vue'

export default {
  components: {
    cvSnapCorner
  },
  data: () => ({
    expIndex: 0,
    mall: false,
    experiences: [],
    timeWorked: '',
    workExp: {
      corp: '',
      city: '',
      roll: '',
      period: '',
      description: '',
      id: new Date().getTime()
    },
    month1: '',
    year1: '',
    month2: '',
    year2: '',
    nuvarande: false
  }),
  methods: {
    test () {
      console.log(this.$store.state.mallData)
    },
    addNewExpFunction () {
      let arr = this.$store.state.randomArr
      this.expIndex++
      this.workExp = {
        corp: '',
        city: '',
        roll: '',
        period: '',
        description: '',
        id: new Date().getTime() + arr[Math.floor(Math.random() * (arr.length - 1))]
      }
      this.month1 = ''
      this.year1 = ''
      this.month2 = ''
      this.year2 = ''
      this.nuvarande = false
      this.$store.state.mallData.work.push(this.workExp)
      this.$store.state.mallData.work[this.$store.state.mallData.work.length - 1].expIndex = this.expIndex
    },
    addExp (x) {
      // Fixa punkt i slutet av description
      if (this.workExp.description.length > 0) {
        let arr = this.workExp.description.split('')
        if (this.workExp.description.split('')[this.workExp.description.split('').length - 1] !== '.') {
          arr.push('.')
        }
        this.workExp.description = arr.join('')
      }
      // Uppdatera rätt erfarenhet i VUEX
      this.$store.state.mallData.work.forEach(val => {
        if (val.expIndex === this.expIndex) {
          val = this.workExp
        }
      })
      if (x === 'period') {
        this.sortWork()
      }
    },
    sortWork () {
      let control = []
      let sorted = []
      let result = []
      let newResult = []
      this.$store.state.mallData.work.forEach(val => {
        if (val.period.split(' ')[2]) {
          sorted.push(val.period.split(' ')[2].substring(3))
        }
      })
      sorted.sort((a, b) => {
        return Number(b) - Number(a)
      })
      sorted.forEach(val => {
        this.$store.state.mallData.work.forEach(el => {
          if (el.period.length > 0) {
            if (val === el.period.split(' ')[2].substring(3)) {
              if (!control.includes(el.period + el.roll + el.corp)) {
                result.push(el)
              }
              control.push(el.period + el.roll + el.corp)
            }
          }
        })
      })
      result.forEach(val => {
        if (val.period.includes('Nuvarande')) {
          newResult.unshift(val)
        } else {
          newResult.push(val)
        }
      })
      this.$store.state.mallData.work = newResult
    },
    getPeriod () {
      let date1 = this.month1 + '/' + this.year1
      let date2
      if (!this.nuvarande) {
        date2 = this.month2 + '/' + this.year2
      } else {
        date2 = 'Nuvarande..'
      }
      this.workExp.period = date1 + ' - ' + date2
      this.addExp('period')
    }
  },
  computed: {
    addNewExpBtn () {
      return this.workExp.corp.length > 0 && this.workExp.city.length > 0 && this.workExp.roll.length > 0 && this.workExp.period.length > 0
    },
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    }
  },
  mounted () {
    console.log('mounted')
    if (this.$store.state.mallData.work.length === 0) {
      this.$store.state.mallData.work.push(this.workExp)
      this.$store.state.mallData.work[0].expIndex = this.expIndex
    }
  }
}
</script>
