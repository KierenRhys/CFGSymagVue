<template>
  <div id="app">
    <v-app>
      <!-- Top toolbar -->
      <v-toolbar fixed app color="teal darken-1" dark>
        <a href="/"><img src="http://www.symag.com/sites/all/themes/lasersymag/assets/images/logo.png" height="40px" width="80px" alt="logo"></a>
        <v-toolbar-title>
          CFG Symag
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="this.$cookie.get('idUtilisateur')" to="/deconnexion" color="teal darken-1" dark>Déconnexion</v-btn>
        <router-link to="/">
          <v-icon>home</v-icon>
        </router-link>
      </v-toolbar>

      <!-- Content -->
      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    
      <!-- Menu bottom -->
      <v-footer fixed>
        <v-bottom-sheet v-model="sheet" class="bottom_sheet">
          <v-btn slot="activator" class="btn_menu" color="teal darken-1" dark>
            <v-icon>menu</v-icon>
          </v-btn>
          <v-list>
            <v-subheader>Que faire ?</v-subheader>
            <v-list-tile 
              router
              :to="item.to"
              v-for="(item, i) in items"
              :key="i"
              exact
              @click="sheet = false"
            >
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-bottom-sheet>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: () => ({
      sheet: false,
      items: [
        { icon: 'format_align_left', title: 'Liste des magasins', to: '/' },
        { icon: 'create', title: 'Ajout d\'un magasin', to: '/ajout' },
        { icon: 'settings', title: 'Connexion', to: '/connexion' }
      ]
    }),
    verifConnexion () {
      if (!this.$cookie.get('idUtilisateur')) {
        this.$router.push('/connexion')
      }
    }
  }
</script>

<style>
.bottom_sheet {
  width: 98.5%;
}

.btn_menu {
  width: 100%;
}
</style>
