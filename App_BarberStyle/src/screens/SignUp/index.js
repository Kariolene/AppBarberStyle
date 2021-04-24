import React, { useState }  from 'react';
import { View, Text,StatusBar, Button, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';




export default function SignUp({navigation}) {

  //.............................................................................
  /*Hooks que permitem digitar campos da tela*/

  const [nameField, setNameField]=useState('');
  const [emailField, setEmailField]=useState('');
  const [passwordField, setPasswordField]=useState('');

  const handlerButtonCadastrar = async () =>{

    if(emailField != '' && nameField != '' && passwordField != '' ){
      
      /*inserir na tebela de usuários*/
      let req = await Api.signUp(emailField, nameField, passwordField);
      if(req.id != ''){
      
        alert("Cadastro realizado"+", seu usuário é:  "+req.id);
      
        /*navegar para visualizar o perfil passando parametros cadastrados*/
        navigation.navigate('PerfilUser',{ id: req.id, email: emailField, name: nameField, password: passwordField });

        //inserir na tabela de autenticação
        let req2 = await Api.signIn(emailField, passwordField);
       
      } else {
        alert("Verifique os dados no seu cadastro");
       }

     } else {
      alert("Favor preencher todos os campos para concluir o cadastro.");
     }

  };

//.............................................................................



    return (

      <Container>


         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Cadastro</Text>
        
         {/*Container com inputs de cadastro*/}
        <View style={style.subContainer}>
          
          <TextInput
          placeholder={'Nome '}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setNameField(t)}
          /> 

          <TextInput
          placeholder={'name@example.com'}
          style={style.containerInput}
          keyboardType={'email-address'}
          onChangeText={t=>setEmailField(t)}
          />

          <TextInput
          placeholder={'Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordField(t)}
          />

        </View>

        <CustomButton onPress={handlerButtonCadastrar}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Fazer Login</SingButtonTextBold>
        </SingButtonArea>
        
        </Container>
    );
  }
  

  const style = StyleSheet.create({

    /*Style para o titulo da screen*/
    title:{
      marginTop:60,
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 45,
      padding: 20,
    },

    /*Style para o subtitulo da screen*/
    subTitle:{
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 30,
      fontWeight: 'bold',
    },

    subContainer:{
      alignItems:'center', 
      justifyContent:'center',
      padding: 10,
    },

    containerInput:{
      placeholderTextColor:'#FFC82C',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: 260,
      padding: 15,
      margin: 5,
      color:'#FFC82C',
      fontWeight: 'bold',
    },

    buttonSalvar:{
      flexDirection: 'row',
      justifyContent:'center',
      marginTop: 50,
      marginBottom:20,
      textDecoration: 'none',
      color: '#A6A583',
      fontFamily: 'sans-serif',
      fontSize: 16,
      marginLeft: 5,
    }

  });