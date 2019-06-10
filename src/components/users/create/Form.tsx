import React, { useState, MouseEvent, ChangeEvent } from 'react';
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

  const onSubmit = (event: MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.onSubmit(formObject);
  };

  return (
    <FormContainer>
      <FormGroup>
        <FormLabel>Nick</FormLabel>
        <FormInput name="nick" type="text" onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <FormSubmit type="submit" value="Zatwierdź" onClick={onSubmit} />
      </FormGroup>
    </FormContainer>
  );
};

const FormContainer = styled.form``;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export type FormObject = {
  nick: string;
};

type Props = {
  onSubmit: (formObject: FormObject) => void;
};
