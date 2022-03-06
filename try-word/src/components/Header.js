import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStats } from '../store/actions';
import { help, stats, config } from '../services/icons';

class Header extends Component {
  handleClick = ({ currentTarget: { id } }) => {
    const { renderStats } = this.props;
    const payload = { stats: true };

    if (id === 'stats') return renderStats(payload);
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

const mapDispatchToProps = (dispatch) => ({
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(null, mapDispatchToProps)(Header);
