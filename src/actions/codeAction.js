export function setCode(todo) {
  return {
    type: 'setCode',
    payload: todo
  }
}

export function failCode(todo) {
  return {
    type: 'failCode',
    payload: todo
  }
}