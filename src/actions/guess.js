import { TAKE_GUESS } from './types'


export const takeGuess = (letter) => {
  return {
    type: TAKE_GUESS,
    payload: {
      guessesLeft
    }
  }
}
