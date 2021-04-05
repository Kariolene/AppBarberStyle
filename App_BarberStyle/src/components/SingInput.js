import React from 'react';
import styled from 'styled-components/native';


const InputArea = styled.View`

  width: 100%;
  padding: 15px;
  margin: 5px 0;
  box-sizing: border-box;
  background-color:#CFD1D4;
  opacity:30%;
  border-radius: 30px;
  flex-direction: row;
 align-items: center;
 scroll-margin-bottom: 15px;
`;


export default () =>{
    return(
        <InputArea></InputArea>
    );
}