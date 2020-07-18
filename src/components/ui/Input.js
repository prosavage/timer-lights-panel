import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid gray;
`

const Input = (props) => {
  return (
      <StyledInput type={props.type} placeholder={props.placeholder} size={props.size} onChange={props.onChange} value={props.value}>
          {props.children}
      </StyledInput>
  )
}

export default Input;
