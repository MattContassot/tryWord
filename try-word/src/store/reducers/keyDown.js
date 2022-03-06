import { KEY_DOWN } from '../actions';

const INITIAL_STATE = {
  key: '',
  virtualKeyboard: false,
};

const keyDown = (state = INITIAL_STATE, actions) => {
  const { type, key, virtualKeyboard } = actions;
  
  switch (type) {
  case KEY_DOWN:
    return ({
      ...state,
      key,
      virtualKeyboard,
    });
  default:
    return state;
  }
};

export default keyDown;
