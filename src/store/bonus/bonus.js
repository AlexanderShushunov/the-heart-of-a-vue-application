export const createBonusDomain = ({
  moduleKey,
  externalGetters: {
    getExperience
  }
}) => ({
  module: {
    namespaced: true,
    state: () => ({
      'Sasha': 100,
      'Petya': 20.5
    }),
    actions: {
      processBonus: ({ commit, rootGetters }, { name, value }) => {
        const experience = rootGetters[getExperience](name)
        let points = calcPoints(experience, value)
        commit('addPoints', { name, points })
        commit('transactionComplete', points)
      }
    },
    mutations: {
      addPoints: (state, { name, points }) => {
        const prev = state[name] || 0
        state[name] = prev + points
      },
      // events
      transactionComplete: () => {}
    }
  },
  events: {
    transactionComplete: `${moduleKey}/transactionComplete`
  }
})

function calcPoints (experience, value) {
  if (experience > 1) {
    return value * 2
  }
  return value
}
