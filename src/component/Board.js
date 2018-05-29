import React,{Component} from 'react'
import { connect } from 'react-redux'
import {wordToGuess} from '../reducers/wordAsDisplayed'
import {takeGuess} from '../actions/guess'
import './Board.css';
import pic1 from '../1.png';
import pic2 from '../2.png';
import pic3 from '../3.png';
import pic4 from '../4.png';
import pic5 from '../5.png';
import pic6 from '../6.png';
import pic7 from '../7.png';
import pic8 from '../8.png';
import Image from './Image'




class Board extends Component {
  constructor(props) {
     super(props);
     this.state = {value: ''};

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     // this.showImage = this.showImage.bind(this)
   }
   // showImage(){return 'pic'+this.props.guessesleft}


   handleChange(event) {
       this.setState({value: event.target.value});
       this.props.takeGuess(this.state.value)
     }

     handleSubmit(event) {
       event.preventDefault()

       console.log('i am here',event.target.value)
       this.props.takeGuess(event.target.value)


     }
     gameboard(){return <div className="Board" >
     <Image/>

     <h2 className='Left'>Total guesses 6</h2>
     <h2 className='Left'>Guesses left {this.props.guessesleft}</h2>
     <h2 className='Center'>Word to Guess</h2>
     <h1 className='Center'>{this.props.wordAsDisplayed.map(function(letter){return letter +" "})}</h1>

         <label>
           <h2>Pick a letter:</h2>
<div className='keyboard'>
            <form>
             <input type="submit" className='board' value="a" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="b" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="c" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="d" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="e" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="f" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="g" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="h" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="i" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="j" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="k" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="l" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="m" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="n" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="o" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="p" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="q" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="r" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="s" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="t" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="u" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="v" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="w" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="x" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="y" onClick={this.handleSubmit}/>
             <input type="submit" className='board' value="z" onClick={this.handleSubmit}/>


           </form>
  </div>
         </label>



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
export default connect(mapStateToProps,{takeGuess})(Board)
