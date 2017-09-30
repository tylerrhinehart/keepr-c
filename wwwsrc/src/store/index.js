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
      { id: 1, title: 'Tigers', description: 'cool tiger keeps' },
      { id: 2, title: 'Bears', description: 'cool bear keeps' }
    ],
    homeKeeps: [
      { id: 1, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      { id: 2, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' },
      { id: 3, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      { id: 4, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' },
      { id: 5, private: false, title: 'Tigers are cool!', description: 'Tigers live in Asia', imgUrl: 'https://static.pexels.com/photos/516541/pexels-photo-516541.jpeg' },
      { id: 6, private: false, title: 'Mountains', description: 'Snowy mountains underneath a star-filled night sky', imgUrl: 'https://static.pexels.com/photos/291732/pexels-photo-291732.jpeg' }
    ],
    activeVault: {},
    activeVaultKeeps: [],
    activeKeep: {},
    showBottomVaultsBar: false
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
      console.log(state.userVaults)
    },
    findKeep(state, payload) {
      state.activeKeep = state.homeKeeps.find(k => k.id == payload)
    },
    clearActiveKeep(state) {
      state.activeKeep = {}
    },
    addKeep(state, payload) {
      console.log(payload)
      state.homeKeeps.push(payload)
    },
    addToVault(state, payload) {

    },
    showBottomVaultsBar(state) {
      state.showBottomVaultsBar = !state.showBottomVaultsBar
    },
    findVault(state, payload) {
      state.activeVault = state.userVaults.find(v => v.id == payload)
    }
  },

  actions: {
    // CreateAccountExample() {
    //   api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
    // },
    // loginAndGetDataExample() {
    //   api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
    // },
    login({ commit, dispath }, payload) {
      commit('login', payload)
    },
    signup({ commit, dispath }, payload) {
      commit('login', payload)
    },
    logout({ commit, dispath }) {
      // api.delete('account/logout')
      commit('logout')
    },
    GetDataExample() {
      api('values').then(d => {
        console.log("Values Controller Data:", d)
      }).catch(err => {
        console.error(err)
      })
    },
    getAuth() {
      api('account').then(res => {
        console.log("Auth Response", res)
      })
    },
    addVault({ commit, dispatch }, payload) {
      commit('addVault', payload)
    },
    findKeep({ commit, dispatch }, payload) {
      commit('findKeep', payload)
    },
    clearActiveKeep({ commit, dispatch }) {
      commit(clearActiveKeep)
    },
    addKeep({ commit, dispatch }, payload) {
      commit('addKeep', payload)
    },
    addToVault({ commit, dispatch }, payload) {
      commit('addToVault', payload)
    },
    showBottomVaultsBar({ commit, dispatch }) {
      commit('showBottomVaultsBar')
    },
    findVault({ commit, dispatch }, payload) {
      commit('findVault', payload)
    }
  }
})

export default store