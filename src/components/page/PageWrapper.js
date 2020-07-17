import React from 'react';
import styled from "styled-components";

const PageWrapperContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

const PageWrapper = (props) => {
    return (
        <PageWrapperContainer>
            {props.children}
        </PageWrapperContainer>
    )
}


export default PageWrapper;