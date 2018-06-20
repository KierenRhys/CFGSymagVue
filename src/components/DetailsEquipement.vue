<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <form>
          <div v-if="type==='serveur'">
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
              <v-flex xs6 class="input_form">
                <v-text-field
                  v-model="numeroserie"
                  label="Numéro de série"
                  required
                ></v-text-field>
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
          </div>

          <div v-if="type==='logiciel'">
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
              <v-flex xs6 class="input_form">
                <v-text-field
                  v-model="licence"
                  label="Licence"
                  required
                ></v-text-field>
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
          </div>

          <div v-if="type==='tpv'">
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
              <v-flex xs6 class="input_form">
                <v-text-field
                  v-model="numeroserie"
                  label="Numéro de série"
                  required
                ></v-text-field>
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
          </div>
          <v-btn @click="modifEquipement" color="teal darken-1" dark>Modifier</v-btn>
           <v-dialog
            ref="dialogSuppr"
            persistent
            v-model="dialogSuppr"
            lazy
            full-width
            width="290px"
          >
            <v-card>
              <v-card-title>
                Suppression de l'équipement
              </v-card-title>
              <v-btn color="teal darken-1" @click="dialogSuppr = false" dark>Annuler</v-btn>
              <v-btn flat @click="suppEquipement" color="teal darken-1">Supprimer</v-btn>
            </v-card>
          </v-dialog>
          <v-btn @click.stop="dialogSuppr = true" color="teal darken-1" dark>Supprimer</v-btn>
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
      designation: '',
      reference: '',
      numeroserie: '',
      licence: '',
      quantite: '',
      type: this.$route.params.type,
      dialogSuppr: false
    }
  },
  methods: {
    // Appelle l'API qui renvoie les données de l'équipement sélectionné
    detailsEquipement () {
      if (this.type === 'serveur') {
        this.$http.get('http://cfg-api.cleverapps.io/public/serveur/' + this.$route.params.id)
          .then(response => {
            this.designation = response.body.designation
            this.reference = response.body.reference
            this.numeroserie = response.body.numeroserie
            this.quantite = response.body.quantite
          })
      }
      if (this.type === 'tpv') {
        this.$http.get('http://cfg-api.cleverapps.io/public/tpv/' + this.$route.params.id)
          .then(response => {
            this.designation = response.body.designation
            this.reference = response.body.reference
            this.numeroserie = response.body.numeroserie
            this.quantite = response.body.quantite
          })
      }
      if (this.type === 'logiciel') {
        this.$http.get('http://cfg-api.cleverapps.io/public/logiciel/' + this.$route.params.id)
          .then(response => {
            this.designation = response.body.designation
            this.reference = response.body.reference
            this.licence = response.body.licence
            this.quantite = response.body.quantite
          })
      }
    },
    // Modification d'un équipement
    modifEquipement () {
      if (this.type === 'serveur') {
        this.$http.put('http://cfg-api.cleverapps.io/public/serveur/' + this.$route.params.id, {
          'designation': this.designation,
          'reference': this.reference,
          'numeroserie': this.numeroserie,
          'quantite': this.quantite
        }, {emulateJSON: true})
          .then(this.listeEquipements())
      }
      if (this.type === 'tpv') {
        this.$http.put('http://cfg-api.cleverapps.io/public/tpv/' + this.$route.params.id, {
          'designation': this.designation,
          'reference': this.reference,
          'numeroserie': this.numeroserie,
          'quantite': this.quantite
        }, {emulateJSON: true})
          .then(this.listeEquipements())
      }
      if (this.type === 'logiciel') {
        this.$http.put('http://cfg-api.cleverapps.io/public/logiciel/' + this.$route.params.id, {
          'designation': this.designation,
          'reference': this.reference,
          'licence': this.licence,
          'quantite': this.quantite
        }, {emulateJSON: true})
          .then(this.listeEquipements())
      }
    },
    // Suppression d'un équipement
    suppEquipement () {
      if (this.type === 'serveur') {
        this.$http.delete('http://cfg-api.cleverapps.io/public/serveur/' + this.$route.params.id)
          .then(this.listeEquipements())
      }
      if (this.type === 'tpv') {
        this.$http.delete('http://cfg-api.cleverapps.io/public/tpv/' + this.$route.params.id)
          .then(this.listeEquipements())
      }
      if (this.type === 'logiciel') {
        this.$http.delete('http://cfg-api.cleverapps.io/public/logiciel/' + this.$route.params.id)
          .then(this.listeEquipements())
      }
    },
    // Retour à la liste des équipements
    listeEquipements () {
      this.$router.push({name: 'equipements', params: { id: this.$cookie.get('idMag') }})
    }
  },
  created () {
    this.detailsEquipement()
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
