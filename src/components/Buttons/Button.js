import React from "react";
import { ButtonCTA } from "./style";

const Button = ({ buttonText, ctaType, onClick, disabled, ...rest }) => {
  return (
    <ButtonCTA
      disabled={disabled}
      ctaType={ctaType}
      onClick={onClick}
      {...rest}
    >
      {buttonText}
    </ButtonCTA>
  );
};

export default Button;
