<template>
  <div>
    <v-container>
      <v-layout justify-center py-5 row wrap>
        <v-flex text-xs-center py-5 xs12>
          <div class="display-1">
            Fyll i <span class="amber--text">utbildning</span>
          </div>
          <div class="body-1 pt-1">
            Du kan redigera i dina utbildningar senare
          </div>
          <v-btn v-if="0" @click="test">test</v-btn>
        </v-flex>

        <v-flex xs12 md10>
          <v-layout pb-4 justify-center row wrap>
            <v-flex text-xs-center xs12>
              <div class="subheading bold pt-2">
                <span v-show="$store.state.mallData.work.length > 0">
                  Utbildning {{ $store.state.mallData.education.length }}
                </span>
                <span v-show="$store.state.mallData.education.length === 0">
                  Utbildning 1
                </span>
                <v-icon class="ml-1">school</v-icon>
              </div>
            </v-flex>
            <v-flex px-4 xs12 md5>
              <v-text-field
                @change="updateSchool"
                color="white"
                label="Skola *"
                v-model="schoolObj.school"
              ></v-text-field>
            </v-flex>
            <v-flex px-4 xs12 md5>
              <v-text-field
                @change="updateSchool"
                color="white"
                label="Utbildning *"
                v-model="schoolObj.subject"
              ></v-text-field>
            </v-flex>
            <v-flex px-4 xs12 md10>
              <v-layout pt-2 pb-4 px-2 class="v-card" style="border:2px solid lightgrey;border-radius:5px" justify-center align-center row wrap>
                <v-flex text-xs-center xs12>
                  <div class="body-2">
                    Datum
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
          </v-layout>
          <v-flex mt-4 text-xs-center xs12>
          <v-btn :disabled="!addNewSchoolBtn" @click="addNewExpFunction" large :class="{'white secondary--text px-3' : addNewSchoolBtn, 'secondary secondary--text px-3' : !addNewSchoolBtn}" round flat>
            Lägg till ny utbildning
            <v-icon class="ml-1">add</v-icon>
          </v-btn>
          <v-btn @click="$store.state.step++" large class="success bold white--text px-3" round flat>
            NÄSTA
            <v-icon class="ml-1">arrow_right</v-icon>
          </v-btn>
        </v-flex>
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
    schoolIndex: 0,
    nuvarande: false,
    mall: false,
    schoolObj: {
      school: '',
      period: '',
      subject: '',
      id: new Date().getTime()
    },
    month1: '',
    year1: '',
    month2: '',
    year2: ''
  }),
  methods: {
    test () {
      console.log('test')
      console.log(this.schoolObj)
    },
    getPeriod () {
      let date1 = this.month1 + '/' + this.year1
      let date2
      if (!this.nuvarande) {
        date2 = this.month2 + '/' + this.year2
      } else {
        date2 = 'Nuvarande..'
      }
      this.schoolObj.period = date1 + ' - ' + date2
      this.updateSchool('period')
    },
    updateSchool (x) {
      this.$store.state.mallData.education.forEach(val => {
        if (val.schoolIndex === this.schoolIndex) {
          val = this.schoolObj
        }
      })
      if (x === 'period') {
        this.sortEducations()
      }
    },
    sortEducations () {
      console.log('sortEducations')
      let control = []
      let sorted = []
      let result = []
      let newResult = []
      this.$store.state.mallData.education.forEach(val => {
        if (val.period.split(' ')[2]) {
          sorted.push(val.period.split(' ')[2].substring(3))
        }
      })
      sorted.sort((a, b) => {
        return Number(b) - Number(a)
      })
      sorted.forEach(val => {
        this.$store.state.mallData.education.forEach(el => {
          if (el.period.length > 0) {
            if (val === el.period.split(' ')[2].substring(3)) {
              if (!control.includes(el.period + el.school + el.subject)) {
                result.push(el)
              }
              control.push(el.period + el.school + el.subject)
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
      this.$store.state.mallData.education = newResult
    },
    addNewExpFunction () {
      let arr = this.$store.state.randomArr
      this.schoolIndex++
      this.schoolObj = {
        school: '',
        period: '',
        subject: '',
        id: new Date().getTime() + arr[Math.floor(Math.random() * (arr.length - 1))]
      }
      this.month1 = ''
      this.year1 = ''
      this.month2 = ''
      this.year2 = ''
      this.$store.state.mallData.education.push(this.schoolObj)
      this.$store.state.mallData.education[this.$store.state.mallData.education.length - 1].schoolIndex = this.schoolIndex
    }
  },
  computed: {
    addNewSchoolBtn () {
      return this.schoolObj.school.length > 0 && this.schoolObj.subject.length > 0 && this.schoolObj.period.length > 0
    },
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    }
  },
  mounted () {
    this.$store.state.mallData.education.push(this.schoolObj)
    this.$store.state.mallData.education[this.schoolIndex].schoolIndex = this.schoolIndex
  }
}
</script>
