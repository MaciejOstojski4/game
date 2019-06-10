import { combineReducers } from 'redux';

import { Reducer as UserReducer } from './users/reducer';

export const rootReducer = combineReducers({
  userReducer: UserReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
