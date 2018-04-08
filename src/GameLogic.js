
 let filteredArray = guesses.filter(function(letter) {
  if (word.indexOf(letter) > -1) {
   return letter
  }
 })
 return filteredArray.length
}
​
// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2)
​
function showGuess(word, guesses) {
 const splittedWord = word.split('')
 let guessedWord = splittedWord.map(function(letter) {
  if(guesses.indexOf(letter) > -1) {
   return letter
  } else {
   return '_'
  }
 })
​
 return guessedWord.join(' ')
}
​
// console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _')
// console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _')
​
function isWinner(word, guesses) {
 const splittedWord = word.split('')
 let guessedWord = splittedWord.filter(function(letter) {
  if(guesses.indexOf(letter) > -1) {
   return letter
  }
 })
​
 return guessedWord.length == word.length;
}
​
// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))
​
// to read from the console
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
​
function next(word, guesses) {
 // check if lost
 if (guesses.length >= 6) {
  console.log('YOU LOSE')
  process.exit()
 }
 // check if won
 if (isWinner(word, guesses)) {
  console.log('YOU WIN')
  process.exit()
 }
​
 console.log(showGuess(word, guesses));
​
 // ask for the next letter
  rl.question('next letter? ', answer => {
   guesses.push(answer);
   next(word, guesses);
//     console.log('player wrote:', answer)
    // do something with answer
  })
}
​
next('hello', [])
