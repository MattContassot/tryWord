import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown, enableEnter, renderStats } from '../store/actions';
import { ATTEMPTS } from '../services/constants';
import { correctWord, selectWord, validateWord, focusNextLetter } from '../services/functions';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      mobile: false,
      currentAttempt: 1,
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

    if (/Mobi|Android/i.test(navigator.userAgent)) this.setState({ mobile: true });

    return firstLetter.focus();
  }

  componentDidUpdate(prevProps) {
    const { keyDown, virtualKeyboard } = this.props;

    if (prevProps.keyDown !== keyDown) {
      let key = keyDown;
      const id = document.querySelector('.letterOnFocus').id;
      const attempt = `attempt${id.substring(1, 2)}`;

      if (keyDown === 'delete' || keyDown === 'deleteLast') key = '';

      if (keyDown === 'deleteLast') return this.setState((prevState) => ({
        ...prevState,
        words: {
          ...prevState.words,
          [attempt]: {
            ...prevState.words[attempt],
            letter5: key,
      }}}))

      const keyPressed = {
        nativeEvent: { data: key },
        target: { id }
      };

      if (keyDown === 'ENTER') this.handleEnterKey();

      if (virtualKeyboard && keyDown !== 'ENTER') this.handleChange(keyPressed);

      this.setState({ keyTyped: key });
    }
  }

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

    if (id.substring(4, 5) === '5') return enableEnter(false);
    else {
      key === '' ? enableEnter(true) : enableEnter(true) && focusNextLetter(id);
    }
  }

  handleEnterKey = () => {
    const { renderStats } = this.props;

    if (document.querySelector('.letterOnFocus').value) {
      const attemptId = `attempt${document.querySelector('.letterOnFocus').id.substring(1, 2)}`;
      const { words: { [attemptId]: attempt }, word } = this.state;
      const wordTried = Object.values(attempt);
      const lastAttempt = `a${Number(attemptId.substring(7, 8))}`;
      const attemptNumber = `a${Number(attemptId.substring(7, 8)) + 1}`;
 
      
      if (correctWord(word, [...wordTried], lastAttempt)) {
        const { word } = this.state;
        const payload = {
          stats: true,
          word,
        }
        return renderStats(payload);
      }

      validateWord(word, [...wordTried], attemptId);
      
      this.setState((prevAttempt) => ({
        ...prevAttempt,
        currentAttempt: prevAttempt.currentAttempt + 1,
      }), () => {
        const attempt = document.querySelectorAll(`[id*=${attemptNumber}]`);
        
        attempt.forEach((letter) => {
          letter.classList.remove('notCurrentAttemp');
          const currentFocus = document.querySelector(`#${lastAttempt}-l5`);
          const nextFocus = document.querySelector(`#${attemptNumber}-l1`);
          
          currentFocus.classList.remove('letterOnFocus');
          nextFocus.classList.add('letterOnFocus');

          return nextFocus.focus();
        });
      })
    }
  }

  renderForm = () => {
    const { 
      mobile,
      currentAttempt,
      words: {
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
            className={ i !== 1 ? "wordBox notCurrentAttemp" : "wordBox" }
            maxLength="1"
            value={ eval(`a${i}l${j}`) }
            onChange={ this.handleChange }
            onKeyDown={ ({ key }) => (key === 'Enter' && j === 5 ? this.handleEnterKey() : null) }
            disabled={ i !== currentAttempt ? true : false }
            autoComplete="off"
            readOnly={ mobile }
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
    return (
      <main>
        { this.renderForm() }
      </main>
    );
  }
}

const mapStateToProps = ({ keyDown: { key, virtualKeyboard } }) => ({
  keyDown: key,
  virtualKeyboard,
});

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(sendKeyDown(key)),
  enableEnter: (payload) => dispatch(enableEnter(payload)),
  renderStats: (payload) => dispatch(renderStats(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
