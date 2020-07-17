import React from 'react';
import styled from "styled-components";
import LogTable from "../components/home/LogTable";
import Controls from "../components/home/Controls";

const PageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 100%;
`

const TableContainer = styled.div`
  height: 25vh;
`


const HomePage = () => {
    return (
        <PageContainer>
            <h3>Controls</h3>
            <Controls/>
            <h3>Logs</h3>
            <TableContainer>
                <LogTable/>
            </TableContainer>
        </PageContainer>
    )
}


export default HomePage;