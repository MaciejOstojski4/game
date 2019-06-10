import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Container as UserCreateContainer } from './components/users/create/Container';
import { Container as GamesIndexContainer } from './components/games/index/Container';
import { Container as GameCreateContainer } from './components/games/create/Container';

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={UserCreateContainer} />
      <Route exact path="/games" component={GamesIndexContainer} />
      <Route path="/games/new" component={GameCreateContainer} />
    </BrowserRouter>
  );
};
