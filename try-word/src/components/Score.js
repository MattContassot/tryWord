import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStats } from '../store/actions';

class Score extends Component {
  handleClick = () => {
    const { renderStats } = this.props;

    return renderStats(false);
  }

  render() {
    return (
      <section id="score">
        <button id="closeScore" onClick={ this.handleClick }>x</button>
        <p>Em breve haverá o placar neste menu</p>        
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(null, mapDispatchToProps)(Score);
