import { LAST_LETTER } from '../actions';

const INITIAL_STATE = true;

const lastLetter = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
  case LAST_LETTER:
    return (actions.payload);
  default:
    return state;
  }
};

export default lastLetter;