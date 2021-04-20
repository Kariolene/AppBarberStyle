import  React , { useState }  from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button , TextInput, Image, StyleSheet } from 'react-native';
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




export default function SignIn({navigation}){

/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/
  //const [emailField, setEmailField] = useState('karyolene@gmail.com');
  const [id, setId] = useState('');
  const [passwordField, setPasswordField] = useState('');
  
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = async () =>{
    
    //if(emailField != '' && passwordField != ''){
      if(id != '' && passwordField != ''){   

      let json = await Api.getUser(id);

        if(json.id == id ){
          
            if(json.password == passwordField ) {
              
                navigation.reset({
                routes: [{name: 'HomeUser'}]});
                
            }else{
              alert("Senha inválida.");
            }
        
        } else {
          alert("Usuário não cadastrado.");
        }
 
     } else {
      alert("Favor preencher todos os campos para login.");
     }
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
             placeholder = "Usuário"
             //value={emailField}
             value={id}
             //onChangeText={t=>setEmailField(t)}
             onChangeText={t=>setId(t)}
          />

          {/* Input da senha personalizado*/} 
          <SignInput
             placeholder = "Senha"
             value={passwordField}
             onChangeText={t=>setPasswordField(t)}
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
  

