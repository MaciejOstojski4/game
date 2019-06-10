import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Form } from './Form';
import { FormObject } from './Form';
import api from '../../../lib/api';
import { saveUser } from '../../../reducers/users/reducer';
import { User } from '../../../reducers/users/types';

type RemoteUser = {
  nick: string;
  __v: number;
  _id: string;
};

const Container = (props: Props & RouteComponentProps) => {
  const mapRemoteUserToUser = (responseData: RemoteUser): User => {
    return {
      _id: responseData._id,
      nick: responseData.nick,
    };
  };

  const onSubmit = async (formObject: FormObject) => {
    try {
      const response = await api.post('/users/new', formObject);

      console.log(response);
      props.saveUser(mapRemoteUserToUser(response.data));
      props.history.push('/games');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <Form onSubmit={onSubmit} />
    </section>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    saveUser: (user: User) => dispatch(saveUser(user)),
  };
};

type Props = {
  saveUser: (user: User) => void;
};

const ConnectedContainer = connect(
  null,
  mapDispatchToProps
)(withRouter(Container));
export { ConnectedContainer as Container };
