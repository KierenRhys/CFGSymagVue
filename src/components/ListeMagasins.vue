<template>
  <v-container id="magasins">
    <v-layout row wrap>
      <v-flex
        v-for="(magasin, i) in magasins" 
        :key=i
        xs12 sm6
      >
        <v-card class="magasin_card" hover>
          <v-layout row>
            <v-flex xs7>
              <v-card-title primary-title xs7>
                <div>
                  <div class="headline">{{ magasin.site }}</div>
                  <span class="grey--text">{{ magasin.enseigne }}</span>
                  <div>{{ magasin.dateajout }}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs5>
              <v-card-media
                :src=magasin.logo
                height="125px"
                contain
              ></v-card-media>
            </v-flex>
          </v-layout>
          <v-card-actions>
            <v-btn block @click="afficherDetails(magasin.id)" color="teal darken-1" dark>Détails</v-btn>
            <v-btn icon @click="sendMail(magasin.id)">
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-btn fab small to='/ajout' color="teal darken-1" dark class="btn_add">
        <v-icon>add</v-icon>
      </v-btn>
      <v-snackbar
        :timeout="timeout"
        v-model="snackbar"
        vertical
      >
        Mail envoyé avec succés !
        <v-btn flat color="teal" @click.native="snackbar = false">Fermer</v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      magasins: '',
      'msg': '',
      snackbar: false,
      timeout: 8000
    }
  },
  methods: {
    // Lien vers l'affichage des détails du magasin
    afficherDetails (id) {
      this.$router.push({name: 'detail', params: { id: id }})
    },
    // Appelle l'API qui renvoie la liste des magasins
    listeMagasins () {
      if (navigator.onLine) {
        this.$nextTick()
        this.$http.get('http://cfg-api.cleverapps.io/public/magasins/' + this.$cookie.get('idUtilisateur'))
          .then(response => {
            this.magasins = response.body
            localStorage.setItem('magasins', JSON.stringify(response.body))
          })
      } else {
        this.magasins = JSON.parse(localStorage.getItem('magasins'))
      }
    },
    // Appelle l'API qui permet d'envoyer un mail avec les données du magasin et de ses équipements
    sendMail (id) {
      this.$http.get('http://cfg-api.cleverapps.io/public/mail/' + id)
      this.snackbar = true
    },
    // Vérification de la connexion
    verifConnexion () {
      if (!this.$cookie.get('idUtilisateur')) {
        this.$router.push('/connexion')
      }
    }
  },
  created () {
    this.verifConnexion()
  },
  mounted () {
    this.listeMagasins()
  }
}
</script>

<style scoped>
.magasin_card {
  margin: 20px;
}

.btn_add {
  position: fixed;
  bottom: 8%;
  right: 0px;
}
</style>
