import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//trhinehart-keepr.herokuapp.com/' : '//localhost:5000/';

let api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 10000,
  withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
  state: {
    user: {},
    loggedIn: false,
    userVaults: [
      // { id: 1, title: 'Tigers', description: 'cool tiger keeps' },
      // { id: 2, title: 'Bears', description: 'cool bear keeps' }
    ],
    homeKeeps: [
      //   { id: 1, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      //   { id: 2, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' },
      //   { id: 3, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      //   { id: 4, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' },
      //   { id: 5, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      //   { id: 6, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' }
    ],
    activeVault: {},
    activeVaultKeeps: [],
    activeKeep: {},
    showBottomVaultsBar: false,
    selectedKeep: ''
  },

  mutations: {
    login(state, payload) {
      state.user = payload
      state.loggedIn = true
    },
    logout(state) {
      state.user = {}
      state.loggedIn = false
    },
    addVault(state, payload) {
      state.userVaults.push(payload)
    },
    findKeep(state, payload) {
      state.activeKeep = state.homeKeeps.find(k => k.id == payload)
    },
    clearActiveKeep(state) {
      state.activeKeep = {}
    },
    addKeep(state, payload) {
      state.homeKeeps.push(payload)
    },
    addToVault(state, payload) {

    },
    showBottomVaultsBar(state) {
      state.showBottomVaultsBar = !state.showBottomVaultsBar
    },
    findVault(state, payload) {
      state.activeVault = state.userVaults.find(v => v.id == payload)
    },
    updateKeeps(state, payload) {
      state.homeKeeps = payload
    },
    updateVaults(state, payload) {
      state.userVaults = payload
    },
    selectKeep(state, payload) {
      state.selectedKeep = payload
    },
    setActiveVault(state, payload) {
      state.activeVault = payload
    }
  },

  actions: {
    login({ commit, dispatch }, payload) {
      api.post('account/login', payload).then((res) => {
        commit('login', res.data)
      })
        .then(() => {
          dispatch('getUserVaults')
        })
        .catch((err) => console.error(err))
    },
    signup({ commit, dispath }, payload) {
      api.post('account', payload).then((res) => {
        commit('login', res.data)
      })
        .catch((err) => console.error(err))
    },
    logout({ commit, dispatch }) {
      api.delete('account/logout').then(() => {
        commit('logout')
        router.push('/')
      })
    },
    getAuth({ commit, dispatch }) {
      api('account').then(res => {
        if (!res.data.email) {
          return router.push('/')
        }
        var user = {
          id: res.data.id,
          email: res.data.email,
          userName: res.data.userName,
          profileImgUrl: res.data.profileImgUrl
        }
        commit('login', user)
      })
        .then(() => {
          dispatch('getUserVaults')
        })
        .catch((err) => console.error(err))
    },
    addVault({ commit, dispatch }, payload) {
      payload.userId = this.state.user.id
      payload.vaultKeeps = []
      api.post('vaults', payload).then((res) => {
        // commit('addVault', res)
        dispatch('getUserVaults')
      })
    },
    findKeep({ commit, dispatch }, payload) {
      commit('findKeep', payload)
    },
    clearActiveKeep({ commit, dispatch }) {
      commit(clearActiveKeep)
    },
    addKeep({ commit, dispatch }, payload) {
      payload.userId = this.state.user.id
      api.post('keeps', payload).then((res) => {
        // commit('addKeep', payload)
        dispatch('getKeeps')
      })
    },
    addToVault({ commit, dispatch }, payload) {
      payload.keepId = this.state.selectedKeep
      api.post('vaults/' + payload.vaultId + '/addkeep/' + this.state.selectedKeep).then((res) => {
        console.log(res)
        // commit('addToVault', payload)
      })
    },
    showBottomVaultsBar({ commit, dispatch }) {
      commit('showBottomVaultsBar')
    },
    getVaultKeeps({ commit, dispatch }, payload) {
      api('vaults/' + this.state.user.id + '/uservaults/' + payload).then((res) => {
        console.log(res)
        // commit('findVault', payload)
      })
    },
    getKeeps({ commit, dispatch }) {
      api('keeps').then((res) => {
        commit('updateKeeps', res.data)
      })
    },
    getUserVaults({ commit, dispatch }) {
      api('vaults/' + this.state.user.id + '/uservaults').then((res) => {
        commit('updateVaults', res.data)
      })
    },
    selectKeep({ commit, dispatch }, payload) {
      commit('selectKeep', payload)
    },
    setActiveVault({commit, dispatch}, payload) {
      commit('setActiveVault', payload)
    }
  }
})

export default store