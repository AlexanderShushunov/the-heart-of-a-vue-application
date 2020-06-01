export const makeHandler = globalActionType => (store, payload) => {
  return store.dispatch(
    globalActionType,
    payload
  )
}
