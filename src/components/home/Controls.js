import React from 'react';
import styled from "styled-components";
import Button from "../ui/Button";
import axios from 'axios';
import Input from "../ui/Input";
import BASE_URL from "../../API";

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ControlGroup = styled.div`
  display: flex;
  flex-direction: row;
`

const Control = styled.div`
  display: flex;
  margin: 5px;
  flex-direction: row;
  align-items: center;
  
  p {
    margin: 0 5px;
  }
  
`

const Controls = () => {

    const turnOn = () => {
        axios.get(BASE_URL + "/lights-on").then(res => console.log(res))
    }

    const turnOff = () => {
        axios.get(BASE_URL + "/lights-off").then(res => console.log(res))
    }



    return (
        <ControlsContainer>
            <ControlGroup>
                <Control>
                    <Button onClick={() => turnOn()}>Turn On</Button>
                </Control>
                <Control>
                    <Input type={"text"} placeholder={"5"} size={5}/>
                    <p>minutes</p>
                </Control>
            </ControlGroup>
            <ControlGroup>
                <Control>
                    <Button onClick={() => turnOff()}>Turn Off</Button>
                </Control>
            </ControlGroup>
        </ControlsContainer>
    )
}

export default Controls;