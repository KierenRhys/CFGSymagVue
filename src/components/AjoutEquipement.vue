<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <form>
          <h1>Choisissez le type d'équipement à ajouter</h1>
          <v-select
            :items="items"
            v-model="selected"
            label="Select"
            single-line
          ></v-select>
          <div v-if="selected==='Serveur'">
            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Designation"
                  v-model="designation"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Reference"
                  v-model="reference"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs3 class="input_form">
                <v-text-field
                  label="Numéro de série"
                  v-model="numeroserie"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs3 class="input_form">
                <v-select
                  :items="serveursNumeros"
                  v-model="numeroserie"
                  required
                ></v-select>
              </v-flex>
              
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Quantité"
                  v-model="quantite"
                  type="number"
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn @click="ajoutServeur" color="teal darken-1" dark>Ajouter serveur</v-btn>
          </div>

          <div v-if="selected==='Logiciel'">
            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Designation"
                  v-model="designation"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Reference"
                  v-model="reference"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs3 class="input_form">
                <v-text-field
                  label="Licence"
                  v-model="licence"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs3 class="input_form">
                <v-select
                  :items="logicielsLicences"
                  v-model="licence"
                  required
                ></v-select>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Quantité"
                  v-model="quantite"
                  type="number"
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn @click="ajoutLogiciel" color="teal darken-1" dark>Ajouter logiciel</v-btn>
          </div>
          
          <div v-if="selected==='TPV'">
            <v-layout row>
              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Designation"
                  v-model="designation"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Reference"
                  v-model="reference"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs3 class="input_form">
                <v-text-field
                  label="Numéro de série"
                  v-model="numeroserie"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs3 class="input_form">
                <v-select
                  :items="serveursNumeros"
                  v-model="numeroserie"
                  required
                ></v-select>
              </v-flex>

              <v-flex xs6 class="input_form">
                <v-text-field
                  label="Quantité"
                  v-model="quantite"
                  type="number"
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-btn @click="ajoutTPV" color="teal darken-1" dark>Ajouter TPV</v-btn>
          </div>
          <v-btn @click="listeEquipements()" color="teal darken-1" dark>Retour</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        'Serveur',
        'Logiciel',
        'TPV'
      ],
      selected: 'Serveur',
      designation: '',
      reference: '',
      numeroserie: '',
      licence: '',
      quantite: '',
      serveursNumeros: [],
      tpvsNumeros: [],
      logicielsLicences: []
    }
  },
  methods: {
    // Ajout d'un serveur
    ajoutServeur () {
      this.$http.post('http://cfg-api.cleverapps.io/public/serveur', {
        'designation': this.designation,
        'reference': this.reference,
        'numeroserie': this.numeroserie,
        'quantite': this.quantite,
        'idmagasin': this.$cookie.get('idMag')
      }, {emulateJSON: true})
        .then(this.$router.push({name: 'equipements', params: { id: this.$cookie.get('idMag') }}))
    },
    // Ajout d'un TPV
    ajoutTPV () {
      this.$http.post('http://cfg-api.cleverapps.io/public/tpv', {
        'designation': this.designation,
        'reference': this.reference,
        'numeroserie': this.numeroserie,
        'quantite': this.quantite,
        'idmagasin': this.$cookie.get('idMag')
      }, {emulateJSON: true})
        .then(this.$router.push({name: 'equipements', params: { id: this.$cookie.get('idMag') }}))
    },
    // Ajout d'un logiciel
    ajoutLogiciel () {
      this.$http.post('http://cfg-api.cleverapps.io/public/logiciel', {
        'designation': this.designation,
        'reference': this.reference,
        'licence': this.licence,
        'quantite': this.quantite,
        'idmagasin': this.$cookie.get('idMag')
      }, {emulateJSON: true})
        .then(this.$router.push({name: 'equipements', params: { id: this.$cookie.get('idMag') }}))
    },
    // Liste des numéros de série des serveurs
    listeServeursNumeros () {
      this.$http.get('http://cfg-api.cleverapps.io/public/serveursNumeros')
        .then(response => {
          this.serveursNumeros = response.body
        })
    },
    // Liste des numéros de série des TPVs
    listeTpvsNumeros () {
      this.$http.get('http://cfg-api.cleverapps.io/public/tpvsNumeros')
        .then(response => {
          this.tpvsNumeros = response.body
        })
    },
    // Liste des licences des logiciels
    listeLogicielsLicences () {
      this.$http.get('http://cfg-api.cleverapps.io/public/logicielsLicences')
        .then(response => {
          this.logicielsLicences = response.body
        })
    },
    // Retour à la liste des équipements
    listeEquipements () {
      this.$router.push({name: 'equipements', params: { id: this.$cookie.get('idMag') }})
    }
  },
  created () {
    this.listeServeursNumeros()
    this.listeTpvsNumeros()
    this.listeLogicielsLicences()
  }
}
</script>

<style scoped>
.input_form {
  margin: 5px;
}

.primary--text {
  color: teal !important;
}
</style>
