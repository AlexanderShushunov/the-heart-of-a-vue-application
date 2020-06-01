import Vue from 'vue'
import Vuex from 'vuex'
import { on } from './utils'
import { createClientDomain } from './client'
import { createBonusDomain } from './bonus'
import { createFraudDetectionDomain } from './fraudDetection'

Vue.use(Vuex)

const clientDomain = createClientDomain({ moduleKey: 'client' })
const bonusDomain = createBonusDomain({
  moduleKey: 'bonus',
  externalGetters: {
    getExperience: clientDomain.publicGetters.getExperience
  }
})
const fraudDomain = createFraudDetectionDomain({ moduleKey: 'fraud' })

export default new Vuex.Store({
  modules: {
    client: clientDomain.module,
    bonus: bonusDomain.module,
    fraud: fraudDomain.module
  },
  plugins: [
    on(bonusDomain.events.transactionComplete)(fraudDomain.handlers.checkTransaction)
  ]
})
