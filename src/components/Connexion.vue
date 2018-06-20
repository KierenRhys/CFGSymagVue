<template>
 <v-container id="connexion" grid-list-md>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs12>
          <form>
            <v-text-field
              label="Nom d'utilisateur"
              v-model="login"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Mot de passe"
              :append-icon="visibility ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (visibility = !visibility)"
              :type="visibility ? 'password' : 'text'"
              required
            ></v-text-field>
            <v-btn @click="connexion" color="teal darken-1" dark>Connexion</v-btn>
          </form>
        </v-flex>
        <v-snackbar
          :timeout="timeout"
          v-model="snackbar"
          vertical
        >
          Identifiants incorrects
          <v-btn flat color="red" @click.native="snackbar = false">Fermer</v-btn>
        </v-snackbar>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
var sha512 = require('js-sha512')
export default {
  data () {
    return {
      visibility: true,
      'login': '',
      'password': '',
      idUtilisateur: '',
      snackbar: false,
      timeout: 8000
    }
  },
  methods: {
    // Connexion à l'application
    connexion () {
      this.$http.get('http://cfg-api.cleverapps.io/public/utilisateur/' + this.login + '/' + sha512(this.password))
        .then(response => {
          this.idUtilisateur = response.body
          if (this.idUtilisateur !== null) {
            this.$cookie.set('idUtilisateur', this.idUtilisateur, 1)
            this.$router.push('/')
          } else {
            this.snackbar = true
          }
        })
    },
    verifConnexion () {
      if (this.$cookie.get('idUtilisateur')) {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.verifConnexion()
  }
}
</script>

<style scoped>
.primary--text {
  color: teal !important;
}
</style>
