import { RENDER_HELP, RENDER_STATS, RENDER_SETTINGS, RENDER_POP_UP } from '../actions';

const INITIAL_STATE = {
  help: false,
  stats: false,
  settings: false,
  invalidWord: false,
  word: 'a',
};

const menus = (state = INITIAL_STATE, actions) => {
  const { type, payload } = actions;

  switch (type) {
  case RENDER_HELP:
    return ({ 
      ...state,
      help: payload,
    });
  case RENDER_STATS:
    const { stats, word = '' } = payload
    
    return ({
      ...state,
      stats,
      word,
    });
  case RENDER_SETTINGS:
    return ({
      ...state,
      settings: payload,
    });
  case RENDER_POP_UP:
    return ({
      ...state,
      invalidWord: payload,
    });
  default:
    return state;
  }
};

export default menus;