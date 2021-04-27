import React, { useState }  from 'react';
import { View, Text,StatusBar, Button, StyleSheet,SafeAreaView, ScrollView, TextInput,Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';



export default function SignUpBarbeiro({navigation}) {

  //.............................................................................
  /*Hooks que permitem digitar campos da tela*/

  const [nameField, setNameField]         =useState('');
  const [emailField, setEmailField]       =useState('');
  const [passwordField, setPasswordField] =useState('');
  const [passwordConf, setPasswordConf]   =useState('');
  
  const [celularField, setCelularField]   = useState('');
  const [apelidoField, setApelidoField]   = useState('');


  const handlerButtonCadastrar = async () =>{

    if(emailField != '' && nameField != '' && passwordField != '' ){

      if (passwordConf == passwordField) {
        
        /*inserir na tebela de usuários*/
        let req = await Api.signUp(emailField, nameField, passwordField, celularField, apelidoField);

        if(req.id != ' '){

          alert("Cadastro realizado! Seu usuário é: "+req.id);

          navigation.navigate('PerfilUser',{ 
            id:        req.id, 
            email:     emailField, 
            name:      nameField, 
            password:  passwordField,
            celular:   celularField,
            apelido:   apelidoField });
        
      } else {
        alert("Verifique os dados no seu cadastro");
        }

      } else{
        alert("Senhas diferentes, favor verificar.");
      }

     } else {
      alert("Favor preencher todos os campos obrigatórios.");
     }
    
  };

//.............................................................................

    return (
   
  
      <Container>
        <ScrollView>

         <View style={style.subContainer}>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Cadastro</Text>
          
          <TextInput
          placeholder={'Nome da Barbearia '}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setNameField(t)}/> 

          <TextInput
          placeholder={'E-mail'}
          style={style.containerInput}
          keyboardType={'email-address'}
          onChangeText={t=>setEmailField(t)}/>

          <TextInput
          placeholder={'Telefone de contato'}
          style={style.containerInput}
          keyboardType={'default'}
          value={celularField}
          onChangeText={t=>setCelularField(t)}/> 

          <TextInput
          placeholder={'CNPJ da Barbearia'}
          style={style.containerInput}
          keyboardType={'default'}
          value={apelidoField}
          onChangeText={t=>setApelidoField(t)}/> 

          <TextInput
          placeholder={'Nome do Responsável'}
          style={style.containerInput}
          keyboardType={'default'}
          value={apelidoField}
          onChangeText={t=>setApelidoField(t)}/> 

          <TextInput
          placeholder={'Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordField(t)}/>

          <TextInput
          placeholder={'Confirme a senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordConf(t)}/>

        
        <CustomButton onPress={handlerButtonCadastrar}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>

        <CustomButton onPress={ () => navigation.navigate('SignIn')}>
          <CustomButtonText>Dados bancários</CustomButtonText>
        </CustomButton>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Fazer Login</SingButtonTextBold>
        </SingButtonArea>

        </View>
        </ScrollView>
        </Container>
   
      
    );}
  

  const style = StyleSheet.create({

    scrollView: {
      marginHorizontal:1,
    },

    /*Style para o titulo da screen*/
    title:{
      marginTop:40,
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
      //fontWeight: 'bold',
      alignItems:'center', 
      justifyContent:'center',
    },

    subContainer:{
      alignItems:'center', 
      justifyContent:'center',
      paddingHorizontal: 45,
    },

    containerInput:{
      placeholderTextColor:'#FFC82C',
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: 260,
      padding: 10,
      margin: 5,
      color:'#FFC82C',
      //fontWeight: 'bold',
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
    },
   container:{
    backgroundColor: '#0F0F0E',
    opacity: 80,
    flex: 1,
    alignItems: 'center',
    },


  });