import React from 'react';
import { ErrorStyled } from './style';

const Error = ({description}) => {
  return (
    <ErrorStyled>
      <span>{description}</span>
    </ErrorStyled>
  );
};

export default Error;
