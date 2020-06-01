import { makeHandler } from '../utils'

export const createFraudDetectionDomain = ({
  moduleKey
}) => ({
  module: {
    namespaced: true,
    state: () => ({
      alarm: false
    }),
    actions: {
      check: ({ commit }, value) => {
        console.log(value)
        if (value > 150) {
          commit('turnAlarmOn')
        }
      }
    },
    mutations: {
      turnAlarmOn: state => state.alarm = true,
      turnAlarmOff: state => state.alarm = false
    }
  },
  handlers: {
    checkTransaction: makeHandler(`${moduleKey}/check`)
  }
})
