export const bonus = {
  namespaced: true,
  state: () => ({
    'Sasha': 100,
    'Petya': 20.5
  }),
  actions: {
    processBonus: ({ commit, dispatch, rootGetters }, { name, value }) => {
      const experience = rootGetters['client/getExperience'](name)
      let points = calcPoints(experience, value)
      commit('addPoints', { name, points })
      dispatch('fraud/check', points, { root: true })
    }
  },
  mutations: {
    addPoints: (state, { name, points }) => {
      const prev = state[name] || 0
      state[name] = prev + points
    }
  }
}

function calcPoints (experience, value) {
  if (experience > 1) {
    return value * 2
  }
  return value
}
