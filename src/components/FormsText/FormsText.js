import React from 'react';
import {FormTextStyled} from './style';

const FormsText = ({text}) => {
  return (
    <FormTextStyled>
      <h2>{text}</h2>
    </FormTextStyled>
  );
};

export default FormsText;
