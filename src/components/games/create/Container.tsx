import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import openSocket from 'socket.io-client';
import { withRouter } from 'react-router-dom';

import {
  Form as GameCreateForm,
  FormObject as GameCreateFormObject,
} from './Form';
import { AppState } from '../../../reducers/root';
import { User } from '../../../reducers/users/types';

const Container = (props: Props & RouteComponentProps) => {
  const onSubmit = async (formObject: GameCreateFormObject) => {
    try {
      const socket = openSocket('http://localhost:80/games');
      socket.emit('create', {
        roomId: formObject.roomId,
        users: [props.user._id],
      });
      props.history.push('/games');
    } catch (err) {
      console.log(err);
    }
  };

  return <GameCreateForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state: AppState) => {
  return {
    user: state.userReducer.user,
  };
};

type Props = {
  user: User;
};

const ConnectedContainer = connect(mapStateToProps)(withRouter(Container));
export { ConnectedContainer as Container };
