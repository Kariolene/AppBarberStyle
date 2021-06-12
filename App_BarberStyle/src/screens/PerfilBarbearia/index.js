import React, { useState, useContext }  from 'react';
import { View, Text,StatusBar, Button, StyleSheet,SafeAreaView, ScrollView, TextInput } from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogActions }  from 'react-native-popup-dialog';
import UserContext from '../../contexts/UserContext';
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';

export default function PerfilBarbearia({navigation}) {

//KAS - API Context para barbearias - 
  const {stgNomeBar,   setStgNomeBar,
        stgBarId,      setStgBarId,
        stgEmailBar,   setStgEmailBar,
        stgPassBar,    setStgPassBar,
        stgCelularBar, setStgCelularBar,
        stgRespBar,    setStgRespBar,
        stgcnpjBar,    setStgCnpjBar}  = useContext(UserContext);
  //.............................................................................
  /*Hooks que permitem digitar campos da tela*/
 
  const [nameBarber, setNameBaber]          = useState(stgNomeBar);
  const [emailBarber, setEmailBarber]       = useState(stgEmailBar);
  const [passwordBarber, setPasswordBarber] = useState(stgPassBar);
  const [passwordConf, setPasswordConf]     = useState('');
  const [nomeResp, setNomeResp]             = useState(stgRespBar);
  const [celularField, setCelular]          = useState(stgCelularBar);
  const [cnpj, setCnpj]                     = useState(stgcnpjBar);
  
//...........................................................................
// Ação do botão atualizar perfil

const handlerButtonAtualizar = async () =>{

  if(emailBarber != '' && nameBarber != '' && passwordBarber != '' && cnpj != ''){

     if(passwordBarber == passwordConf){

    /*atualizar na tebela de usuários*/
    let req = await Api.BarberAtualizar(  stgBarId,
                                          nameBarber,
                                          nomeResp,
                                          celularField,
                                          emailBarber,
                                          passwordBarber,
                                          cnpj);

    if(req.id == stgBarId){

       alert("Atualizado com sucesso!");
    
    } else {
      alert("Verifique os dados no seu cadastro");
     }
  }else {
    alert("Senhas divergentes");
  }
} else {
alert("Favor preencher todos os campos com '*'.");
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
  let req = await Api.deleteBarber(stgBarId);

  if(req.id == stgBarId){

    alert("Conta deletada.");

    //Voltar para tela de login
    navigation.reset({ routes: [{name: 'SignInBarbearia'}]});

  } else {
    alert("Algo deu errado");
  }
}

//...........................................................................

    return (
   
  
      <Container>
        <ScrollView>

         <View style={ style.contButtomHome}>
         <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
         </View>

         <View style={style.subContainer}>
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Cadastro de Barbearia</Text>
          
         <View style={{alignContent:'flex-start'}}>
         <Text style={style.textInput}>*Nome da Barbearia:</Text>
          <TextInput
          placeholder={' * Nome da Barbearia '}
          style={style.containerInput}
          keyboardType={'default'}
          value={nameBarber}
          onChangeText={t=>setNameBaber(t)}/> 

         <Text style={style.textInput}>*E-mail:</Text>
          <TextInput
          placeholder={' * E-mail'}
          style={style.containerInput}
          keyboardType={'email-address'}
          value={emailBarber}
          onChangeText={t=>setEmailBarber(t)}/>

         <Text style={style.textInput}>Contato:</Text>
          <TextInput
          placeholder={'Telefone de contato'}
          style={style.containerInput}
          keyboardType={'default'}
          value={celularField}
          onChangeText={t=>setCelular(t)}/> 

          <Text style={style.textInput}>*CNPJ:</Text>
          <TextInput
          placeholder={' * CNPJ da Barbearia'}
          style={style.containerInput}
          keyboardType={'default'}
          value={cnpj}
          onChangeText={t=>setCnpj(t)}/> 

          <Text style={style.textInput}>Nome do Responsavel:</Text>
          <TextInput
          placeholder={'Nome do Responsável'}
          style={style.containerInput}
          keyboardType={'default'}
          value={nomeResp}
          onChangeText={t=>setNomeResp(t)}/> 

          <Text style={style.textInput}>* Trocar Senha:</Text>
          <TextInput
          placeholder={'* Nova senha'}
          style={style.containerInput}
          value={passwordBarber}
          onChangeText={t=>setPasswordBarber(t)}/>

          <Text style={style.textInput}>*Confirmar senha:</Text>
          <TextInput
          placeholder={'* Confirme a senha'}
          style={style.containerInput}
          onChangeText={t=>setPasswordConf(t)}/>
          </View>
        
          <CustomButton onPress={handlerButtonAtualizar}>
          <CustomButtonText>Atualizar</CustomButtonText>
          </CustomButton>
        
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
      padding: 5,
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

    contButtomHome:{
      padding: 30,
      alignItems: 'flex-end',
    },
  

  });