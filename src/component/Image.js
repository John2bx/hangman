import React,{Component} from 'react'
import { connect } from 'react-redux'
import {wordToGuess} from '../reducers/wordAsDisplayed'
import pic1 from '../1.png';
import pic2 from '../2.png';
import pic3 from '../3.png';
import pic4 from '../4.png';
import pic5 from '../5.png';
import pic6 from '../6.png';
import pic7 from '../7.png';
import pic8 from '../8.png';




class Image extends Component {
render(){
if(this.props.guessesleft === 8) {return null}
else if (this.props.guessesleft === 7) {return <img src={pic1} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 6) {return <img src={pic2} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 5) {return <img src={pic3} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 4) {return <img src={pic4} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 3) {return <img src={pic5} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 2) {return <img src={pic6} style={{maxWidth:150}}/>}
else if (this.props.guessesleft === 1) {return <img src={pic7} style={{maxWidth:150}}/>}


}}


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
export default connect(mapStateToProps)(Image)
