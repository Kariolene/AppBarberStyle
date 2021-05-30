import React, { useState, useContext }  from 'react';
import { View, Text, StyleSheet,ScrollView, TextInput} from 'react-native';
import Dialog, { DialogFooter, DialogButton, DialogContent, DialogActions, DialogTitle } from 'react-native-popup-dialog';
import UserContext from '../../contexts/UserContext';
import Api from '../../services/Api';
import { 
  Container ,
  CustomButtonText,
  CustomButton,
  SingButtonTextBold,
  SingButtonArea
} from './style';



export default function SignUp({navigation}) {

 const { stgNome,     setStgNome,
         stgUserId,   setStgUserId,
         stgEmail,    setStgEmail,
         stgPassword, setStgPassword,
         stgCelular,  setStgCelular,
         stgApelido,  setStgApelido,
         stgDataNasc, setStgDataNasc } = useContext(UserContext);

  //................. ............................................................
  /*Hooks que permitem digitar campos da tela*/

  const [nameField, setNameField] =useState('');
  const [dataNasc,  setdataNasc]  =useState('');

  const [emailField,   setEmailField]    =useState('');
  const [passwordField,setPasswordField] =useState('');
  const [passwordConf, setPasswordConf]  =useState('');
  
  const [celularField, setCelularField]  =useState('');
  const [apelidoField, setApelidoField]  =useState('');

 
  //const [stlUsuarioId,  setStlUsuarioId]   = useState(false); 
  const [verificarDados, setVerificarDados]   = useState(false); 
  const [verificarSenha, setVerificarSenha]   = useState(false); 
  const [concluirDados,  setConcluirDados]    = useState(false); 

 // const closeStlUsuarioId  = () =>   setStlUsuarioId(false);
  const closeVerificarDados = () =>  setVerificarDados(false);
  const closeConcluirDados  = () =>  setConcluirDados(false);
  const closeVerificarSenha = () =>  setVerificarSenha(false);


  const handlerButtonCadastrar = async () =>{

    if(emailField != '' && nameField != '' && passwordField != '' ){

      if (passwordConf == passwordField) {
        
        /*inserir na tebela de usuários*/
        let req = await Api.signUp(
          nameField, 
          emailField, 
          celularField, 
          apelidoField, 
          dataNasc,
          passwordField);
        
        if(req.id != ' '){
                     
         // setStlUsuarioId(true);
          alert("Cadastro realizado! Seu usuário é: "+req.id);
          
          //Enviando dados pelo contexto
          setStgNome(nameField);
          setStgUserId(req.id);
          setStgEmail(emailField);
          setStgPassword(passwordField);
          setStgCelular(celularField );
          setStgApelido(apelidoField);
          setStgDataNasc(dataNasc);

          //Fazer login
          navigation.navigate('SignIn');

        
      } else {
        //alert("Verifique os dados no seu cadastro");
        setVerificarDados(true)
        }

      } else{
       // alert("Senhas diferentes, favor verificar.");
       setVerificarSenha(true)
      }

     } else {
      //alert("Favor preencher todos os campos obrigatórios.");
      setConcluirDados(true);
     }
    
  };

//.............................................................................

    return (
   
  
      <Container>
        <ScrollView>

         <View style={style.subContainer}>

         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Cadastro</Text>
          
        <View style={{alignContent:'flex-start'}}>

         <Text style={style.textInput}>*Nome completo:</Text>
          <TextInput
          placeholder={'* Nome '}
          style={style.containerInput}
          keyboardType={'default'}
          value={nameField}
          onChangeText={t=>setNameField(t)}/> 

         <Text style={style.textInput}>Apelido:</Text>
          <TextInput
          placeholder={'Apelido'}
          style={style.containerInput}
          keyboardType={'default'}
          value={apelidoField}
          onChangeText={t=>setApelidoField(t)}/> 

         <Text style={style.textInput}>Data de Nascimento:</Text>
          <TextInput
          placeholder={'Data de nascimento'}
          style={style.containerInput}
          keyboardType={'numeric'}
          value={dataNasc}
          onChangeText={t=>setdataNasc(t)}/> 

         <Text style={style.textInput}>*E-mail:</Text>
          <TextInput
          placeholder={'* E-mail '}
          style={style.containerInput}
          keyboardType={'email-address'}
          value={emailField}
          onChangeText={t=>setEmailField(t)}/>

          <Text style={style.textInput}>Contato:</Text>
          <TextInput
          placeholder={'Celular'}
          style={style.containerInput}
          keyboardType={'default'}
          value={celularField}
          onChangeText={t=>setCelularField(t)}/> 

          <Text style={style.textInput}>*Senha:</Text>
          <TextInput
          placeholder={'* Senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordField(t)}/>

          <Text style={style.textInput}>*Confirme a Senha:</Text>
          <TextInput
          placeholder={'* Confirme a senha'}
          style={style.containerInput}
          secureTextEntry={true}
          onChangeText={t=>setPasswordConf(t)}/>
          </View>
        
        <CustomButton onPress={handlerButtonCadastrar}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>

        <SingButtonArea onPress={ () => navigation.navigate('SignIn') }>
        <SingButtonTextBold>Fazer Login</SingButtonTextBold>
        </SingButtonArea>


       {/* <View >
         <Dialog
          visible={stlUsuarioId}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={closeStlUsuarioId} />
            </DialogFooter>
          }>
          <DialogTitle>{stgUserId}</DialogTitle>
          <DialogContent>Cadastro realizado!</DialogContent>
        </Dialog>
        </View>*/}


       <View >
         <Dialog
          visible={verificarDados}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={closeVerificarDados} />
            </DialogFooter>
          }>
          <DialogTitle></DialogTitle>
          <DialogContent>Verifique os dados no seu cadastro</DialogContent>
        </Dialog>
       </View>

       <View >
         <Dialog
          visible={verificarSenha}
          footer={
            <DialogFooter>
              <DialogButton
                text="OK"
                onPress={closeVerificarSenha} />
            </DialogFooter>
          }>
          <DialogTitle></DialogTitle>
          <DialogContent>Senhas divergentes.</DialogContent>
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
          <DialogTitle></DialogTitle>
          <DialogContent>Favor preencher campos obrigatórios.</DialogContent>
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
     // marginTop:40,
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
      margin:40,
    },

    textInput:{
     // justifyContent:'left',
     // alignContent: ,
     marginTop: 15,
      color:'#FFC82C',
      //fontWeight: 'bold',
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


  });