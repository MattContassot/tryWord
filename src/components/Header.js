import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStats, renderHelp } from '../store/actions';
import { help, stats, config } from '../services/icons';

class Header extends Component {
  handleClick = ({ currentTarget: { id } }) => {
    const { renderStats, renderHelp } = this.props;
    const payload = { stats: true };

    if (id === 'help') return renderHelp(true);
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
  renderHelp: (payload) => dispatch(renderHelp(payload)),
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(null, mapDispatchToProps)(Header);
