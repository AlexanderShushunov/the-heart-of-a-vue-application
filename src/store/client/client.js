export const client = {
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
      const ModuleD = state.find(client => client.name === name)
      if (!ModuleD) {
        return 0
      } else {
        return new Date().getFullYear() - ModuleD.registrationYear
      }
    }
  }
}
