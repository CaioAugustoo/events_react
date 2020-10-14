import React from 'react';
import {Wrapper, TextAreaStyled} from './style';

const TextArea = ({text, ...rest}) => {
  return (
    <Wrapper>
      <p>{text}</p>
      <TextAreaStyled {...rest}/>
    </Wrapper>
  );
};

export default TextArea;
