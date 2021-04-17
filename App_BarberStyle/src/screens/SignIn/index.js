import  React , { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button , TextInput, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignInput from  '../../components/SingInput';
import { 
  Container, 
  Title,
  CustomButton,
  CustomButtonText,
  SingButtonTextBold,
  SingButtonArea,
  InputArea

 } from './style';



export default function SignIn({navigation}){

/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/
  const [emailCampo, setEmailCampo] = useState('');
  const [senhaCampo, setSenhaCampo] = useState('');
  
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = ()=>{
    navigation.reset({
      routes: [{name: 'HomeUser'}]
    });
  }
/*Ação do botão de cadastro de usuário*/
  const handlerLinkClick = ()=>{
   navigation.reset({
     routes: [{name: 'SignUp'}]
    });
  }

    return (

        <Container>

          <Title>BarberMob</Title>
       
          <InputArea>
        
          {/* Input do e-mail personalizado*/}
          <SignInput
             placeholder = "E-mail"
             value={emailCampo}
             onChangeText={t=>setEmailCampo(t)}
          />

          {/* Input da senha personalizado*/} 
          <SignInput
             placeholder = "Senha"
             value={senhaCampo}
             onChangeText={t=>setSenhaCampo(t)}
             password={true}
            
             />
          
           {/* Botão de login personalizado*/}

          <CustomButton onPress={handlerButtonLoginClick}>
            <CustomButtonText>Login</CustomButtonText>
          </CustomButton>
          </InputArea>
          
          {/* Botão do tipo link*/}
          <SingButtonArea onPress={handlerLinkClick}>
            <SingButtonTextBold>Cadastre-se</SingButtonTextBold>
          </SingButtonArea>
        </Container>
    );
  }
  

