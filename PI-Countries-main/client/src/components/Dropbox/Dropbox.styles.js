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
  background-color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px -4px 28px 15px rgba(0, 0, 0, 0.26) inset;
  border: 1px inset rgba(59, 56, 56, 0.06);
  display: none;
  ${(props) =>
    props.isOpen === true &&
    css`
      display: block;
    `};

  select {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: left;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
  }

  option {
    border-color: #cccccc;
    padding: 6px;
    font-size: 15px;
    text-align: left;
    border-radius: 10px;
    border-style: groove;
    border-width: 1px;
  }
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
