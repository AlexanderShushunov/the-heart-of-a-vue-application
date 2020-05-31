import Vue from 'vue'
import Vuex from 'vuex'
import { client } from './client'
import { bonus } from './bonus'
import { fraudDetection } from './fraudDetection'

Vue.use(Vuex)

export default new Vuex.Store({
   modules: {
     client,
     bonus,
     fraud: fraudDetection
  }
})
