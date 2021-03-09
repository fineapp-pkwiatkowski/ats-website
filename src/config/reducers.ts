import { combineReducers } from 'redux';

import { reducer as localesReducer } from '../modules/locales/locales.reducer';
import { LocalesState } from '../modules/locales/locales.types';
import { reducer as startupReducer } from '../modules/startup/startup.reducer';
import { StartupState } from '../modules/startup/startup.types';
//<-- IMPORT MODULE REDUCER -->

export type GlobalState = {
  locales: LocalesState;
  startup: StartupState;
  //<-- INJECT MODULE STATE TYPE -->
};

export default function createReducer() {
  return combineReducers({
    locales: localesReducer,
    startup: startupReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
