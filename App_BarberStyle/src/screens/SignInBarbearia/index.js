import  React , { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SignInput from  '../../components/SingInput';
import Api from '../../services/Api';
import { 
  Container, 
  Title,
  CustomButton,
  CustomButtonText,
  SingButtonTextBold,
  SingButtonArea,
  InputArea

 } from './style';



export default function SignInBarbearia({navigation}){

 
//...........................................................................
/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/

  const [id, setId] = useState('');
  const [passwordField, setPasswordField] = useState('');
  
//...........................................................................
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = async () =>{
 
     if(id != '' && passwordField != ''){   

        let json = await Api.getUser(id);

        if( json.id == id ){
          
            if(json.password == passwordField ) {
              
                navigation.reset({routes: [{name: 'HomeUser'}]});
                
            }else{
              alert("Senha inválida.");
            }
        
        } else {
          alert("Usuário não cadastrado ou e-mail inválido.");
        }
 
     } else {
      alert("Favor preencher todos os campos para login.");
     }

  }

//...........................................................................
/*Cadastrar usuário*/
  const handlerLinkSignUpBarber = ()=>{
   navigation.reset({
     routes: [{name: 'SignUpBarbearia'}]
    });
  }

//...........................................................................
/*Trocar de conta*/
const handlerLinkUser = ()=>{
  navigation.reset({
    routes: [{name: 'SignIn'}]
   });
 }

//...........................................................................

    return (

        <Container>

          <Title>BarberMob</Title>
       
          <InputArea>
          <SignInput
             placeholder = "Usuário da Barbearia"
             value={id}
             onChangeText={t=>setId(t)}>
          </SignInput>

          {/* Input da senha personalizado*/} 
          <SignInput
             placeholder = "Senha"
             value={passwordField}
             onChangeText={t=>setPasswordField(t)}
             password={true}
             />
          
          </InputArea>
          
          <CustomButton onPress={handlerButtonLoginClick}>
            <CustomButtonText>Login</CustomButtonText>
          </CustomButton>

          {/* Botão do tipo link*/}
          <SingButtonArea onPress={handlerLinkSignUpBarber}>
            <SingButtonTextBold>Cadastrar Barbearia</SingButtonTextBold>
          </SingButtonArea>

          
          {/* Botão do tipo link*/}
          <SingButtonArea onPress={handlerLinkUser}>
          <SingButtonTextBold>Trocar tipo de conta</SingButtonTextBold>
        </SingButtonArea>
      
      </Container>
    );
  }
  

