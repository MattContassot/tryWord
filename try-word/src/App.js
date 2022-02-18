import React, { Component } from 'react';
import Header from './components/Header';
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Game />
        <Keyboard />
      </div>
    );
  }
}

export default App;
