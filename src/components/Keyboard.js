import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown } from '../store/actions';
import { KEYS } from '../services/constants';
import { backspace } from '../services/icons';

class Keyboard extends Component {
  constructor() {
    super();

    this.state = {
      toggleLastLetter: true,
    }
  }

  handleClick = ({ target: { id } }) => {
    const { setKey } = this.props;

    setKey(id, true);
  }

  handleDelete = () => {
    const { setKey } = this.props;
    const { toggleLastLetter } = this.state;
    const currentLetter = document.querySelector('.letterOnFocus');

    if (currentLetter.id.substring(4, 5) !== '1') {
      const previousLetterId = `${currentLetter.id.substring(0, 4)}${Number(currentLetter.id.substring(4, 5)) - 1}`
      const previousLetter = document.querySelector(`#${previousLetterId}`);

      if (currentLetter.id.substring(4, 5) === '5' && toggleLastLetter && currentLetter.value !== '') {
        this.setState({ toggleLastLetter: false });
        return setKey('deleteLast', true);
      }

      this.setState({ toggleLastLetter: true });

      currentLetter.classList.remove('letterOnFocus');
      previousLetter.classList.add('letterOnFocus');
      previousLetter.focus();
      return setKey('delete', true);
    }

    setKey('', true);
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
  setKey: (key, virtualKeyboard) => dispatch(sendKeyDown(key, virtualKeyboard)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
