import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown, enableEnter } from '../store/actions';
import { ATTEMPTS } from '../services/constants';
import { selectWord, validateWord } from '../services/functions';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      keyTyped: '',
      word: '',
      words: {
        attempt1: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
        attempt2: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
        attempt3: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
        attempt4: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
        attempt5: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
        attempt6: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        },
      }
    }
  }

  componentDidMount() {
    const firstLetter = document.querySelector('#a1-l1');
    firstLetter.classList.add('letterOnFocus');

    this.setState({ word: selectWord() });

    return firstLetter.focus();
  }

  componentDidUpdate(prevProps) {
    const { keyDown } = this.props;

    if (prevProps.keyDown !== keyDown) {
      this.setState({ keyTyped: keyDown });
    }
  }

  focusNextLetter = (currentLetter) => {
    const onFocus = document.querySelector('.letterOnFocus');
    onFocus.classList.remove('letterOnFocus');

    const lastNumberId = Number(currentLetter.substring(4, 5)) + 1;
    let nextLetter = document.querySelector(`#${currentLetter.substring(0, 4) + lastNumberId}`);

    if (lastNumberId > 5) {
      const nextAttempt = Number(currentLetter.substring(1, 2)) + 1;
      nextLetter = document.querySelector(`#a${nextAttempt}-l1`);
    }

    if (currentLetter === 'a6-l5') return console.log('chamar o placar');

    nextLetter.classList.add('letterOnFocus');

    return nextLetter.focus();
  };

  handleChange = ({ nativeEvent: { data: key }, target: { id } }) => {
    const attempt = `attempt${id.slice(1 , 2)}`;
    const letter = `letter${id.slice(4, 5)}`;

    const { setKey, enableEnter } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      words: {
        ...prevState.words,
        [attempt]: {
          ...prevState.words[attempt],
          [letter]: key.toUpperCase(),
    }}}));

    setKey(key);

    if (id.substring(4, 5) === '5') return enableEnter();

    this.focusNextLetter(id);
  }

  handleEnterKey = () => {
    const attemptId = `attempt${document.querySelector('.letterOnFocus').id.substring(1, 2)}`;
    const { words: { [attemptId]: attempt }, word } = this.state;

    const wordTried = Object.values(attempt);
    
    if (word === wordTried.join('')) return console.log('colocar todas palavras verde e chamar o placar');
    validateWord(word, [...wordTried], attemptId);
  }

  renderForm = () => {
    const { words: {
      attempt1: { letter1: a1l1, letter2: a1l2, letter3: a1l3, letter4: a1l4, letter5: a1l5 },
      attempt2: { letter1: a2l1, letter2: a2l2, letter3: a2l3, letter4: a2l4, letter5: a2l5 },
      attempt3: { letter1: a3l1, letter2: a3l2, letter3: a3l3, letter4: a3l4, letter5: a3l5 },
      attempt4: { letter1: a4l1, letter2: a4l2, letter3: a4l3, letter4: a4l4, letter5: a4l5 },
      attempt5: { letter1: a5l1, letter2: a5l2, letter3: a5l3, letter4: a5l4, letter5: a5l5 },
      attempt6: { letter1: a6l1, letter2: a6l2, letter3: a6l3, letter4: a6l4, letter5: a6l5 },
    } } = this.state;
    let formRendered = [];

    for (let i = 1; i <= ATTEMPTS; i += 1) {
      const newAttempt = [];

      for (let j = 1; j <= ATTEMPTS - 1; j += 1) {
        newAttempt.push(
          <input
            key={ `a${i}-l${j}` }
            id={ `a${i}-l${j}` }
            type="text"
            className={ i !== 1 ? "wordBox currentAttemp" : "wordBox" }
            maxLength="1"
            value={ eval(`a${i}l${j}`) }
            onChange={ this.handleChange }
            disabled={ i !== 1 ? true : false }
            autoComplete="off"
          />
        );
      }

      formRendered.push(
        <form id={ `attempt-${i}` } key={ i }>
          {newAttempt}
        </form>
      );
    }

    return formRendered;
  }

  render() {
    const { keyTyped } = this.state;
    
    if (keyTyped === 'ENTER') this.handleEnterKey();

    return (
      <main>
        { this.renderForm() }
      </main>
    );
  }
}

const mapStateToProps = ({ keyDown }) => ({
  keyDown,
});

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(sendKeyDown(key)),
  enableEnter: () => dispatch(enableEnter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
