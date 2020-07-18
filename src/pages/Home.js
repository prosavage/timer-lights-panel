import React from 'react';
import styled from "styled-components";
import LogTable from "../components/home/LogTable";
import Controls from "../components/home/Controls";

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const ContentContainer = styled.div`
  padding: 10px;
`

const HomePage = () => {
    return (
        <PageContainer>
            <ContentContainer>
                <h3>Controls</h3>
                <Controls/>
            </ContentContainer>
        </PageContainer>
    )
}


export default HomePage;