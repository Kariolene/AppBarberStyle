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

  const [nameBarber, setNameBaber]          = useState('');
  const [emailBarber, setEmailBarber]       = useState('');
  const [passwordBarber, setPasswordBarber] = useState('');
  const [passwordConf, setPasswordConf]     = useState('');
  const [nomeResp, setNomeResp]             = useState('');
  const [celularField, setCelular]          = useState('');
  const [cnpj, setCnpj]                     = useState('');


  const handlerButtonCadastrar = async () =>{

    if( nameBarber     != '' && 
        emailBarber    != '' && 
        cnpj           != '' && 
        passwordBarber != '' ){

      if (passwordConf == passwordBarber) {
        
        /*inserir na tebela de barbearias*/
        let req = await Api.signUpBarber(
                            nameBarber, 
                            nomeResp,
                            celularField,
                            emailBarber, 
                            passwordBarber,                          
                            cnpj);

        if(req.id != ' '){

          alert("Cadastro realizado! Seu usuário é: "+req.id);

          navigation.navigate('PerfilBabearia',{ 
            id:               req.id,
            nameBarbearia:    nameBarber, 
            nameResponsavel:  nomeResp,
            contatoBarbearia: celularField,
            email:            emailBarber, 
            passwordBarber:   passwordBarber,                          
            cnpj:             cnpj});
        
       } else {
        alert("Verifique os dados do cadastro");
        }

      } else{
        alert("Senhas diferentes, favor verificar.");
      }

     } else {
      alert("Campos com ' * ', são obrigatórios favor preencher.");
     }
    
  };

//.............................................................................

    return (
   
  
      <Container>
        <ScrollView>

         <View style={style.subContainer}>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Cadastro de Barbearia</Text>
          
         <View style={{alignContent:'flex-start'}}>
         <Text style={style.textInput}>*Nome da Barbearia:</Text>
          <TextInput
          placeholder={' * Nome da Barbearia '}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setNameBaber(t)}/> 

         <Text style={style.textInput}>*E-mail:</Text>
          <TextInput
          placeholder={' * E-mail'}
          style={style.containerInput}
          keyboardType={'email-address'}
          onChangeText={t=>setEmailBarber(t)}/>

         <Text style={style.textInput}>Contato:</Text>
          <TextInput
          placeholder={'Telefone de contato'}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setCelular(t)}/> 

          <Text style={style.textInput}>*CNPJ:</Text>
          <TextInput
          placeholder={' * CNPJ da Barbearia'}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setCnpj(t)}/> 

          <Text style={style.textInput}>Nome do Responsavel:</Text>
          <TextInput
          placeholder={'Nome do Responsável'}
          style={style.containerInput}
          keyboardType={'default'}
          onChangeText={t=>setNomeResp(t)}/> 

          <Text style={style.textInput}>* Senha:</Text>
          <TextInput
          placeholder={'* Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordBarber(t)}/>

          <Text style={style.textInput}>*Confirmar senha:</Text>
          <TextInput
          placeholder={'* Confirme a senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordConf(t)}/>
            </View>
        
        <CustomButton onPress={handlerButtonCadastrar}>
          <CustomButtonText>Salvar</CustomButtonText>
        </CustomButton>

        {/*<SingButtonArea onPress={ () => navigation.navigate('SignInBarbearia') }>
        <SingButtonTextBold>Dados bancários</SingButtonTextBold>
        </SingButtonArea>*/}

        <SingButtonArea onPress={ () => navigation.navigate('SignInBarbearia') }>
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
     // marginTop:20,
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 45,
      padding: 20,
    },

    textInput:{
      marginTop: 15,
       color:'#FFC82C',
     },

    /*Style para o subtitulo da screen*/
    subTitle:{
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 25,
      //fontWeight: 'bold',
      alignItems:'center', 
      justifyContent:'center',
    },

    subContainer:{
      alignItems:'center', 
      justifyContent:'center',
      paddingHorizontal: 45,
      margin:50,
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