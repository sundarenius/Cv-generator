<template>
  <div class="grey lighten-4">
    <div v-show="$vuetify.breakpoint.mdAndUp && false" style="position:absolute;top:5px;left:5px;border-radius:15px" class="ex15 secondary lighten-1 amber--text px-1">
      CVFixarn.se
      <v-icon class="amber--text" large style="margin-bottom:1px;margin-left:-8px">turned_in</v-icon>
    </div>
    <v-btn v-if="0" style="position:absolute;right:0;top:0;z-index:50" small flat class="green" @click="test">test</v-btn>
    <v-btn @click="saveChanges" round v-if="!watchDataChanges" style="position:fixed;top:5px;left:5px;z-index:30" class="success pointer">
      Spara ändringar
      <v-icon class="ml-2">save_alt</v-icon>
    </v-btn>
    <v-layout style="position:relative" pt-4 pb-5 row wrap>
      <v-flex xs12 md6 class="backgroundImg"></v-flex>
      <v-flex text-xs-center pt-1 pb-4 xs12 md6>
        <div class="display-1 secondary--text mb-1">
          {{ $store.state.mallData.name.split(' ')[0] }}<span v-if="$store.state.mallData.name.split(' ')[0][$store.state.mallData.name.split(' ')[0].length - 1] !== 's'">'s</span>
          CV
        </div>
        <div style="margin-bottom:-10px">
          <div @click="selectLang = !selectLang" class="secondary--text text--lighten-2 pointer">
            <span v-if="$store.state.choosedLang === 0">
              <img height="10px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Svenska">
              Svenska
              <v-icon style="margin-bottom:-5px;margin-left:-5px" class="secondary--text text--lighten-2">{{ selectLang ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon>
            </span>
            <span v-if="$store.state.choosedLang === 1">
              <img height="10px" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="Engelska">
              Engelska
              <v-icon style="margin-bottom:-5px;margin-left:-5px" class="secondary--text text--lighten-2">{{ selectLang ? 'arrow_drop_up' : 'arrow_drop_down' }}</v-icon>
            </span>
          </div>
          <div v-show="selectLang" class="secondary--text text--lighten-2 pointer mt-2" style="margin-left:-20px">
            <span @click="$store.state.choosedLang = 1" v-if="$store.state.choosedLang === 0" class="grey lighten-2 py-1 px-4" style="border-radius:10px">
              <img height="10px" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" alt="Engelska">
              Engelska
            </span>
            <span @click="$store.state.choosedLang = 0" v-if="$store.state.choosedLang === 1" class="grey lighten-2 py-1 px-4" style="border-radius:10px">
              <img height="10px" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" alt="Svenska">
              Svenska
            </span>
          </div>
        </div>
        <div>
          <v-layout justify-center row>
            <v-flex xs8>
              <div class="secondary--text text--lighten-2 text-xs-left bold" style="margin-bottom:-10px">
                <span v-if="cvStrength <= 100" :class="{[cvStrengthColor] : true}">{{ cvStrength }}%</span>
                <span v-if="cvStrength > 100" :class="{[cvStrengthColor] : true}">100%</span>
                färdig
              </div>
              <v-progress-linear :color="cvStrengthColorProgress" v-model="cvStrength"></v-progress-linear>
            </v-flex>
          </v-layout>
        </div>
        <v-layout justify-center row wrap px-5 py-5>
          <v-flex style="margin-top:-40px" xs12>
            <div class="title text-xs-center secondary--text pb-1">
              Färgteman
            </div>
            <v-layout row wrap>
              <v-flex :key="i" v-for="(x, i) in $store.state.themes">
                <div @click="$store.state.colorTheme = x" :class="[x]" style="padding:15px;cursor:pointer"></div>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex text-xs-center mt-4 text-xs-left class="secondary--text" xs12>
            <v-select
              box
              light
              label="Alla CV-Mallar"
              :items="allaMallar"
              v-model="choosed"
            ></v-select>
          </v-flex>
          <v-flex mb-3 class="secondary--text text-xs-left" xs12>
            <div class="title bold">
              Personliga uppgifter
            </div>
          </v-flex>
          <v-flex :pr-3="$vuetify.breakpoint.mdAndUp" xs12 md6>
            <v-text-field
              light
              label="För och efternamn"
              v-model="$store.state.mallData.name"
            ></v-text-field>
          </v-flex>
          <v-flex :pl-3="$vuetify.breakpoint.mdAndUp" xs12 md6>
            <v-text-field
              light
              label="E-mail"
              v-model="$store.state.mallData.email"
              :disabled="mailDisabled"
            ></v-text-field>
          </v-flex>
          <v-flex :pr-1="$vuetify.breakpoint.mdAndUp" xs12 md3>
            <v-text-field
              light
              label="Telefon"
              v-model="$store.state.mallData.phoneNr"
            ></v-text-field>
          </v-flex>
          <v-flex :px-1="$vuetify.breakpoint.mdAndUp" xs12 md3>
            <v-text-field
              light
              label="Postadress"
              v-model="$store.state.mallData.zip"
            ></v-text-field>
          </v-flex>
          <v-flex :px-1="$vuetify.breakpoint.mdAndUp" xs12 md3>
            <v-text-field
              light
              label="Postadress"
              v-model="$store.state.mallData.city"
            ></v-text-field>
          </v-flex>
          <v-flex :pl-1="$vuetify.breakpoint.mdAndUp" xs12 md3>
            <v-text-field
              light
              label="Land"
              v-model="$store.state.mallData.country"
            ></v-text-field>
          </v-flex>
          <!-- *********** Sammanfattning *********** -->
          <v-flex class="secondary--text" text-xs-left my-2 xs12>
            <div class="title bold">
              Sammanfattning
            </div>
            <v-textarea
              light
              label="Skriv 2 till 3 meningar om dig själv, ditt yrke och vad du söker för jobb"
              v-model="$store.state.mallData.sammanfattning"
            ></v-textarea>
          </v-flex>
          <!-- *********** Färdigheter *********** -->
          <v-flex class="secondary--text" text-xs-left mt-2 mb-4 xs12>
            <div class="title bold">
              Färdigheter
            </div>
            <v-combobox
              light
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
          <!-- *********** Arbetslivserfarenhet *********** -->
          <v-flex class="secondary--text" text-xs-left mt-2 xs12>
            <div class="title bold">
              Arbetslivserfarenhet
              <v-icon class="secondary--text">work</v-icon>
            </div>
            <div :id="x.period" :key="i" v-for="(x, i) in $store.state.mallData.work" :class="{'my-3 px-2 py-2 v-card' : true, 'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0 }" style="position:relative">
              <div style="position:absolute;right:5px;top:5px">
                <v-tooltip bottom>
                  <v-btn @click="deleteExp(x, 'work')" slot="activator" class="secondary lighten-1" small flat fab>
                    <v-icon large>close</v-icon>
                  </v-btn>
                  <span>Ta bort erfarenhet</span>
                </v-tooltip>
              </div>
              <div class="subheading bold">Erfarenhet {{ (i + 1) }}</div>
              <v-layout row wrap>
                <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" xs12 md6>
                  <v-text-field
                    light
                    v-model="x.corp"
                    label="Företag"
                  ></v-text-field>
                </v-flex>
                <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" xs12 md6>
                  <v-text-field
                    light
                    v-model="x.roll"
                    label="Roll / Titel"
                  ></v-text-field>
                </v-flex>
                <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" xs12>
                  <v-text-field
                    light
                    v-model="x.city"
                    label="Ort"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <div v-if="changeDate !== i" class="subheading bold secondary--text my-2 text-xs-center grey lighten-2 py-2">
                    <div>
                      Datum du jobbade här
                    </div>
                    <div>
                      {{ x.period }}
                    </div>
                    <div>
                      <v-btn @click="changeDate = i" class="primary--text px-4" round flat small>
                        Redigera datum
                      </v-btn>
                    </div>
                  </div>
                  <v-layout v-if="changeDate === i" pt-2 pb-4 px-2 style="border:2px solid lightgrey;border-radius:5px;position:relative" justify-center align-center row wrap>
                    <div @click="changeDate = -1" style="position:absolute;top:5px;right:5px" class="pointer">
                       <v-icon medium class="secondary--text">close</v-icon>
                    </div>
                    <v-flex text-xs-center xs12>
                      <div class="body-2">
                        Datum du jobbade här
                      </div>
                    </v-flex>
                    <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                      <v-autocomplete
                        light
                        label="Månad"
                        :items="$store.getters.months"
                        v-model="month1"
                        @change="getPeriod(i, 'work')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md3>
                      <v-autocomplete
                        light
                        label="År"
                        :items="$store.getters.years"
                        v-model="year1"
                        @change="getPeriod(i, 'work')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex text-xs-center xs12 md1>
                      <span class="bold">-</span>
                    </v-flex>
                    <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                      <v-autocomplete
                        light
                        label="Månad"
                        :items="$store.getters.months"
                        v-model="month2"
                        :disabled="nuvarande"
                        @change="getPeriod(i, 'work')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex style="position:relative" :pl-2="$vuetify.breakpoint.mdAndUp" md3>
                      <v-autocomplete
                        light
                        label="År"
                        :items="$store.getters.years"
                        v-model="year2"
                        :disabled="nuvarande"
                        @change="getPeriod(i, 'work')"
                      ></v-autocomplete>
                      <div style="position:absolute;bottom:-45px;left:7px" class="bold">
                        <v-checkbox
                          light
                          @change="getPeriod(i, 'work')"
                          class="bold"
                          label="Nuvarande"
                          v-model="nuvarande"
                        ></v-checkbox>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    @change="addExp(x, i)"
                    light
                    v-model="x.description"
                    label="Arbetsbeskrivning"
                  ></v-textarea>
                </v-flex>
              </v-layout>
            </div>
            <v-flex text-xs-center xs12>
              <v-btn @click="addNewExp" outline round class="success success--text px-5">
                Lägg till ny erfarenhet
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Utbildningar *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 xs12>
            <div class="title bold">
              Utbildning
              <v-icon class="secondary--text">school</v-icon>
            </div>
             <div :key="i" v-for="(x, i) in $store.state.mallData.education" :class="{'my-3 px-2 py-2 v-card' : true, 'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0 }" style="position:relative">
              <div style="position:absolute;right:5px;top:5px">
                <v-tooltip bottom>
                  <v-btn @click="deleteExp(x, 'education')" slot="activator" class="secondary lighten-1" small flat fab>
                    <v-icon large>close</v-icon>
                  </v-btn>
                  <span>Ta bort utbildning</span>
                </v-tooltip>
              </div>
              <div class="subheading bold">Utbildning {{ (i + 1) }}</div>
              <v-layout row wrap>
                <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" xs12 md6>
                  <v-text-field
                    light
                    v-model="x.school"
                    label="Skola"
                  ></v-text-field>
                </v-flex>
                <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" xs12 md6>
                  <v-text-field
                    light
                    v-model="x.subject"
                    label="Utbildning"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <div class="text-xs-center grey lighten-2 py-1" v-if="changeDateEducation !== i" text-xs-center xs12>
                    <div class="subheading bold">Datum:</div>
                    <div class="subheading">
                      {{ x.period }}
                    </div>
                    <v-btn @click="changeDateEducation = i" small flat round class="primary--text px-4">
                      Redigera datum
                    </v-btn>
                  </div>
                  <v-layout v-if="changeDateEducation === i" pt-2 pb-4 px-2 style="border:2px solid lightgrey;border-radius:5px;position:relative" justify-center align-center row wrap>
                    <div @click="changeDateEducation = -1" style="position:absolute;top:5px;right:5px" class="pointer">
                       <v-icon medium class="secondary--text">close</v-icon>
                    </div>
                    <v-flex text-xs-center xs12>
                      <div class="body-2">
                        Datum du jobbade här
                      </div>
                    </v-flex>
                    <v-flex :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                      <v-autocomplete
                        light
                        label="Månad"
                        :items="$store.getters.months"
                        v-model="month1"
                        @change="getPeriod(i, 'education')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md3>
                      <v-autocomplete
                        light
                        label="År"
                        :items="$store.getters.years"
                        v-model="year1"
                        @change="getPeriod(i, 'education')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex text-xs-center xs12 md1>
                      <span class="bold">-</span>
                    </v-flex>
                    <v-flex :pl-2="$vuetify.breakpoint.mdAndUp" :pr-2="$vuetify.breakpoint.mdAndUp" md2>
                      <v-autocomplete
                        light
                        label="Månad"
                        :items="$store.getters.months"
                        v-model="month2"
                        :disabled="nuvarande"
                        @change="getPeriod(i, 'education')"
                      ></v-autocomplete>
                    </v-flex>
                    <v-flex style="position:relative" :pl-2="$vuetify.breakpoint.mdAndUp" md3>
                      <v-autocomplete
                        light
                        label="År"
                        :items="$store.getters.years"
                        v-model="year2"
                        :disabled="nuvarande"
                        @change="getPeriod(i, 'education')"
                      ></v-autocomplete>
                      <div style="position:absolute;bottom:-45px;left:7px" class="bold">
                        <v-checkbox
                          light
                          @change="getPeriod(i, 'education')"
                          class="bold"
                          label="Nuvarande"
                          v-model="nuvarande"
                        ></v-checkbox>
                      </div>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </div>
            <v-flex text-xs-center xs12>
              <v-btn @click="addNewEdu" outline round class="success success--text px-5">
                Lägg till ny utbildning
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Utmärkelser *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Utmärkelser
              <v-icon class="secondary--text">stars</v-icon>
            </div>
            <v-flex text-xs-center xs12>
              <v-layout v-if="showUtmarkelser || $store.state.mallData.utmarkelser.length > 0" row wrap>
                <v-combobox
                  light
                  v-model="$store.state.mallData.utmarkelser"
                  hide-selected
                  label="Skriv in dina utmärkelser"
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
              </v-layout>
              <v-btn @click="showUtmarkelser = true" outline round class="success success--text px-5">
                Lägg till utmärkelse
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Hobbier *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Hobbier
              <v-icon class="secondary--text">turned_in</v-icon>
            </div>
            <v-flex text-xs-center xs12>
              <v-layout v-if="addHobbies || $store.state.mallData.hobbier.length > 0" row wrap>
                <v-combobox
                  light
                  v-model="$store.state.mallData.hobbier"
                  hide-selected
                  label="Skriv in dina hobbier"
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
              </v-layout>
              <v-btn @click="addHobbies = true" outline round class="success success--text px-5">
                Lägg till hobby
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Språk *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Språk
              <v-icon class="secondary--text">language</v-icon>
            </div>
            <v-layout row wrap>
              <v-flex style="position:relative" :class="{'px-2 py-2 my-1 v-card' : true, 'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0 }" :key="i" v-for="(x, i) in $store.state.mallData.languages" xs12>
                <div style="position:absolute;top:5px;right:5px">
                  <v-icon @click="deleteLang(x)" large class="secondary--text bold pointer">close</v-icon>
                </div>
                <v-text-field
                  light
                  :label="`Språk ${i + 1}`"
                  v-model="x.lang"
                ></v-text-field>
                <v-layout row justify-center>
                  <v-flex xs12>
                    <div class="body-1 bold">
                      Hur behärskar du detta språk på en skala mellan 1 - 5?
                    </div>
                   <v-radio-group row light v-model="x.niva">
                    <v-radio
                      v-for="n in 5"
                      :key="n"
                      :label="`${n}`"
                      :value="n"
                    ></v-radio>
                  </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-flex text-xs-center xs12>
              <v-btn @click="addLang" outline round class="success success--text px-5">
                Lägg till språk
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Volontärarbete *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Volontärarbete
              <v-icon class="secondary--text">people</v-icon>
            </div>
            <v-flex text-xs-center xs12>
              <v-combobox
                v-if="addVolontar || $store.state.mallData.volontararbete.length > 0"
                light
                v-model="$store.state.mallData.volontararbete"
                hide-selected
                label="Skriv in dina volontärarbeten"
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
              <v-btn @click="addVolontar = true" outline round class="success success--text px-5">
                Lägg till volontärarbete
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Länkar *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Länkar <v-icon class="secondary--text">link</v-icon>
              <span class="body-2 ml-2">(Portfolio, hemsida, linkedIn etc..)</span>
            </div>
            <v-flex text-xs-center xs12>
              <v-combobox
                v-if="addLinks || $store.state.mallData.links.length > 0"
                light
                v-model="$store.state.mallData.links"
                hide-selected
                label="Skriv in dina länkar"
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
              <v-btn @click="addLinks = true" outline round class="success success--text px-5">
                Lägg till länk
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
          <!-- *********** Referenser *********** -->
          <v-flex class="secondary--text" text-xs-left mt-5 mb-3 xs12>
            <div class="title bold">
              Referenser
              <v-icon class="secondary--text">supervisor_account</v-icon>
            </div>
            <v-flex text-xs-center xs12>
              <v-layout row wrap>
                <v-flex style="position:relative" :class="{'px-2 py-2 my-1 v-card' : true, 'grey lighten-3' : i % 2 === 0, 'white' : i % 2 !== 0 }" :key="i" v-for="(x, i) in $store.state.mallData.referenser" xs12>
                  <div style="position:absolute;top:5px;right:5px">
                    <v-icon @click="deleteRef(x)" large class="secondary--text bold pointer">close</v-icon>
                  </div>
                  <div class="body-1 bold text-xs-left">
                    Referens {{ i + 1 }}
                  </div>
                  <v-text-field
                    light
                    v-model="x.name"
                    label="Namn på referensen"
                  ></v-text-field>
                  <v-text-field
                    light
                    v-model="x.tel"
                    label="Telefonnummer till referensen"
                  ></v-text-field>
                  <v-select
                    light
                    label="Relation"
                    :items="['Chef', 'Kollega', 'Vän', 'Släkting']"
                    v-model="x.relation"
                  ></v-select>
                </v-flex>
              </v-layout>
              <v-btn @click="addReference" outline round class="success success--text px-5">
                Lägg till referens
                <v-icon class="ml-2">library_add</v-icon>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- ********* För Preview av CV't ********* -->
      <v-flex v-if="$vuetify.breakpoint.smAndUp" class="blue-grey" style="position:fixed;top:0;right:0;height:100vh;width:100vw;z-index:40" py-1 xs6>
        <div style="max-height:95vh;overflow:scroll">
          <mall1 v-if="$store.state.choosed === 1" style="transform:scale(0.9);margin-top:-25px" />
          <mall2 v-if="$store.state.choosed === 2" style="transform:scale(0.9);margin-top:-25px" />
          <mall3 v-if="$store.state.choosed === 3" style="transform:scale(0.9);margin-top:-25px" />
          <mall4 v-if="$store.state.choosed === 4" style="transform:scale(0.9);margin-top:-25px" />
          <mall5 v-if="$store.state.choosed === 5" style="transform:scale(0.9);margin-top:-25px" />
          <mall6 v-if="$store.state.choosed === 6" style="transform:scale(0.9);margin-top:-25px" />
          <mall7 v-if="$store.state.choosed === 7" style="transform:scale(0.5);margin-top:-425px;margin-left:-230px" />
          <mall8 v-if="$store.state.choosed === 8" style="transform:scale(0.9);margin-top:-25px" />
          <mall9 v-if="$store.state.choosed === 9" style="transform:scale(0.9);margin-top:-25px" />
          <mall10 v-if="$store.state.choosed === 10" style="transform:scale(0.9);margin-top:-25px" />
          <mall11 v-if="$store.state.choosed === 11" style="transform:scale(0.9);margin-top:-25px" />
          <mall12 v-if="$store.state.choosed === 12" style="transform:scale(0.9);margin-top:-25px" />
          <div @click="previewWindow = true" style="position:absolute;top:45%;left:40%;background:rgba(51, 51, 51, 0.73);border-radius:30%;padding:20px" class="text-xs-center pointer white--text">
            <div>
              <v-icon class="white--text" x-large>zoom_in</v-icon>
            </div>
            <div class="body-2 white--text">Förhandsgranska</div>
          </div>
        </div>
        <div style="position:absolute;bottom:15px;left:32%">
          <v-btn @click="downloadResume" round large class="success title px-5">
            Ladda ner
            <v-icon class="ml-2">cloud_download</v-icon>
          </v-btn>
        </div>
      </v-flex>

      <!-- ******* HÄR ÄR MALLARNA VI SCREENSHOTAR FRÅN ******* -->
      <v-flex style="position:absolute;z-index:-10;width:880px!important" class="grey">
          <div :key="$store.state.choosed" id='printThis'>
            <div v-if="$store.state.choosed === 1">
              <mall1 />
            </div>
            <div v-if="$store.state.choosed === 2">
              <mall2 />
            </div>
            <div v-if="$store.state.choosed === 3">
              <mall3 />
            </div>
            <div v-if="$store.state.choosed === 4">
              <mall4 />
            </div>
            <div v-if="$store.state.choosed === 5">
              <mall5 />
            </div>
            <div v-if="$store.state.choosed === 6">
              <mall6 />
            </div>
            <div v-if="$store.state.choosed === 7">
              <mall7 />
            </div>
            <div v-if="$store.state.choosed === 8">
              <mall8 />
            </div>
            <div v-if="$store.state.choosed === 9">
              <mall9 />
            </div>
            <div v-if="$store.state.choosed === 10">
              <mall10 />
            </div>
            <div v-if="$store.state.choosed === 11">
              <mall11 />
            </div>
            <div v-if="$store.state.choosed === 12">
              <mall12 />
            </div>
          </div>
      </v-flex>
    </v-layout>

    <v-dialog max-width="400" v-model="convertingToPdf">
      <v-card>
        <v-card-title class="justify-center">
          <div class="title">
            Skapar din PDF fil...
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn block flat :loading="convertingToPdf"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="downloadResumeDialog" max-width="450">
      <v-card class="white">
        <v-card-title class="justify-center primary lighten-2">
          <div class="title">
            Grattis! Ditt CV går nu att ladda ner.
            <v-icon class="ml-1">thumb_up</v-icon>
          </div>
        </v-card-title>
        <div class="white">
          <div class="body-2 secondary--text py-3 px-3">
            {{ congratsText }}
          </div>
        </div>
        <v-card-actions>
          <v-btn @click="downloadNow(), downloadResumeDialog = false" large block class="success title">
            Ladda ner CV nu!
            <v-icon class="ml-2">cloud_download</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <cvSnapCorner />

    <!--  SMALL SCREENS NOTIFICATION  -->
    <div v-if="$vuetify.breakpoint.smAndDown" style="position:fixed;bottom:0;width:100%" class="py-3 secondary">
      <div class="body-2 bold text-xs-left pl-3">
        <v-icon small class="pr-2">info</v-icon>
        Logga in på en dator för att ladda ner ditt CV.
      </div>
    </div>

    <v-dialog max-width="500" v-model="showImgLinks">
      <v-card>
        <v-card-title class="justify-center primary lighten-2">
          <div class="title white--text bold">
            Grattis, här är ditt CV!
          </div>
        </v-card-title>
        <v-card-actions class="justify-center">
          <div class="body-2 py-2">
            Ladda ner ditt CV i PDF format samt i bildformat
          </div>
        </v-card-actions>
        <v-card-actions>
          <v-layout>
            <v-flex xs12>
              <v-btn @click="saveHtmlToPdf" :loading="loadingPdf" large block class="success title bold mb-2">
                Ladda ner CV (PDF)
                <v-icon class="ml-2">cloud_download</v-icon>
              </v-btn>
              <a style="text-decoration:none" :href="theImage" download>
                <v-btn large block class="success title bold">
                  Ladda ner CV (PNG)
                  <v-icon class="ml-2">cloud_download</v-icon>
                </v-btn>
              </a>
            </v-flex>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import mall1 from '@/components/mallar/mall1.vue'
import mall2 from '@/components/mallar/mall2.vue'
import mall3 from '@/components/mallar/mall3.vue'
import mall4 from '@/components/mallar/mall4.vue'
import mall5 from '@/components/mallar/mall5.vue'
import mall6 from '@/components/mallar/mall6.vue'
import mall7 from '@/components/mallar/mall7.vue'
import mall8 from '@/components/mallar/mall8.vue'
import mall9 from '@/components/mallar/mall9.vue'
import mall10 from '@/components/mallar/mall10.vue'
import mall11 from '@/components/mallar/mall11.vue'
import mall12 from '@/components/mallar/mall12.vue'
import domtoimage from 'dom-to-image'
import cvSnapCorner from '@/components/reusable/cvSnapCorner.vue'

export default {
  components: {
    mall1,
    mall2,
    mall3,
    mall4,
    mall5,
    mall6,
    mall7,
    mall8,
    mall9,
    mall10,
    mall11,
    mall12,
    cvSnapCorner
  },
  data: () => ({
    loadingPdf: false,
    downloadResumeDialog: false,
    convertingToPdf: false,
    radioGroup: 1,
    addVolontar: false,
    addHobbies: false,
    showUtmarkelser: false,
    addLinks: false,
    changeDate: -1,
    changeDateEducation: -1,
    mall: false,
    theImage: '',
    allaMallar: ['Mall 1', 'Mall 2', 'Mall 3', 'Mall 4', 'Mall 5', 'Mall 6', 'Mall 7', 'Mall 8', 'Mall 9', 'Mall 10', 'Mall 11', 'Mall 12'],
    choosed: 0,
    count: 0,
    selectLang: false,
    nuvarande: false,
    month1: '',
    year1: '',
    month2: '',
    year2: '',
    workString: '',
    allData: '',
    showImgLinks: false
  }),
  watch: {
    choosed: function () {
      if (this.count > 0) {
        this.$store.state.choosed = (this.allaMallar.indexOf(this.choosed) + 1)
      }
    },
    theImage: function () {
      const global = this
      if (this.theImage.length > 20) {
        setTimeout(function () {
          global.showImgLinks = true
        }, 500)
      }
    }
  },
  computed: {
    congratsText () {
      const basic = 'Tack för din order! Du har valt paket BASIC och kan därför ladda ner obegränsat med CV:n och revideringar i 7 dagar!'
      const premium = 'Tack för din order! Du har valt paket PREMIUM och du kan därför ladda ner obegränsat med CV:n samt revideringar för alltid!'
      return this.$store.state.choosedPlan === 'premium' ? premium : basic
    },
    mailDisabled () {
      if (this.$store.state.mallData.registered.length > 0) {
        return this.$store.state.mallData.registered <= new Date(new Date(this.$store.state.mallData.registered).setDate((new Date(this.$store.state.mallData.registered).getDate() + 7))).toISOString().substr(0, 10)
      }
      return this.$store.state.mallData.payStatus === 1
    },
    watchDataChanges () {
      const necessaryData = {
        choosedLang: this.$store.state.choosedLang,
        choosed: this.$store.state.choosed,
        colorTheme: this.$store.state.colorTheme,
        mallData: this.$store.state.mallData
      }
      return JSON.stringify(necessaryData) === this.allData
    },
    previewWindow: {
      get () { return this.$store.getters.previewWindow },
      set (value) { this.$store.commit('previewWindowCommit', value) }
    },
    cvStrength () {
      let result = 0
      const add = 8
      const addFive = 4
      this.$store.state.mallData.name.length > 0 ? result += add : result += 0
      this.$store.state.mallData.sammanfattning.length > 0 ? result += add : result += 0
      this.$store.state.mallData.email.length > 0 ? result += add : result += 0
      this.$store.state.mallData.phoneNr.length > 0 ? result += add : result += 0
      this.$store.state.mallData.city.length > 0 ? result += add : result += 0
      this.$store.state.mallData.country.length > 0 ? result += add : result += 0
      this.$store.state.mallData.zip.length > 0 ? result += add : result += 0
      this.$store.state.mallData.work.length > 0 ? result += add : result += 0
      this.$store.state.mallData.education.length > 0 ? result += add : result += 0
      this.$store.state.mallData.skills.length > 0 ? result += add : result += 0
      this.$store.state.mallData.utmarkelser.length > 0 ? result += addFive : result += 0
      this.$store.state.mallData.hobbier.length > 0 ? result += addFive : result += 0
      this.$store.state.mallData.languages.length > 0 ? result += addFive : result += 0
      this.$store.state.mallData.volontararbete.length > 0 ? result += addFive : result += 0
      this.$store.state.mallData.links.length > 0 ? result += addFive : result += 0
      this.$store.state.mallData.referenser.length > 0 ? result += addFive : result += 0
      return result
    },
    cvStrengthColor () {
      const colors = ['warning--text', 'blue--text', 'success--text']
      if (this.cvStrength <= 20) {
        return colors[0]
      } else if (this.cvStrength <= 70) {
        return colors[1]
      } else if (this.cvStrength <= 100 || this.cvStrength > 100) {
        return colors[2]
      } else {
        return colors[0]
      }
    },
    cvStrengthColorProgress () {
      return this.cvStrengthColor.split('--')[0]
    }
  },
  methods: {
    test () {
      console.log(this.$store.state.mallData.registered)
      if (this.$store.state.mallData.registered.length > 0) {
        console.log(this.$store.state.mallData.registered >= new Date().toISOString().substr(0, 10))
      }
      console.log(this.$store.state.mallData.payStatus === 1)
      console.log(this.mailDisabled)
    },
    downloadNow () {
      this.convertingToPdf = true
      this.saveHtmlToPdf()
    },
    downloadResume (x) {
      let registered
      if (this.$store.state.mallData.registered.length > 0) {
        registered = this.$store.state.mallData.registered <= new Date(new Date(this.$store.state.mallData.registered).setDate((new Date(this.$store.state.mallData.registered).getDate() + 7))).toISOString().substr(0, 10)
      } else {
        registered = false
      }
      this.theImage = ''
      if (this.$store.state.mallData.payStatus === 0 && !this.$store.state.startDownload && !registered) {
        this.$router.push('/checkout')
      } else if ((this.$store.state.mallData.payStatus === 1 || this.$store.state.startDownload || registered) && x !== 'checkout') {
        this.convertingToPdf = true
        this.saveHtmlToPdf()
      } else if ((this.$store.state.mallData.payStatus === 1 || this.$store.state.startDownload || registered) && x === 'checkout') {
        this.downloadResumeDialog = true
      }
    },
    deleteRef (r) {
      const arr = []
      this.$store.state.mallData.referenser.forEach(val => {
        if (val.name !== r.name && val.tel !== r.tel) {
          arr.push(val)
        }
      })
      this.$store.state.mallData.referenser = arr
    },
    addReference () {
      const newRef = {
        name: '',
        tel: '',
        relation: ''
      }
      this.$store.state.mallData.referenser.push(newRef)
    },
    deleteLang (l) {
      const arr = []
      this.$store.state.mallData.languages.forEach(val => {
        if (val.lang !== l.lang && val.niva !== l.niva) {
          arr.push(val)
        }
      })
      this.$store.state.mallData.languages = arr
    },
    addLang () {
      const newLang = {
        lang: '',
        niva: 1
      }
      this.$store.state.mallData.languages.push(newLang)
    },
    saveChanges () {
      const necessaryData = {
        choosedLang: this.$store.state.choosedLang,
        choosed: this.$store.state.choosed,
        colorTheme: this.$store.state.colorTheme,
        mallData: this.$store.state.mallData
      }
      this.allData = JSON.stringify(necessaryData)
      this.sortWork()
      this.$store.commit('updateUserData')
    },
    getPeriod (i, what) {
      let date1 = this.month1 + '/' + this.year1
      let date2
      if (!this.nuvarande) {
        date2 = this.month2 + '/' + this.year2
      } else {
        date2 = 'Nuvarande..'
      }
      this.$store.state.mallData[what][i].period = date1 + ' - ' + date2
    },
    addExp (x, i) {
      console.log(x, i)
      // Fixa punkt i slutet av description
      if (x.description.length > 0) {
        let arr = x.description.split('')
        if (x.description.split('')[x.description.split('').length - 1] !== '.') {
          arr.push('.')
        }
        x.description = arr.join('')
      }
      // Uppdatera rätt erfarenhet i VUEX
      this.$store.state.mallData.work[i] = x
    },
    sortWork () {
      let what = ['education', 'work']
      let arr = []
      what.forEach(w => {
        this.$store.state.mallData[w].sort((a, b) => {
          if (b.period.split(' ')[2] && a.period.split(' ')[2]) {
            return b.period.split(' ')[2].substring(3) - a.period.split(' ')[2].substring(3)
          }
        })
        this.$store.state.mallData[w].forEach(val => {
          if (val.period.includes('Nuvarande')) {
            arr.unshift(val)
          } else {
            arr.push(val)
          }
        })
        this.$store.state.mallData[w] = arr
        arr = []
      })
      this.changeDate = -1
      this.changeDateEducation = -1
      this.nuvarande = false
      this.month1 = ''
      this.year1 = ''
      this.month2 = ''
      this.year2 = ''
    },
    deleteExp (exp, what) {
      let arr = []
      this.$store.state.mallData[what].forEach(val => {
        if (JSON.stringify(val) !== JSON.stringify(exp)) {
          arr.push(val)
        }
      })
      this.$store.state.mallData[what] = arr
    },
    addNewEdu () {
      const newEdu = {
        school: '',
        period: '',
        subject: ''
      }
      this.$store.state.mallData.education.push(newEdu)
      this.changeDateEducation = (this.$store.state.mallData.education.length - 1)
    },
    addNewExp () {
      const newExp = {
        corp: '',
        city: '',
        roll: '',
        period: '',
        description: ''
      }
      this.$store.state.mallData.work.push(newExp)
      this.changeDate = (this.$store.state.mallData.work.length - 1)
    },
    saveHtmlToPdf () {
      this.loadingPdf = true
      var element = document.querySelector('#printThis')
      element.innerHTML = element.innerHTML.replace('class="dragToLeft"', 'style="margin-left:0px!important"')
      html2pdf(element)
        .then(res => {
          this.loadingPdf = false
          this.convertingToPdf = false
        })
      this.toPng()
    },
    toPng () {
      const node = document.querySelector('#printThis')
      const global = this
      domtoimage.toPng(node)
        .then(function (dataUrl) {
          global.theImage = dataUrl
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error)
        })
    },
    toSVGXX () {
      this.theImage = ''
      let x = document.querySelector('#printThis')
      x.innerHTML = x.innerHTML.replace('class="dragToLeft"', 'style="margin-left:0px!important"')
      const global = this
      function filter (node) {
        return (node.tagName !== 'i')
      }
      domtoimage.toSvg(document.querySelector('#printThis'), { filter: filter })
        .then(function (dataUrl) {
          console.log(dataUrl)
          global.theImage = dataUrl
        })
    }
  },
  mounted () {
    this.choosed = this.allaMallar[this.$store.state.choosed - 1]
    this.count++
    const necessaryData = {
      choosedLang: this.$store.state.choosedLang,
      choosed: this.$store.state.choosed,
      colorTheme: this.$store.state.colorTheme,
      mallData: this.$store.state.mallData
    }
    this.allData = JSON.stringify(necessaryData)
    this.workString = JSON.stringify(this.$store.state.mallData.work)
    if (this.$store.state.startDownload) {
      this.downloadResume('checkout')
    }
  },
  created () {
    if (!this.$store.state.user) {
      // this.$router.push('/')
    } else {
      // this.saveChanges()
    }
  }
}
</script>

<style scoped>
.backgroundImg {
  background-image: url('https://image.freepik.com/foto-gratis/taza-espuma-marron-ordenador-oscuro_1286-250.jpg');
  position: absolute;
  top:0;
  left: 0;
  height: 100vh;
}
</style>

