import { RENDER_HELP, RENDER_STATS, RENDER_SETTINGS, } from '../actions';

const INITIAL_STATE = {
  help: false,
  stats: false,
  settings: false,
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
    return ({
      ...state,
      stats: payload,
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