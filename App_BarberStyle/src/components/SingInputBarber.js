import React  from 'react';
import styled from 'styled-components/native';

//...............................................................
const InputArea = styled.View`
  width: 100%;
  padding: 15px;
  margin: 5px 0;
  border-color: gray;
  border-width: 1;
  border-radius: 30px;
  flex-direction: row;
  align-items: center;
`;

//...............................................................

const Input = styled.TextInput`
  font-size: 16px;
  flex: 1;
`;


//...............................................................


export default ({placeholder, value, onChangeText, password}) =>{
    return(
        <InputArea>
        <Input 
          style={{selectionColor:"#0F0F0E"}}
          placeholder={placeholder}
          placeholderTextColor = "#0F0F0E"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
        />
        </InputArea>
    );
}