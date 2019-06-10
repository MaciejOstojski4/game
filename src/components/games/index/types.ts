export interface RemoteGame {
  users: RemoteUser[];
  __v: number;
  _id: string;
  roomId: string;
}

export interface RemoteUser {
  nick: string;
  __v: number;
  _id: string;
}

export interface Game {
  users: User[];
  id: string;
  roomId: string;
}

export interface User {
  nick: string;
  id: string;
}
