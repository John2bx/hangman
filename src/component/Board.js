import React,{Component} from 'react'
import { connect } from 'react-redux'
import guessesleft from '../reducers/guessesleft'
import {wordToGuess} from '../reducers/wordAsDisplayed'
import './Board.css';




class Board extends Component {
  constructor(props) {
     super(props);
     this.state = {value: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   guessedLetter(letter){

     this.props.dispatch({type:"TAKE_GUESS", payload: this.state.value})
   }

   handleChange(event) {
       this.setState({value: event.target.value});
     }

     handleSubmit(event) {
       // this.decrementGuessesLeft()
       this.guessedLetter(this.state.value)
       event.preventDefault();

     }
     gameboard(){return <div className="Board" >
     <h2 className='Left'>Total guesses 6</h2>
     <h2 className='Left'>Guesses left {this.props.guessesleft}</h2>
     <h2 className='Center'>Word to Guess</h2>
     <h1 className='Center'>{this.props.wordAsDisplayed.map(function(letter){return letter +" "})}</h1>
     <form className='Center' onSubmit={this.handleSubmit}>
         <label>
           <h2>Pick a letter:</h2>
            <select className='Center'  value={this.state.value} onChange={this.handleChange}>
             <option value="a">A</option>
             <option value="b">B</option>
             <option value="c">C</option>
             <option value="d">D</option>
             <option value="e">E</option>
             <option value="f">F</option>
             <option value="g">G</option>
             <option value="h">H</option>
             <option value="i">I</option>
             <option value="j">J</option>
             <option value="k">K</option>
             <option value="l">L</option>
             <option value="m">M</option>
             <option value="n">N</option>
             <option value="o">O</option>
             <option value="p">P</option>
             <option value="q">Q</option>
             <option value="r">R</option>
             <option value="s">S</option>
             <option value="t">T</option>
             <option value="u">U</option>
             <option value="v">V</option>
             <option value="w">W</option>
             <option value="x">X</option>
             <option value="y">Y</option>
             <option value="z">Z</option>


           </select>
         </label>
         <input type="submit" value="Submit" />
       </form>

     </div>
 }

     checkifLose(){if (this.props.guessesleft === 0){return true}
     else {false}
   }
     checkIfWin(){
       console.log(this.props.wordAsDisplayed)
       console.log(wordToGuess)
       if (!(this.props.wordAsDisplayed.includes('_'))){return true;
       console.log('you win!') }
       else {return false}}



  render(){ if (this.checkIfWin()){return <h1 className='Big'> you won!</h1>}
  else if (this.checkifLose()){return <h1 className='Big'> you lost!</h1>}
  else {return this.gameboard()}

  }
}
// src/containers/Board.js

// At the bottom of the file, where you connect your component:
const mapStateToProps = (reduxState) => {
  // return an object with the prop names (keys) and prop values
  // taken from the reduxState (values)
  return {
    guessesleft: reduxState.guessesleft,
    wordAsDisplayed: reduxState.wordAsDisplayed
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
