import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import './App.css';
import Score from './components/Score';
import Help from './components/Help';
import PopUp from './components/PopUp';

class App extends Component {
  render() {
    const { help, stats, settings, invalidWord } = this.props;

    return (
      <div>
        <Header />
        <Game />
        { invalidWord && <PopUp />}
        <Keyboard />
        { stats && <Score />}
        { help && <Help />}
      </div>
    );
  }
}

const mapStateToProps = ({ menus: { help, stats, settings, invalidWord } }) => ({
  help,
  stats,
  settings,
  invalidWord,
});

export default connect(mapStateToProps)(App);
