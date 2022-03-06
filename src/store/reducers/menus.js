import { RENDER_HELP, RENDER_STATS, RENDER_SETTINGS, } from '../actions';

const INITIAL_STATE = {
  help: false,
  stats: false,
  settings: false,
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
  default:
    return state;
  }
};

export default menus;