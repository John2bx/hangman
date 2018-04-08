import React,{Component} from 'react'
import { connect } from 'react-redux'


class Board extends Component {
  constructor(props){
    super(props)
    this.state = {totalGuesses: 0,
    guessesLeft: 6,
  wordToGuess: '_____'}

    }
  render(){
    return <div>
    <h2 className='titleclass2'>Total guesses {this.state.totalGuesses}</h2>
    <h2 className='titleclass2'>Guesses left {this.state.guessesLeft}</h2>
    <h2 className='titleclass2'>wordToGuess {this.state.wordToGuess}</h2>

    <img/>
    </div>


  }
}

export default connect()(Board)
