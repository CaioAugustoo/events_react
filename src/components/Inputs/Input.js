import React from "react";
import { InputStyled, LabelStyled } from "./style";

const Input = ({ id, placeholder, label, type, onChange, ...rest }) => {
  return (
    <div>
      <LabelStyled htmlFor={id}>{id}</LabelStyled>
      <InputStyled
        label={label}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
