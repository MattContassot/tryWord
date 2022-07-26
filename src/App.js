import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import Score from './components/Score';
import Help from './components/Help';
import PopUp from './components/PopUp';
import './styles/Reset.css';
import { Body } from './styles/GlobalStyle';

class App extends Component {
  render() {
    const { help, stats, settings, invalidWord } = this.props;

    return (
      <Body>
        <Header />
        <Game />
        { invalidWord && <PopUp />}
        <Keyboard />
        { stats && <Score />}
        { help && <Help />}
      </Body>
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
