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
    userVaults: {},

  },

  mutations: {
    login(state, payload) {
      state.user = payload
      state.loggedIn = true
    },
    logout(state) {
      state.user = {}
      state.loggedIn = false
    }
  },

  actions: {
    // CreateAccountExample() {
    //   api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
    // },
    // loginAndGetDataExample() {
    //   api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
    // },
    login({commit, dispath}, payload) {
      commit('login', payload)
    },
    signup({commit, dispath}, payload) {
      commit('login', payload)
    },
    logout({commit, dispath}) {
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
    }
  }
})

export default store