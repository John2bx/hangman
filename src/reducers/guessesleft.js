import { TAKE_GUESS } from '../actions/types'

const initialState = 6

export default (state = initialState, { type, payload } = {}) => {
    switch(type) {
      case TAKE_GUESS:
        if (state>0){
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
