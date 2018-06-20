<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <form>
          <fieldset>
            <legend>Informations</legend>
            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-select
                  :items="enseignes"
                  v-model="enseigne"
                  label="Enseigne"
                  single-line
                  auto
                  hide-details
                ></v-select>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Site"
                  v-model="site"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs5 class="input_form">
                <v-text-field
                  label="Adresse"
                  v-model="adresse"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs5 class="input_form">
                <v-text-field
                  label="Ville"
                  v-model="ville"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs2 class="input_form">
                <v-text-field
                  label="CP"
                  v-model="CP"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Responsable"
                  v-model="responsable"
                ></v-text-field>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Téléphone"
                  v-model="telephone"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Contact"
                  v-model="contact"
                ></v-text-field>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Fax"
                  v-model="fax"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Caisses"
                  v-model="caisses"
                ></v-text-field>
              </v-flex>

              <v-flex xs2 class="input_form">
                <v-text-field
                  label="Nombre"
                  v-model="nombre"
                  required
                  type="number"
                  pattern="-?[0-9]*(\.[0-9]+)?"
                ></v-text-field>
              </v-flex>

              <v-flex xs4 class="input_form">
                <v-text-field
                  label="Telemaintenance"
                  v-model="telemaintenance"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </fieldset>

          <fieldset>
            <!-- Plus d'infos sur le time picker https://vuetifyjs.com/en/components/time-pickers -->
            <legend>Horaires</legend>
            <v-layout row>
              <v-flex xs3 class="input_form">
                <label>Lundi</label>
                <v-dialog
                  ref="dialog1"
                  persistent
                  v-model="dialog1"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="lundiDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="lundiDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="lundiDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog1 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog1.save(lundiDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog2"
                  persistent
                  v-model="dialog2"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="lundiFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="lundiFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="lundiFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog2 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog2.save(lundiFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs3 class="input_form">
                <label>Mardi</label>
                <v-dialog
                  ref="dialog3"
                  persistent
                  v-model="dialog3"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="mardiDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="mardiDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="mardiDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog3 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog3.save(mardiDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog4"
                  persistent
                  v-model="dialog4"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="mardiFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="mardiFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="mardiFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog4 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog4.save(mardiFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs3 class="input_form">
                <label>Mercredi</label>
                <v-dialog
                  ref="dialog5"
                  persistent
                  v-model="dialog5"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="mercrediDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="mercrediDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="mercrediDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog5 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog5.save(mercrediDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog6"
                  persistent
                  v-model="dialog6"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="mercrediFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="mercrediFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="mercrediFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog6 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog6.save(mercrediFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs3 class="input_form">
                <label>Jeudi</label>
                <v-dialog
                  ref="dialog7"
                  persistent
                  v-model="dialog7"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="jeudiDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="jeudiDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="jeudiDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog7 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog7.save(jeudiDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog8"
                  persistent
                  v-model="dialog8"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="jeudiFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="jeudiFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="jeudiFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog8 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog8.save(jeudiFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex xs4 class="input_form">
                <label>Vendredi</label>
                <v-dialog
                  ref="dialog9"
                  persistent
                  v-model="dialog9"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="vendrediDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="vendrediDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="vendrediDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog9 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog9.save(vendrediDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog10"
                  persistent
                  v-model="dialog10"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="vendrediFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="vendrediFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="vendrediFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog10 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog10.save(vendrediFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs4 class="input_form">
                <label>Samedi</label>
                <v-dialog
                    ref="dialog11"
                    persistent
                    v-model="dialog11"
                    lazy
                    full-width
                    width="290px"
                    :return-value.sync="samediDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="samediDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="samediDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog11 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog11.save(samediDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog12"
                  persistent
                  v-model="dialog12"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="samediFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="samediFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="samediFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog12 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog12.save(samediFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>

              <v-flex xs4 class="input_form">
                <label>Dimanche</label>
                <v-dialog
                    ref="dialog13"
                    persistent
                    v-model="dialog13"
                    lazy
                    full-width
                    width="290px"
                    :return-value.sync="dimancheDebut"
                >
                  <v-text-field
                    slot="activator"
                    label="Début"
                    v-model="dimancheDebut"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="dimancheDebut" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog13 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog13.save(dimancheDebut)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
                <v-dialog
                  ref="dialog14"
                  persistent
                  v-model="dialog14"
                  lazy
                  full-width
                  width="290px"
                  :return-value.sync="dimancheFin"
                >
                  <v-text-field
                    slot="activator"
                    label="Fin"
                    v-model="dimancheFin"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="dimancheFin" actions format="24hr" color="teal darken-1">
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="dialog14 = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.dialog14.save(dimancheFin)">OK</v-btn>
                  </v-time-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
          </fieldset>
          <v-btn @click="ajoutMagasin" color="teal darken-1" dark>Ajouter</v-btn>
          <v-btn to="/" color="teal darken-1" dark>Retour</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      'dateajout': '',
      enseignes: [
        'Galeries Lafayette', 'BHV', 'PRODIM', 'PRODIM_VLP5.8', 'Monoprix', 'GIFI', 'Bricorama', 'Nicolas', 'Nicolas CLBS', 'Parashop', 'Carrefour Market', 'Jardiland', 'Intermarché', 'Noz', 'DOMTOM',
        'Galeries Gourmandes', 'Carrefour Tunisie - UHD', 'Carrefour Algérie - HDA', 'MERCHANT 2.0', 'Courtepaille'
      ],
      'enseigne': '',
      'logo': '',
      'site': '',
      'adresse': '',
      'ville': '',
      'CP': '',
      'responsable': '',
      'telephone': '',
      'contact': '',
      'fax': '',
      'caisses': '',
      'nombre': null,
      'telemaintenance': '',
      'lundiDebut': null,
      'lundiFin': null,
      'mardiDebut': null,
      'mardiFin': null,
      'mercrediDebut': null,
      'mercrediFin': null,
      'jeudiDebut': null,
      'jeudiFin': null,
      'vendrediDebut': null,
      'vendrediFin': null,
      'samediDebut': null,
      'samediFin': null,
      'dimancheDebut': null,
      'dimancheFin': null,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
      dialog10: false,
      dialog11: false,
      dialog12: false,
      dialog13: false,
      dialog14: false
    }
  },
  methods: {
    // Ajout du magasin grâce aux données du formulaire
    ajoutMagasin () {
      var date = new Date()
      var dd = date.getDate()
      var mm = date.getMonth() + 1
      var yyyy = date.getFullYear()
      var hour = date.getHours()
      var minu = date.getMinutes()
      var sec = date.getSeconds()
      if (dd < 10) { dd = '0' + dd }
      if (mm < 10) { mm = '0' + mm }
      if (minu < 10) { minu = '0' + minu }
      date = yyyy + '-' + mm + '-' + dd + ' ' + hour + ':' + minu + ':' + sec
      this.$http.post('http://cfg-api.cleverapps.io/public/magasin', {
        'dateajout': date,
        'enseigne': this.enseigne,
        'logo': this.logo,
        'site': this.site,
        'adresse': this.adresse,
        'ville': this.ville,
        'CP': this.CP,
        'responsable': this.responsable,
        'telephone': this.telephone,
        'contact': this.contact,
        'fax': this.fax,
        'caisses': this.caisses,
        'nombre': this.nombre,
        'telemaintenance': this.telemaintenance,
        'idutilisateur': this.$cookie.get('idUtilisateur'),
        'lundiDebut': this.lundiDebut,
        'lundiFin': this.lundiFin,
        'mardiDebut': this.mardiDebut,
        'mardiFin': this.mardiFin,
        'mercrediDebut': this.mercrediDebut,
        'mercrediFin': this.mercrediFin,
        'jeudiDebut': this.jeudiDebut,
        'jeudiFin': this.jeudiFin,
        'vendrediDebut': this.vendrediDebut,
        'vendrediFin': this.vendrediFin,
        'samediDebut': this.samediDebut,
        'samediFin': this.samediFin,
        'dimancheDebut': this.dimancheDebut,
        'dimancheFin': this.dimancheFin
      }, {emulateJSON: true})
        .then(this.$router.push({name: 'magasins'}))
    },
    verifConnexion () {
      if (!this.$cookie.get('idUtilisateur')) {
        this.$router.push('/connexion')
      }
    }
  },
  created () {
    this.verifConnexion()
  }
}
</script>

<style scoped>
fieldset {
  border: 0;
}

.input_form {
  margin: 5px;
}

.primary--text {
  color: teal !important;
}
</style>
