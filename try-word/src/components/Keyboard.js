import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown } from '../store/actions';
import { KEYS } from '../services/constants';
import { backspace } from '../services/icons';

class Keyboard extends Component {
  handleClick = ({ target: { id } }) => {
    const { setKey } = this.props;

    setKey(id);
  }

  handleDelete = () => {
    const { setKey } = this.props;
    const currentLetter = document.querySelector('.letterOnFocus');

    setKey('');
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
              onClick={ key === 'ç' ? this.handleDelete : this.handleClick }
              className="key"
              disabled={ key === 'ENTER' && lastLetter ? true : false }
            >
              {key === 'ç' ? backspace() : key}
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
