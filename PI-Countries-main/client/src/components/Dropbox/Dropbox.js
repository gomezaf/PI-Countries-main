import React, { useState } from "react";

import Filters from "../Filters/index";

import {
  StyledDropboxContainer,
  StyledButtonDropbox,
  StyledContenDropbox,
} from "./Dropbox.styles";

export default function Dropbox() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDropdownToggle = () => setIsOpen(!isOpen);

  return (
    <StyledDropboxContainer>
      <StyledButtonDropbox onClick={handleDropdownToggle}>
        search countries with filters
      </StyledButtonDropbox>
      <StyledContenDropbox isOpen={isOpen}>
        <Filters />
      </StyledContenDropbox>
    </StyledDropboxContainer>
  );
}
