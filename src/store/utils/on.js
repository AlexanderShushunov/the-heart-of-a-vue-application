export const on = mutationType => {
  const types = Array.isArray(mutationType) ? mutationType : [mutationType]
  return handler => {
    const ret = store => {
      const unsubscribe = store.subscribe(
        mutation => {
          if (types.includes(mutation.type)) {
            handler(store, mutation.payload)
            if (ret.runOnlyOnce) {
              // timout fixes the problem: https://github.com/vuejs/vuex/pull/1438
              setTimeout(unsubscribe, 0)
            }
          }
        }
      )
    }
    ret.once = () => {
      ret.runOnlyOnce = true
      return ret
    }
    return ret
  }
}
