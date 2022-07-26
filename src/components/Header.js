import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStats, renderHelp } from '../store/actions';
import { help, stats, config } from '../helpers/icons';
import { StyledHeader, H1, P } from '../styles/Header';

class Header extends Component {
  handleClick = ({ currentTarget: { id } }) => {
    const { renderStats, renderHelp } = this.props;
    const payload = { stats: true };

    if (id === 'help') return renderHelp(true);
    if (id === 'stats') return renderStats(payload);
  }

  render() {
    return (
      <StyledHeader>
        <P id="help" onClick={ this.handleClick } help>{help()}</P>
        <H1>Try Word</H1>
        <P id="stats" onClick={ this.handleClick }>{stats()}</P>
        <P id="settings" onClick={ this.handleClick }>{config()}</P>
      </StyledHeader>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  renderHelp: (payload) => dispatch(renderHelp(payload)),
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(null, mapDispatchToProps)(Header);
