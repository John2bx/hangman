import React,{Component} from 'react'
import { connect } from 'react-redux'


class Board extends Component {
  constructor(props){
    super(props)
    this.state = {totalGuesses: 6}

  }
  render(){
    return <div>
    <h2 className='titleclass2'>Total guesses {this.state.totalGuesses}</h2>
    <h2 className='titleclass2'>Guesses left {this.props.guessesleft}</h2>
    <h2 className='titleclass2'>Word to Guess {this.props.word}</h2>
    <form>
  <label>
    Type a letter:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    <img/>
    </div>


  }
}
// src/containers/Board.js

// At the bottom of the file, where you connect your component:
const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    guessesleft: reduxState.guessesLeft,
    word: reduxState.word
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
