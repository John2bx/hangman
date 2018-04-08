import { TAKE_GUESS } from '../actions/types'
import guessesleft from './guessesleft'

export const wordToGuess = ['h','e','l','l','o']
const initialState = wordToGuess.map(function(l){return '_'})
let guessesSoFar = []

export default (state = initialState, { type, payload } = {}) => {

  switch(type) {
    case TAKE_GUESS:



      guessesSoFar = guessesSoFar.concat(payload)
      return  wordToGuess.map(function(letter){
        if (guessesSoFar.includes(letter)){return letter}
        else {return '_'}
      })


  default:
    return state
}}
