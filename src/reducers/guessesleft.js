import { TAKE_GUESS } from '../actions/types'
import {wordToGuess} from './wordAsDisplayed.js'
const initialState = 8

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case TAKE_GUESS:
      console.log(wordToGuess)
        if (!wordToGuess.includes(payload)){
        return state - 1}
        else {return state}
    default:
      return state


    }


}
// export default (state = emptyBoard, { type, payload } = {}) => {
//   switch (type) {
//     case CREATE_GAME :
//       return [].concat(payload.board)
//
//     default :
//       return state
//   }
// }
