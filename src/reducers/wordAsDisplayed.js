import { TAKE_GUESS } from '../actions/types'
import guessesleft from './guessesleft'

const wordList = ['hello','baby','football','coding']
const wordToPutInArray = wordList[Math.floor((Math.random() * wordList.length) + 1)]
export const wordToGuess = Array.from(wordToPutInArray)
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
