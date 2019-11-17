<template>
  <div style="height:90vh">
    <v-container fill-height>
      <v-layout align-center justify-center py-5 row wrap>
        <v-flex text-xs-center py-5 xs12>
          <div class="display-1">
            Bygg ett <span class="striped amber--text">vinnande</span> CV!
          </div>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.name"
            label="För och efternamn *"
            :hint="nameAlert"
            required
          ></v-text-field>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.email"
            label="E-mail *"
            required
          ></v-text-field>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.phoneNr"
            label="Telefon *"
            required
          ></v-text-field>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.zip"
            label="Postnummer *"
            required
          ></v-text-field>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.city"
            label="Ort *"
            required
          ></v-text-field>
        </v-flex>
        <v-flex px-4 xs12 md5>
          <v-text-field
            color="white"
            v-model="$store.state.mallData.country"
            label="Land *"
            required
          ></v-text-field>
        </v-flex>
        <v-flex mt-4 text-xs-center xs12>
          <v-btn :disabled="!nextBtn" @click="nextStep" large flat round class="px-5 success lighten-1 title">
            Nästa
            <v-icon large>arrow_right</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data: () => ({
    msg: 'hej'
  }),
  methods: {
    nextStep () {
      firebase.auth().signInAnonymously()
      let newName = []
      this.$store.state.mallData.name.split(' ').forEach(val => {
        newName.push(val[0].toUpperCase() + val.substring(1))
      })
      this.$store.state.mallData.name = newName.join(' ')
      this.$store.state.step = 3
    }
  },
  computed: {
    nameAlert () {
      if (this.$store.state.mallData.name[0] === ' ') {
        return 'OBS! Första tecknet får inte vara ett mellanslag!'
      } else if (this.$store.state.mallData.name[0] === '0' || this.$store.state.mallData.name[0] === '1' || this.$store.state.mallData.name[0] === '2' || this.$store.state.mallData.name[0] === '3' || this.$store.state.mallData.name[0] === '4' || this.$store.state.mallData.name[0] === '5' || this.$store.state.mallData.name[0] === '6' || this.$store.state.mallData.name[0] === '7' || this.$store.state.mallData.name[0] === '8' || this.$store.state.mallData.name[0] === '9') {
        return 'OBS! Första tecknet måste vara en bokstav!'
      } else {
        return ''
      }
    },
    nextBtn () {
      return this.controlName && this.$store.state.mallData.email.length > 3 && this.$store.state.mallData.email.includes('@') && this.$store.state.mallData.zip.length > 2 && this.$store.state.mallData.city.length > 0 && this.$store.state.mallData.country.length > 0
    },
    controlName () {
      if (this.$store.state.mallData.name.split(' ').length > 1) {
        return this.$store.state.mallData.name.split(' ')[1].length > 0
      } else {
        return false
      }
    }
  }
}
</script>
