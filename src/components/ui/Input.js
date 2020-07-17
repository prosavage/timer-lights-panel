import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  
`

const Input = (props) => {
  return (
      <StyledInput type={props.type} placeholder={props.placeholder} size={props.size}>
          {props.children}
      </StyledInput>
  )
}

export default Input;
