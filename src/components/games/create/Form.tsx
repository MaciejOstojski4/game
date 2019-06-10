import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

import { FormLabel, FormInput, FormSubmit } from '../../../styles/elements';

export const Form = (props: Props) => {
  const [formObject, setFormObject] = useState({} as FormObject);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormObject({
      ...formObject,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(formObject);
  };

  return (
    <FormContainer onSubmit={onSubmit}>
      <FormGroup>
        <FormLabel>Nazwa gry</FormLabel>
        <FormInput name="roomId" type="text" onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <FormSubmit type="submit" value="Zatwierdź" />
      </FormGroup>
    </FormContainer>
  );
};

const FormContainer = styled.form``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export type FormObject = {
  roomId: string;
};

type Props = {
  onSubmit: (formObject: FormObject) => void;
};
