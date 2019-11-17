import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import router from './router'
import 'firebase/database'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomArr: [123, 54, 1, 65, 7654, 34, 59, 69, 23, 60, 765, 234, 63, 'sd', 'hg', 'as', 'gf', 'aa', 'bb', 'qq', 'ww', 'ee', 'rr'],
    gettingData: false,
    loggedInManually: false,
    choosedPlan: '',
    startDownload: false,
    user: null,
    languages: [
      ['Sammanfattning', 'Arbetslivserfarenhet', 'Färdigheter', 'Utbildning', 'Utmärkelser', 'Referenser', 'Hobbier', 'Länkar', 'Språk', 'Volontärarbete', 'Kontakt', 'Telefon', 'Adress', 'E-mail', 'Profil'],
      ['Summary', 'Work experience', 'Skills', 'Education', 'Distinctions', 'References', 'Hobbies', 'Links', 'Language', 'Volunteering', 'Contact', 'Phone', 'Address', 'E-mail', 'Profile']
    ],
    choosedLang: 0,
    previewWindow: false,
    step: 1,
    choosed: 0,
    colorTheme: 'blue-grey darken-2',
    themes: ['black darken-2', 'secondary darken-1', 'blue-grey darken-2', 'grey darken-2', 'beige', 'myBlue', 'success darken-3', 'deep-orange darken-2', 'orange darken-2', 'deep-purple darken-3', 'brown darken-3', 'teal darken-3', 'cyan darken-3', 'lime darken-4', 'amber'],
    mallData: {
      registered: '',
      payStatus: 0,
      name: 'Johnny Doe',
      sammanfattning: 'Lorem ipsum dolor sit amet, in eos elitr scriptorem, an nam augue definiebas disputando, vel quod soluta admodum ut. Quem quodsi neglegentur ei sea. Pro ubique concludaturque ad. Quodsi erroribus evertitur id cum. Nec propriae voluptatibus ad, nullam corpora mei id. Eum feugiat expetendis at, at sea dicunt animal accumsan, est ad delenit persecuti.',
      email: 'john@doe.com',
      phoneNr: '076 00 00 000',
      city: 'Stockholm',
      country: 'Sverige',
      zip: '120 20',
      skills: ['Redovisning', 'Ekonomi', 'Dokumenthantering', 'Telefonvana', 'Datorvana', 'Kommunikativ', 'Teamplayer', 'Ambitiös'],
      work: [
        {
          corp: 'Företag A',
          city: 'Stockholm',
          roll: 'Ekonomichef',
          period: '08/2014 - Nuvarande..',
          description: 'Lorem ipsum dolor sit amet, in eos elitr scriptorem, an nam augue definiebas disputando, vel quod soluta admodum ut. Quem quodsi neglegentur ei sea. Pro ubique concludaturque ad.'
        },
        {
          corp: 'Företag B',
          city: 'Stockholm',
          roll: 'Revisor',
          period: '08/2008 - 01/2014',
          description: 'Lorem ipsum dolor sit amet, in eos elitr scriptorem, an nam augue definiebas disputando, vel quod soluta admodum ut. Quem quodsi neglegentur ei sea. Pro ubique concludaturque ad.'
        },
        {
          corp: 'Företag C',
          city: 'Norrköping',
          roll: 'Ekonomiassistent',
          period: '08/2005 - 01/2008',
          description: 'Lorem ipsum dolor sit amet, in eos elitr scriptorem, an nam augue definiebas disputando, vel quod soluta admodum ut. Quem quodsi neglegentur ei sea. Pro ubique concludaturque ad.'
        },
        {
          corp: 'Företag D',
          city: 'Norrköping',
          roll: 'Sommarjobb',
          period: '06/2002 - 08/2002',
          description: 'Lorem ipsum dolor sit amet, in eos elitr scriptorem, an nam augue definiebas disputando, vel quod soluta admodum ut. Quem quodsi neglegentur ei sea. Pro ubique concludaturque ad.'
        }
      ],
      education: [
        {
          school: 'Stockholm university',
          period: '08/2002 - 06/2005',
          subject: 'Kandidatexamen (Ekonomi)'
        },
        {
          school: 'Hermods Gymnasiums',
          period: '08/1997 - 06/2000',
          subject: 'Ekonomi'
        }
      ],
      utmarkelser: ['Årets rookie 2002', 'Årets medarbetare 2015'],
      hobbier: ['Musik', 'Crossfit'],
      languages: [
        {
          lang: 'Svenska',
          niva: 5,
          id: '213as'
        },
        {
          lang: 'Engelska',
          niva: 4,
          id: 'fsd443'
        },
        {
          lang: 'Spanska',
          niva: 2,
          id: '234lvcx'
        }
      ],
      volontararbete: ['Miljövolontär', 'Resevolontär'],
      links: ['https://linkedin.com/userProfile'],
      referenser: [
        {
          name: 'Johnnie Doey',
          tel: '070-000 00 00',
          relation: 'Chef',
          id: 'xxsd12'
        }
      ]
    }
  },
  mutations: {
    previewWindowCommit (state, payload) {
      state.previewWindow = payload
    },
    storeUserDataToFirebase (state) {
      state.gettingData = true
      let found = 0
      let theEmail
      if (state.loggedInManually) {
        theEmail = state.mallData.email
      } else {
        theEmail = 'xxccsvsdsef'
      }
      state.loggedInManually = false
      firebase.database().ref('users').once('value', res => {
        const data = res.val()
        for (let i in data) {
          if ((i === state.user) || (theEmail === data[i].mallData.email)) {
            found = 1
            state.user = i
            if (!data[i].mallData.hasOwnProperty('work')) {
              data[i].mallData.work = []
            }
            if (!data[i].mallData.hasOwnProperty('education')) {
              data[i].mallData.education = []
            }
            if (!data[i].mallData.hasOwnProperty('utmarkelser')) {
              data[i].mallData.utmarkelser = []
            }
            if (!data[i].mallData.hasOwnProperty('hobbier')) {
              data[i].mallData.hobbier = []
            }
            if (!data[i].mallData.hasOwnProperty('languages')) {
              data[i].mallData.languages = []
            }
            if (!data[i].mallData.hasOwnProperty('volontararbete')) {
              data[i].mallData.volontararbete = []
            }
            if (!data[i].mallData.hasOwnProperty('links')) {
              data[i].mallData.links = []
            }
            if (!data[i].mallData.hasOwnProperty('referenser')) {
              data[i].mallData.referenser = []
            }
            if (!data[i].mallData.hasOwnProperty('skills')) {
              data[i].mallData.skills = []
            }
            state.choosedLang = data[i].choosedLang
            state.choosed = data[i].choosed
            state.colorTheme = data[i].colorTheme
            state.mallData = data[i].mallData
          }
        }
        if (found === 0) {
          if (state.mallData.email !== 'john@doe.com') {
            const newData = {
              choosedLang: state.choosedLang,
              choosed: state.choosed,
              colorTheme: state.colorTheme,
              mallData: state.mallData,
              createdAt: new Date().toISOString().substr(0, 19).replace('T', ' ')
            }
            firebase.database().ref('users').child(state.user)
              .set(newData)
            if (router.history.current.path === '/') {
              router.push('/build')
            }
          } else {
            firebase.auth().signOut()
            state.user = ''
          }
        }
        state.gettingData = false
      })
    },
    updateUserData (state) {
      if (state.choosedPlan === 'premium') {
        state.mallData.payStatus = 1
      } else if (state.choosedPlan === 'basic') {
        state.mallData.registered = new Date().toISOString().substr(0, 10)
      }
      firebase.database().ref('users').child(state.user)
        .update({ mallData: state.mallData })
      firebase.database().ref('users').child(state.user)
        .update({ colorTheme: state.colorTheme })
      firebase.database().ref('users').child(state.user)
        .update({ choosedLang: state.choosedLang })
      firebase.database().ref('users').child(state.user)
        .update({ choosed: state.choosed })
    },
    logOutUser (state) {
      firebase.auth().signOut()
      state.user = ''
      location.reload()
    }
  },
  actions: {

  },
  getters: {
    user (state) {
      return state.user
    },
    previewWindow (state) {
      return state.previewWindow
    },
    months () {
      let arr = []
      for (let i = 1; i <= 12; i++) {
        if (i < 10) {
          arr.push('0' + i)
        } else {
          arr.push(i)
        }
      }
      return arr
    },
    years () {
      let arr = []
      for (let i = 1970; i <= new Date().toISOString().substr(0, 4); i++) {
        arr.push(i)
      }
      return arr
    },
    whatLang (state) {
      return state.languages[state.choosedLang]
    }
  }
})
