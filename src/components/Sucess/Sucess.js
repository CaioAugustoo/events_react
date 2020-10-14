import React from 'react';
import { SucessStyled } from './style';

const Sucess = ({sucessText}) => {
  return (
    <SucessStyled>
      <span>{sucessText}</span>
    </SucessStyled>
  );
};

export default Sucess;
