import React,{Component} from 'react'
import { connect } from 'react-redux'


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

  render(){
    return <div>
    <h2 className='titleclass2'>Total guesses 6</h2>
    <h2 className='titleclass2'>Guesses left {this.props.guessesleft}</h2>
    <h2 className='titleclass2'>Word to Guess</h2>
    <h1>{this.props.wordAsDisplayed.map(function(letter){return letter +" "})}</h1>
    <form onSubmit={this.handleSubmit}>
        <label>
          Pick a letter:
           <select value={this.state.value} onChange={this.handleChange}>
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
    guessesleft: reduxState.guessesleft,
    wordAsDisplayed: reduxState.wordAsDisplayed
  }
}

// Then pass it to connect:
export default connect(mapStateToProps)(Board)
