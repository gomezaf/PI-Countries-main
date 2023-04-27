import React from "react";

import { StyledInput } from "./SearchBar.styles";

const Input = (props) => {

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <StyledInput
      placeholder="Search country"
      type="text"
      onChange={handleChange}
      value={props.value}
    />
  );
};

export default Input;
