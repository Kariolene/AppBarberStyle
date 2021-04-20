import React, { useState }  from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';




export default function PerfilUser({navigation}) {

  /*Hooks que permitem digitar campos da tela*/
  const [emailField, setEmailField]       = useState('');
  const [nameField, setNameField]         = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handlerButtonCadastrar = async () =>{
  
    if(emailField != '' && nameField != '' && passwordField != '' ){

      /*Salvando o cadastro na api*/
      let req = await Api.signUp(emailField, nameField, passwordField);
      if(req != ''){

      alert("Cadastro realizado com sucesso!!");

          /*navegar para visualizar o perfil*/
          navigation.reset({
            routes: [{name: 'PersilUser'}]
        });
       
      } else {
        alert("Verifique os dados no seu cadastro");
       }

     } else {
      alert("Favor preencher todos os campos para concluir o cadastro.");
     }

  };

  

    return (

      <Container>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Meu Perfil</Text>
        
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

    /*Style para o bady*/

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
      //marginTop:30,
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
     /* backgroundColor:'#FFC82C',
      height: 40,
      width: 150,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,*/
      flexDirection: 'row',
      justifyContent:'center',
      marginTop: 50,
      marginBottom:20,
      textDecoration: 'none',
      color: '#A6A583',
      fontFamily: 'sans-serif',
      fontSize: 16,
     // fontWeight: 'bold',
      marginLeft: 5,
    }

  });