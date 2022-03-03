import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <button type="button" id="help">?</button>
        <h1>Try Word</h1>
        <button>Placar</button>
        <button>Config</button>
      </header>
    );
  }
}

export default Header;
