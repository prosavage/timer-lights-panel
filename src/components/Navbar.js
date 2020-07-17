import React from 'react';
import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100vw;
  display: flex;
  background: #E2A0FF;
`

const NavbarItem = styled.div`
  display: flex;
  padding: 10px;
`



const NavbarWrapper = () => {
    return (
    <NavbarContainer>
        <NavbarItem>
            <p>Control Panel</p>
        </NavbarItem>
    </NavbarContainer>
    )
}

export default NavbarWrapper;