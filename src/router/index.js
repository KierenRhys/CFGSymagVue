import Vue from 'vue'
import Router from 'vue-router'
import ListeMagasins from '@/components/ListeMagasins'
import DetailsMagasin from '@/components/DetailsMagasin'
import AjoutMagasin from '@/components/AjoutMagasin'
import Connexion from '@/components/Connexion'
import ListeEquipements from '@/components/ListeEquipements'
import AjoutEquipement from '@/components/AjoutEquipement'
import DetailsEquipement from '@/components/DetailsEquipement'
import Deconnexion from '@/components/Deconnexion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'magasins',
      component: ListeMagasins
    },
    {
      path: '/magasin/:id',
      name: 'detail',
      component: DetailsMagasin
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AjoutMagasin
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: Connexion
    },
    {
      path: '/equipements',
      name: 'equipements',
      component: ListeEquipements
    },
    {
      path: '/ajoutEquip',
      name: 'ajoutEquip',
      component: AjoutEquipement
    },
    {
      path: '/detailsEquip',
      name: 'detailsEquip',
      component: DetailsEquipement
    },
    {
      path: '/deconnexion',
      name: 'deconnexion',
      component: Deconnexion
    }
  ]
})
