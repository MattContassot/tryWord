import React, { Component } from 'react';
import { help, stats, config } from '../services/icons';

class Header extends Component {
  handleClick = ({ currentTarget: { id } }) => {
    console.log(id);
  }

  render() {
    return (
      <header>
        <p id="help" onClick={ this.handleClick }>{help()}</p>
        <h1>Try Word</h1>
        <p id="stats" onClick={ this.handleClick }>{stats()}</p>
        <p id="settings" onClick={ this.handleClick }>{config()}</p>
      </header>
    );
  }
}

export default Header;
