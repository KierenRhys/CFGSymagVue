<template>
  <v-container id="equipements">
    <v-tabs
      color="teal darken-1"
      dark
      slider-color="white"
      fixed-tabs=""
    >
      <v-tab ripple>
        Serveurs
      </v-tab>
      <v-tab ripple>
        Logiciels
      </v-tab>
      <v-tab ripple>
        TPVs
      </v-tab>
      <v-tab-item>
        <v-layout row wrap>
          <v-flex
            v-for="(serveur, i) in serveurs"
            :key=i
            xs12 sm6
          >
            <v-card class="equipement_card" hover>
              <v-layout row>
                <v-card-title>
                  <div class="headline">{{ serveur.designation }}</div>
                  <span class="grey--text">{{ serveur.reference }}</span>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn block @click.prevent="afficherDetailsServeur(serveur.id, 'serveur')" color="teal darken-1" dark>Détails</v-btn>
                </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-layout row wrap>
          <v-flex
            v-for="(logiciel, i) in logiciels" 
            :key=i
            xs12 sm6
          >
            <v-card class="equipement_card" hover>
              <v-layout row>
                <v-card-title>
                  <div class="headline">{{ logiciel.designation }}</div>
                  <span class="grey--text">{{ logiciel.reference }}</span>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn block @click.prevent="afficherDetailsLogiciel(logiciel.id, 'logiciel')" color="teal darken-1" dark>Détails</v-btn>
                </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item>
        <v-layout row wrap>
          <v-flex
            v-for="(tpv, i) in tpvs"
            :key=i
            xs12 sm6
          >
            <v-card class="equipement_card" hover>
              <v-layout row>
                <v-card-title>
                  <div class="headline">{{ tpv.designation }}</div>
                  <span class="grey--text">{{ tpv.reference }}</span>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn block @click.prevent="afficherDetailsTpv(tpv.id, 'tpv')" color="teal darken-1" dark>Détails</v-btn>
                </v-card-actions>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-tab-item>
    </v-tabs>
     <v-btn fab small to='/ajoutEquip' color="teal darken-1" dark class="btn_add">
      <v-icon>add</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      serveurs: '',
      logiciels: '',
      tpvs: ''
    }
  },
  methods: {
    // Appelle l'API qui renvoie la liste des serveurs pour un magasin
    listeServeurs () {
      this.$http.get('http://cfg-api.cleverapps.io/public/magasin/serveurs/' + this.$route.params.id)
        .then(response => {
          this.serveurs = response.body
        })
    },
    // Appelle l'API qui renvoie la liste des logiciels pour un magasin
    listeLogiciels () {
      this.$http.get('http://cfg-api.cleverapps.io/public/magasin/logiciels/' + this.$route.params.id)
        .then(response => {
          this.logiciels = response.body
        })
    },
    // Appelle l'API qui renvoie la liste des TPVs pour un magasin
    listeTpvs () {
      this.$http.get('http://cfg-api.cleverapps.io/public/magasin/tpvs/' + this.$route.params.id)
        .then(response => {
          this.tpvs = response.body
        })
    },
    // Affiche les détails du serveur sélectionné
    afficherDetailsServeur (id, type) {
      this.$router.push({name: 'detailsEquip', params: { id: id, type: type }})
    },
    // Affiche les détails du tpv sélectionné
    afficherDetailsTpv (id, type) {
      this.$router.push({name: 'detailsEquip', params: { id: id, type: type }})
    },
    // Affiche les détails du logiciel sélectionné
    afficherDetailsLogiciel (id, type) {
      this.$router.push({name: 'detailsEquip', params: { id: id, type: type }})
    }
  },
  mounted () {
    this.listeServeurs()
    this.listeLogiciels()
    this.listeTpvs()
    this.$cookie.set('idMag', this.$route.params.id, 1)
  }
}
</script>

<style scoped>
.equipement_card {
  margin: 20px;
}

.btn_add {
  position: fixed;
  bottom: 8%;
  right: 0px;
}
</style>
