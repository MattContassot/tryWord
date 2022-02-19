import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown } from '../store/actions';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      keyTyped: '',
      words: {
        attempt1: {
          letter1: '',
          letter2: '',
          letter3: '',
          letter4: '',
          letter5: '',
        }
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { keyDown } = this.props;
    if (prevProps.keyDown !== keyDown) {
      this.setState({ keyTyped: keyDown });
    }
  }

  handleChange = ({ nativeEvent: { data: key }, target: { id } }) => {
    const attempt = `attempt${id.slice(1 , 2)}`;
    const letter = `letter${id.slice(4, 5)}`;

    const { setKey } = this.props;

    console.log(attempt);

    this.setState((prevState) => ({
      ...prevState,
      words: {
        [attempt]: {
          ...prevState.words[attempt],
          [letter]: key,
    }}}));

    setKey(key);
  }

  handleKeyDown = ({ key }) => {
    console.log(key);
    if (key === 'Enter') this.handleEnterKey();
  }

  handleEnterKey = () => {
    console.log('Chamar função que coloca a primeira letter box da próxima tentativa em seleção');
  }

  render() {
    const { keyTyped, words: { attempt1: { letter1, letter2, letter3, letter4, letter5,  } } } = this.state;
    
    if (keyTyped === 'Enter') this.handleEnterKey();

    // for (let i = 1; i <= 5; i += 1) {
    //   if (eval(`letter${i}`).length === 0) console.log(`Letra ${i}`);
    // }

    return (
      <main>
        <form id="attempt-1">
          <input id="a1-l1" type="text" className="wordBox" maxLength="1" value={ letter1 } onChange={ this.handleChange }/>
          <input id="a1-l2" type="text" className="wordBox" maxLength="1" value={ letter2 } onChange={ this.handleChange } />
          <input id="a1-l3" type="text" className="wordBox" maxLength="1" value={ letter3 } onChange={ this.handleChange } />
          <input id="a1-l4" type="text" className="wordBox" maxLength="1" value={ letter4 } onChange={ this.handleChange } />
          <input id="a1-l5" type="text" className="wordBox" maxLength="1" value={ letter5 } onChange={ this.handleChange } onKeyDown={ this.handleKeyDown } />
        </form>
      </main>
    );
  }
}

const mapStateToProps = ({ keyDown }) => ({
  keyDown,
});

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(sendKeyDown(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
