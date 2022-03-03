import { combineReducers } from 'redux';
import keyDown from './keyDown';
import lastLetter from './lastLetter';

const rootReducer = combineReducers({ keyDown, lastLetter });

export default rootReducer;