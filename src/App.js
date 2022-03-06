import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Game from './components/Game';
import Keyboard from './components/Keyboard';
import './App.css';
import Score from './components/Score';
import Help from './components/Help';

class App extends Component {
  render() {
    const { help, stats, settings } = this.props;

    return (
      <div>
        <Header />
        <Game />
        <Keyboard />
        { stats && <Score />}
        { help && <Help />}
      </div>
    );
  }
}

const mapStateToProps = ({ menus: { help, stats, settings } }) => ({
  help,
  stats,
  settings,
});

export default connect(mapStateToProps)(App);
