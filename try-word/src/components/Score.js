import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderStats } from '../store/actions';

class Score extends Component {
  handleClick = () => {
    const { renderStats } = this.props;

    const payload = { 
      stats: false,
    };

    return renderStats(payload);
  }

  render() {
    const { word } = this.props;

    return (
      <section id="score">
        <button id="closeScore" onClick={ this.handleClick }>x</button>
        <p>Em breve haverá o placar neste menu</p>
        { word && <p>{word}</p>}
      </section>
    );
  }
}

const mapStateToProps = ({ menus: { word } }) => ({
  word
});

const mapDispatchToProps = (dispatch) => ({
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Score);
