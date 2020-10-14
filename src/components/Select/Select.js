import React from 'react';
import { Wrapper, SelectStyled } from './style';

const Select = ({text, value, options,  ...rest}) => {
  return (
    <Wrapper>
      <p>{text}</p>
      <SelectStyled
      value={value}
      {...rest}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SelectStyled>
    </Wrapper>
  );
};

export default Select;
