import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { Button } from '../../../styles/elements';
import api from '../../../lib/api';
import { RemoteGame, RemoteUser, Game, User } from './types';
import { List } from './List';

export const Container = (props: RouteComponentProps) => {
  const [games, setGames] = useState([] as Game[]);

  useEffect(() => {
    api
      .get('/games')
      .then(response => {
        console.log(response);
        setGames(convertRemoteGames(response.data as RemoteGame[]));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const convertRemoteGames = (remoteGames: RemoteGame[]): Game[] => {
    return remoteGames.map((game: RemoteGame) => ({
      id: game._id,
      roomId: game.roomId,
      users: convertRemoteUsers(game.users),
    }));
  };

  const convertRemoteUsers = (users: RemoteUser[]): User[] => {
    return users.map(user => ({
      id: user._id,
      nick: user.nick,
    }));
  };

  const redirectToGameCreate = () => {
    props.history.push('/games/new');
  };

  const joinToGame = (gameId: string) => {};

  return (
    <section>
      <List games={games} onClick={joinToGame} />
      <Button onClick={redirectToGameCreate}>Utwórz grę</Button>
    </section>
  );
};
