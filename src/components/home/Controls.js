import React, {useState} from 'react';
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
  
  label {
    margin: 0 5px 0 0;
  }
`



const Controls = () => {

    const [message, setMessage] = useState("Please input a password and click a button.")
    const [password, setPassword] = useState("");
    const [minutes, setMinutes] = useState("")

    const turnOn = () => {
        axios.post(BASE_URL + "/lights/on", {
            pass: password,
            minutes
        }).then(res => {
            setMessage(res.data.message)
        })

    }

    const turnOff = () => {
        axios.post(BASE_URL + "/lights/off", {
            pass: password
        }).then(res => {
            setMessage(res.data.message)
        })
    }



    return (
        <ControlsContainer>
            <ControlGroup>
                <Control>
                    <label>Password: </label>
                    <Input value={password}
                           onChange={(event) => setPassword(event.target.value)}
                           type={"password"}
                           placeholder={"password"}
                           size={10}
                    />
                </Control>
            </ControlGroup>

            <ControlGroup>
                <Control>
                    <Button onClick={() => turnOn()}>Turn On</Button>
                </Control>
                <Control>
                    <Input
                        value={minutes}
                        onChange={(event) => setMinutes(event.target.value)}
                        type={"text"}
                        placeholder={"5"}
                        size={5}/>
                    <p>minutes</p>
                </Control>
            </ControlGroup>
            <ControlGroup>
                <Control>
                    <Button onClick={() => turnOff()}>Turn Off</Button>
                </Control>
            </ControlGroup>
            <ControlGroup>
                <Control>
                    <p>{message}</p>
                </Control>
            </ControlGroup>
        </ControlsContainer>
    )
}

export default Controls;