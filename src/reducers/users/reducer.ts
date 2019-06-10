import {
  SAVE_USER,
  UserState,
  UserActionTypes,
  User,
  SaveUserAction,
} from './types';

const initialState: UserState = { user: {} as User };

export const Reducer = (
  state: UserState = initialState,
  action: UserActionTypes
) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export const saveUser = (payload: User): SaveUserAction => {
  return {
    type: SAVE_USER,
    payload: payload,
  };
};
