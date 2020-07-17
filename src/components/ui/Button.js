import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px;
  background: #EFCEFA;
  border: none;
  border-radius: 5px;
`


const Button = (props) => {
    return (
        <>
           <StyledButton onClick={props.onClick}>
               {props.children}
           </StyledButton>
        </>
    )
}


export default Button;
