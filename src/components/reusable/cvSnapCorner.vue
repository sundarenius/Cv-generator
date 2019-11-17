<template>
  <div>
    <div style="position:fixed;bottom:60px;right:10px;z-index:100" v-if="$vuetify.breakpoint.mdAndUp && $router.history.current.path !== '/my-resume'" @click="previewWindow = true" @mouseover="mall = true" @mouseleave="mall = false" :class="{'pointer' : true, 'mall' : mall}">
      <div style="position:relative" v-if="$store.state.choosed === 1">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv1.png" alt="Cv1">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 2">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv2.png" alt="Cv2">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 3">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv3.png" alt="Cv3">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 4">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv4.png" alt="Cv4">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 5">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv5.png" alt="Cv5">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 6">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv6.png" alt="Cv6">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 7">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv7.png" alt="Cv7">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 8">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv8.png" alt="Cv8">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 9">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv9.png" alt="Cv9">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 10">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv10.png" alt="Cv10">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 11">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv11.png" alt="Cv11">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
      <div style="position:relative" v-if="$store.state.choosed === 12">
        <img style="filter:blur(2px)" width="100px" src="@/assets/cv12.png" alt="Cv12">
        <div style="position:absolute;top:40px;left:30px">
          <v-icon x-large class="secondary--text">zoom_in</v-icon>
        </div>
      </div>
    </div>

    <v-dialog fullscreen v-model="showSmallPreview">
      <v-card>
        <div style="position:absolute;top:10px;left:10px">
          <v-btn @click="showSmallPreview = false" fab flat class="secondary">
            <v-icon class="bold white--text" large>close</v-icon>
          </v-btn>
        </div>
        <section>
          <img v-show="theImage.length > 20" width="100%" :src="theImage" alt="Mallen">
          <v-progress-circular
            v-show="loadingPic"
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
        </section>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  data: () => ({
    mall: false,
    showSmallPreview: false,
    loadingPic: false,
    theImage: ''
  }),
  computed: {
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    }
  }
}
</script>
