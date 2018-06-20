<template>
 <v-container id="deconnexion" grid-list-md>
  </v-container>
</template>

<script>
export default {
  methods: {
    verifConnexion () {
      if (!this.$cookie.get('idUtilisateur')) {
        this.$router.push('/connexion')
      }
    },
    deconnexion () {
      this.$cookie.delete('idUtilisateur')
      this.$cookie.delete('idMag')
      this.verifConnexion()
    }
  },
  created () {
    this.deconnexion()
  }
}
</script>

<style scoped>
</style>