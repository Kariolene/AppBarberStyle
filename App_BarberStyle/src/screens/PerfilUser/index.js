import React, { useState, useContext }  from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogActions, DialogTitle } from 'react-native-popup-dialog';
import UserContext from '../../contexts/UserContext';
import {useNavigation} from "@react-navigation/native";
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';
import { concat } from 'react-native-reanimated';


export default function PerfilUser({navigation}) {


//...........................................................................
/*Definição de valores transferidos entre screens*/

  //const { id,name, email, celular, apelido, dataNascimento , password } = route.params;
  const { 
    stgNome,     setStgNome,
    stgUserId,   setStgUserId,
    stgEmail,    setStgEmail,
    stgPassword, setStgPassword,
    stgCelular,  setStgCelular,
    stgApelido,  setStgApelido,
    stgDataNasc, setStgDataNasc} = useContext(UserContext);
//...........................................................................
/*Hooks que permitem digitar campos da tela*/
 
  /*const [nameField,     setNameField]     = useState(name);
  const [emailField,    setEmailField]    = useState(email);
  const [passwordField, setPasswordField] = useState(password);
  const [celularField,  setCelularField]  = useState(celular);
  const [apelidoField,  setApelidoField]  = useState(apelido);
  const [dataNasc ,     setDataNasc ]     = useState(dataNascimento);*/


  

  const [nameField,     setNameField]     = useState(stgNome);
  const [emailField,    setEmailField]    = useState(stgEmail);
  const [passwordField, setPasswordField] = useState(stgPassword);
  const [celularField,  setCelularField]  = useState(stgCelular);
  const [apelidoField,  setApelidoField]  = useState(stgApelido);
  const [dataNasc ,     setDataNasc ]     = useState(stgDataNasc);

  const [popupExibir,    setPopupExibir]      = useState(false); 
  const [verificarDados, setVerificarDados]   = useState(false); 
  const [concluirDados,  setConcluirDados]    = useState(false); 
  const [popUpAtualizar, setAtualizar]        = useState(false); 

  const closeAtualizar      = () => setAtualizar(false);

  const showDialog          = () => setPopupExibir(true);
  const hideDialog          = () => setPopupExibir(false);

  const closeVerificarDados = () => setVerificarDados(false);
  const closeConcluirDados  = () => setConcluirDados(false);


//...........................................................................
// Ação do botão atualizar perfil
const handlerButtonAtualizar = async () =>{
  
  if(emailField != '' && nameField != ''){

      /*atualizar na tebela de usuários*/
      let req = await Api.signUpAtualize(stgUserId,nameField, emailField, celularField, apelidoField, dataNasc);
        if(req.id == stgUserId){

          setAtualizar(true);
        
        } else {
          alert("Verifique os dados no seu cadastro");
        }

  } else {

  setConcluirDados(true);
  }

};

//...........................................................................
// Ação do botão deletar perfil -> exibição do pop up 

  const dialogOk  = async () => {
    
    setPopupExibir(false);
  
    /*atualizar na tebela de usuários*/
    let req = await Api.signUpDelete(stgUserId);

    if(req.id == stgUserId){
       
      navigation.reset({ routes: [{name: 'SignIn'}]});
      
    } else {
      alert("Algo deu errado");
    }
  }

//...........................................................................

//...........................................................................
    return (

      <Container>
       <ScrollView>
       
         <View style={style.subContainer}>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Perfil do Usuário</Text>
      
         <View style={{alignContent:'flex-start'}}>
         <Text style={style.textInput}>*Nome completo:</Text>
          <TextInput
          placeholder={'* Nome completo'}
          style={style.containerInput}
          keyboardType={'default'}
          value={nameField}
          onChangeText={t=>setNameField(t)}
          /> 

          <Text style={style.textInput}>Apelido:</Text>
          <TextInput
          placeholder={'Apelido'}
          style={style.containerInput}
          keyboardType={'default'}
          value={apelidoField}
          onChangeText={t=>setApelidoField(t)}
          /> 

         <Text style={style.textInput}>Data de Nascimento:</Text>
         <TextInput
          placeholder={'Data de Nascimento'}
          style={style.containerInput}
          keyboardType={'default'}
          value={dataNasc }
          onChangeText={t=>setDataNasc(t)}
          /> 

         <Text style={style.textInput}>*E-mail:</Text>
          <TextInput
          placeholder={'* E-mail'}
          style={style.containerInput}
          keyboardType={'email-address'}
          value={emailField}
          onChangeText={t=>setEmailField(t)}
          />

         <Text style={style.textInput}>Contato:</Text>
          <TextInput
          placeholder={'Celular'}
          style={style.containerInput}
          keyboardType={'default'}
          value={celularField}
          onChangeText={t=>setCelularField(t)}
          /> 
          </View>

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
          <DialogTitle title={'Deletar conta'} style={{color:'#0F0F0E'}}></DialogTitle>
          <DialogContent> Confirmar exclusão de conta?</DialogContent>
        </Dialog>
       </View>

       <View >
         <Dialog
          visible={popUpAtualizar}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={closeAtualizar} />
            </DialogFooter>
          }>
          <DialogTitle title={'Atualizado com sucesso!'} style={{color:'#0F0F0E'}}></DialogTitle>
        </Dialog>
       </View>

       <View >
         <Dialog
          visible={concluirDados}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={closeConcluirDados} />
            </DialogFooter>
          }>
           <DialogTitle title={'Atualizar conta'} style={{color:'#0F0F0E'}}></DialogTitle>
         <DialogContent> Favor preencher campos obrigatórios.</DialogContent>
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
      alignItems:'center', 
      justifyContent:'center',
    },

    subContainer:{
      alignItems:'center', 
      justifyContent:'center',
      padding: 30,
    },

    containerInput:{
      placeholderTextColor:'#A6A583',
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
    },
    textInput:{
      marginTop: 15,
       color:'#FFC82C',
     },

  });