import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendKeyDown } from '../store/actions';
import { KEYS } from '../services/constants';

class Keyboard extends Component {
  constructor() {
    super();
  }

  handleClick = ({ target: { id } }) => {
    const { setKey } = this.props;
    setKey(id);
  }

  render() {
    return (
      <footer>
        {
          KEYS.map((key, index) => (
            <button
              id={ key }
              type="button"
              key={ index }
              onClick={ this.handleClick }
            >
              {key}
            </button>
          ))
        }
      </footer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setKey: (key) => dispatch(sendKeyDown(key)),
});

export default connect(null, mapDispatchToProps)(Keyboard);
