export const createClientDomain = ({
  moduleKey
}) => ({
  module: {
    namespaced: true,
    state: () => [{
      name: 'Sasha',
      registrationYear: 2018
    }, {
      name: 'Petya',
      registrationYear: 2020
    }],
    getters: {
      getExperience: state => name => {
        const client = state.find(client => client.name === name)
        if (!client) {
          return 0
        } else {
          return new Date().getFullYear() - client.registrationYear
        }
      }
    }
  },
  publicGetters: {
    getExperience: `${moduleKey}/getExperience`
  }
})
