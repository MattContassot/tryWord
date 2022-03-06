import { combineReducers } from 'redux';
import keyDown from './keyDown';
import lastLetter from './lastLetter';
import menus from './menus';

const rootReducer = combineReducers({ keyDown, lastLetter, menus });

export default rootReducer;