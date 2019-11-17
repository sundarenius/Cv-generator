<template>
  <div>
    <v-container>
      <v-layout justify-center py-5 row wrap>
        <v-flex text-xs-center py-5 xs12>
          <div class="display-1">
            Välj dina <span class="amber--text">färdigheter</span>
            och skriv en <span class="amber--text">sammanfattning</span>
          </div>
          <div class="body-1 pt-1">
            Tagga dina "skills" och sammanfatta dig själv och ditt yrke och/eller vad du söker för jobb på 2 - 3 meningar.
          </div>
          <v-btn v-if="0" @click="test">test</v-btn>
        </v-flex>

        <v-flex mt-4 xs12 md8>
          <v-textarea
            box
            color="white"
            label="Skriv 2 till 3 meningar om dig själv, ditt yrke och vad du söker för jobb"
            v-model="$store.state.mallData.sammanfattning"
          ></v-textarea>
        </v-flex>

        <v-flex mt-4 xs12 md8>
          <v-combobox
            color="white"
            v-model="$store.state.mallData.skills"
            hide-selected
            label="Skriv in dina färdigheter"
            hint="Tryck 'enter' för att spara."
            multiple
            persistent-hint
            small-chips
          >
          <v-chip
            color="success"
            label
            small
          >
        </v-chip>
          </v-combobox>
        </v-flex>

        <v-flex text-xs-center xs12>
          <v-btn to="/my-resume" flat round large class="px-4 success lighten-1 title">
            Nästa
            <v-icon>arrow_right</v-icon>
          </v-btn>
        </v-flex>

      </v-layout>
    </v-container>

    <span>
      <cvSnapCorner />
    </span>

  </div>
</template>

<script>
import cvSnapCorner from '@/components/reusable/cvSnapCorner.vue'

export default {
  components: {
    cvSnapCorner
  },
  data: () => ({
    mall: false
  }),
  computed: {
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    }
  }
}
</script>
