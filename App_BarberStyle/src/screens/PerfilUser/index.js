import React, { useState }  from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogActions, DialogTitle } from 'react-native-popup-dialog';

import {useNavigation} from "@react-navigation/native";
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';


export default function PerfilUser({route,navigation}) {


//...........................................................................
/*Definição de valores transferidos entre screens*/

  const { id,email, name, password , apelido, celular, tokenUser} = route.params;

//...........................................................................
/*Hooks que permitem digitar campos da tela*/

  const [nameField,     setNameField]     = useState(name);//Exibir com valores cadastrados
  const [emailField,    setEmailField]    = useState(email);
  const [passwordField, setPasswordField] = useState(password);
  const [celularField, setCelularField]   = useState(celular);
  const [apelidoField, setApelidoField]   = useState(apelido);


//...........................................................................
// Ação do botão atualizar perfil

  const handlerButtonAtualizar = async () =>{

    if(emailField != '' && nameField != '' && passwordField != '' ){

      /*atualizar na tebela de usuários*/
      let req = await Api.signUpAtualize(id,emailField, nameField, passwordField, celularField, apelidoField);
       
      if(req.id == id){

         alert("Atualizado com sucesso!");
      
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
  const [showDeleteOk, setDeleteOk] = useState(false); 

 
  const showDialog = () =>   setPopupExibir(true);
  const hideDialog = () =>   setPopupExibir(false);

  const dialogOk  = async () => {
    
    setPopupExibir(false);
  
    /*atualizar na tebela de usuários*/
    let req = await Api.signUpDelete(id);

    if(req.id == id){
       
      navigation.reset({ routes: [{name: 'SignIn'}]});
      
    } else {
      alert("Algo deu errado");
    }
  }

//...........................................................................

    return (

      <Container>
       <ScrollView>

         <View style={style.subContainer}>
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Perfil do Usuário</Text>
      
          <TextInput
          placeholder={'Nome completo'}
          style={style.containerInput}
          keyboardType={'default'}
          value={nameField}
          onChangeText={t=>setNameField(t)}
          /> 

          <TextInput
          placeholder={'Apelido'}
          style={style.containerInput}
          keyboardType={'default'}
          value={apelidoField}
          onChangeText={t=>setApelidoField(t)}
          /> 

          <TextInput
          placeholder={'E-mail'}
          style={style.containerInput}
          keyboardType={'email-address'}
          value={emailField}
          onChangeText={t=>setEmailField(t)}
          />

          <TextInput
          placeholder={'Celular'}
          style={style.containerInput}
          keyboardType={'default'}
          value={celularField}
          onChangeText={t=>setCelularField(t)}
          /> 

          <TextInput
          placeholder={'Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}/>


        <CustomButton onPress={handlerButtonAtualizar}>
          <CustomButtonText>Atualizar</CustomButtonText>
        </CustomButton>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Formas de pagamento</SingButtonTextBold>
        </SingButtonArea>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Fazer Login</SingButtonTextBold>
        </SingButtonArea>
   
        <SingButtonArea onPress={showDialog}>
        <SingButtonTextBold>Deletar conta</SingButtonTextBold>
       </SingButtonArea>

       <View >
         <Dialog
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
          <DialogTitle title={'Deletar conta'} style={{ color:'#0F0F0E'}}></DialogTitle>
          <DialogContent> Confirmar exclusão de conta?</DialogContent>
        </Dialog>
       </View>
     
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
      marginTop:30,
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
      padding: 45,
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