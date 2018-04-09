import React, { Component } from 'react';
import './App.css';
import Board from './component/Board';
import Image from './component/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to the hangmen game!</h1>
        </header>
        <Board/>
        <Image/>


      </div>
    );
  }
}

export default App;
