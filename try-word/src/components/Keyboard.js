import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown } from '../store/actions';
import { KEYS } from '../services/constants';

class Keyboard extends Component {
  handleClick = ({ target: { id } }) => {
    const { setKey } = this.props;

    setKey(id);
  }

  render() {
    const { lastLetter } = this.props;

    return (
      <footer>
        {
          KEYS.map((key, index) => (
            <button
              id={ key }
              type="button"
              key={ index }
              onClick={ this.handleClick }
              className="key"
              disabled={ lastLetter ? true : false }
            >
              {key}
            </button>
          ))
        }
      </footer>
    );
  }
}

const mapStateToProps = ({ lastLetter }) => ({
  lastLetter,
});

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(sendKeyDown(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
