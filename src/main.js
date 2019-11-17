import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    const config = {
      apiKey: 'AIzaSyCZY_-LGAXb6Dty2Z-pKW-iP6ohdQD0jEc',
      authDomain: 'cv-generator-3f4dc.firebaseapp.com',
      databaseURL: 'https://cv-generator-3f4dc.firebaseio.com',
      projectId: 'cv-generator-3f4dc',
      storageBucket: 'cv-generator-3f4dc.appspot.com',
      messagingSenderId: '101324057771'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.$store.state.user = firebaseUser.uid
        this.$store.commit('storeUserDataToFirebase')
      }
    })
  }
}).$mount('#app')
