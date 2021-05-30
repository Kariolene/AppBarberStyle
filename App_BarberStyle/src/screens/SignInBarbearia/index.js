import  React , { useState, useContext }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Alert } from 'react-native';
import UserContext from '../../contexts/UserContext';
import SignInputBarber from  '../../components/SingInputBarber';
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

  //KAS - API Context para barbearias - 
  const {stgNomeBar,    setStgNomeBar,
         stgBarId,      setStgBarId,
         stgEmailBar,   setStgEmailBar,
         stgPassBar,    setStgPassBar,
         stgCelularBar, setStgCelularBar,
         stgRespBar,    setStgRespBar,
         stgcnpjBar,    setStgCnpjBar}  = useContext(UserContext);
  

//...........................................................................
/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/

  const [id, setId] = useState('');
  const [passwordField, setPasswordField] = useState('');

//...........................................................................
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = async () =>{
 
     if(id != '' && passwordField != ''){   
        
        let json = await Api.signInBarber(id);

        if( json.id == id ){
          
            if(json.passwordBarber == passwordField ) {
     
                 setStgBarId(json.id);
                 setStgNomeBar(json.nameBarbearia);
                 setStgRespBar(json.nameResponsavel);
                 setStgCnpjBar(json.cnpj);
                 setStgEmailBar(json.email);
                 setStgPassBar(json.passwordBarber);
                 setStgCelularBar(json.contatoBarbearia);
              
                navigation.navigate('HomeBarbearia');
                
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
          <SignInputBarber
             placeholder = "Usuário da Barbearia"
             value={id}
             onChangeText={t=>setId(t)}>
          </SignInputBarber>

          {/* Input da senha personalizado*/} 
          <SignInputBarber
             placeholder = "Senha"
             value={passwordField}
             onChangeText={t=>setPasswordField(t)}
             password={true}/>

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
  

