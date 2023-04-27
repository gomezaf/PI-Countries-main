import styled, { css } from "styled-components";

export const StyledDropboxContainer = styled.div`
  display: flex;
  position: relative;
`;

export const StyledButtonDropbox = styled.button`
  background-color: #f5f5f5;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

export const StyledContenDropbox = styled.button`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f5f5f5;
  padding: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: none;
    ${(props) =>
      props.isOpen === true &&
      css`
        display: block;
      `};
`;

export const StyledSelectFilter = styled.div`
  align-items: flex-start;
  border-radius: 5px 5px 5px 5px;
  border: 5px groove;
  border-color: "#1F1FEF";
  background-color: white;
  width: 140px;
  height: 40px;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }

  &:checked::before {
    
  }
`;