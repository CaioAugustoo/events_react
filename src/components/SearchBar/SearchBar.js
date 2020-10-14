import React from "react";
import { SearchBarStyled } from "./style";

const SearchBar = ({type, ...rest}) => {
  return (
    <SearchBarStyled
      type={type}
      {...rest}
    />
  );
};

export default SearchBar;
