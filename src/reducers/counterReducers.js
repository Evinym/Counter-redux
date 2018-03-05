export const counterApp = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return (state = state + 1)
      break
    case 'DECREMENT':
      return (state = state - 1)
      break
  }
  return state
}
