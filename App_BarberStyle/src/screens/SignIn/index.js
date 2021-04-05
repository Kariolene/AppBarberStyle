import * as React from 'react';
import { View, Text, Button , TextInput , StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { color } from 'react-native-reanimated';
import { 
  Container, 
  Title,
  CustomButton,
  CustomButtonText,
  SingButtonTextBold,
  SingButtonArea,
  InputArea,
  SignInput,
 } from './style';



export default function SignIn({navigation}) {
    return (
        <Container>
          <Title>BarberMob</Title>

          <InputArea>
          
          <SignInput/>
          <SignInput/>

          <CustomButton >
            <CustomButtonText>Login</CustomButtonText>
          </CustomButton>
          </InputArea>

          <SingButtonArea>
            <SingButtonTextBold>Cadastre-se</SingButtonTextBold>
          </SingButtonArea>
        </Container>
    );
  }
  

