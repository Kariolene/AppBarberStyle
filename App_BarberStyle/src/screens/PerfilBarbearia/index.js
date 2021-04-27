import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogActions }  from 'react-native-popup-dialog';
import {useNavigation} from "@react-navigation/native";
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';


export default function PerfilBarbearia({route,navigation}) {


//...........................................................................
/*Definição de valores transferidos entre screens*/

  const { id,email, name, password } = route.params;

//...........................................................................
/*Hooks que permitem digitar campos da tela*/

  const [nameField,     setNameField]     = useState(name);//Exibir com valores cadastrados
  const [emailField,    setEmailField]    = useState(email);
  const [passwordField, setPasswordField] = useState(password);


//...........................................................................
// Ação do botão atualizar perfil

  const handlerButtonAtualizar = async () =>{

    if(emailField != '' && nameField != '' && passwordField != '' ){

      /*atualizar na tebela de usuários*/
      let req = await Api.signUpAtualize(id,emailField, nameField, passwordField);

      if(req.id == id){

         alert("Atualizado com sucesso!");

        //Atualizar na tabela de autenticação
        let req2 = await Api.signInAtualize(id,emailField, passwordField);
      
      } else {
        alert("Verifique os dados no seu cadastro");
       }

    } else {
    alert("Favor preencher todos os campos para concluir a atualização.");
    }

  };

//...........................................................................
// Ação do botão deletar perfil -> exibição do pop up 
  const [popupExibir, setPopupExibir] = useState(false); 
  
  const showDialog = () => setPopupExibir(true);
  const hideDialog = () => setPopupExibir(false);

  const dialogOk  = async () => {
    
    setPopupExibir(false);
  
    /*atualizar na tebela de usuários*/
    let req = await Api.signUpDelete(id);

    if(req.id == id){

      alert("Conta deletada.");

      //Atualizar na tabela de autenticação
      let req2 = await Api.signInDelete(id);
        
      //Voltar para tela de login
      navigation.reset({ routes: [{name: 'SignIn'}]});

    } else {
      alert("Algo deu errado");
    }
  }

//...........................................................................

    return (

      <Container>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Meu Perfil</Text>
        
         {/*Container com inputs do perfil*/}
        <View style={style.subContainer}>
        
          <TextInput
          placeholder={'Nome '}
          style={style.containerInput}
          keyboardType={'default'}
          value={nameField}
          onChangeText={t=>setNameField(t)}
          /> 

          <TextInput
          placeholder={'name@example.com'}
          style={style.containerInput}
          keyboardType={'email-address'}
          value={emailField}
          onChangeText={t=>setEmailField(t)}
          />

          <TextInput
          placeholder={'Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
          />

        </View>

        <CustomButton onPress={handlerButtonAtualizar}>
          <CustomButtonText>Atualizar</CustomButtonText>
        </CustomButton>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Fazer Login</SingButtonTextBold>
        </SingButtonArea>
        
        <SingButtonArea onPress={showDialog}>
        <SingButtonTextBold>Deletar conta</SingButtonTextBold>
        <Dialog
          title="Deletar conta"
          visible={popupExibir}
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                onPress={hideDialog}
              />
              <DialogButton
                text="OK"
                onPress={dialogOk}
              />
            </DialogFooter>
          }>
          <DialogContent> Confirmar exclusão de conta?</DialogContent>
        </Dialog>
       </SingButtonArea>


        </Container>
    );}
  

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