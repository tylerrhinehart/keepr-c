import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserVaults from '@/components/UserVaults'
import Vault from '@/components/Vault'
import Keep from '@/components/Keep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vaults',
      name: 'UserVaults',
      component: UserVaults
    },
    {
      path: '/vaults/:vaultId',
      name: 'Vault',
      component: Vault
    },
    {
      path: '/keeps/:keepId',
      name: 'Keep',
      component: Keep
    }
  ]
})
