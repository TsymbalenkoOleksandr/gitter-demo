const PRESS_BUT = 'PRESS_BUT'
const initialState = []

export default function rootReducer(state = initialState, action) {
  if (action.type == PRESS_BUT) {
    return [...state, action.payload ]
  } else {
   return state
 }
}
