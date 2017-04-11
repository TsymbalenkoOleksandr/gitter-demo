export function setCode(todo) {
  return {
    type: 'setCode',
        isFetching: true,
    isAuthenticated: false,
    payload: todo
  }
}