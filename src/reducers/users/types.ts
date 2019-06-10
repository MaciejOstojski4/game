export type User = {
  _id: string;
  nick: string;
};

export type UserState = {
  user: User;
};

export const SAVE_USER = 'SAVE_USER';

export interface SaveUserAction {
  type: typeof SAVE_USER;
  payload: User;
}

export type UserActionTypes = SaveUserAction;
