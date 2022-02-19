import { KEY_DOWN } from '../actions';

const INITIAL_STATE = '';

const keyDown = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case KEY_DOWN:
    return (actions.key);
  default:
    return state;
  }
};

export default keyDown;