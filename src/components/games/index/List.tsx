import React from 'react';

import { Game } from './types';

export const List = (props: Props) => {
  return (
    <ul>
      {props.games.map(game => {
        return (
          <li key={game.id}>
            <div>{game.roomId}</div>
            <button onClick={() => props.onClick(game.id)}>Dołącz</button>
          </li>
        );
      })}
    </ul>
  );
};

type Props = {
  games: Game[];
  onClick: (gameId: string) => void;
};
