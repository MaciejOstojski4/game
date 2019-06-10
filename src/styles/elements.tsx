import styled from 'styled-components';

import { colors, fonts } from './variables';

export const FormLabel = styled.label`
  color: ${colors.lightGrey};
  font-weight: bold;
  font-family: ${fonts.noto};
  font-size: 13px;
  margin: 0 0 10px 0;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.lightGrey};
  color: ${colors.darkGrey};
  font-weight: bold;
  font-family: ${fonts.noto};
  font-size: 16px;
  padding: 2px 5px;
  outline: none;
`;

export const FormSubmit = styled.input`
  color: ${colors.lightGreen};
  font-family: ${fonts.noto};
  cursor: pointer;
  outline: none;
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${colors.white};
  backgroundcolor: ${colors.lightGreen};
`;
