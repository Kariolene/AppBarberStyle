
import  React , { useState, useContext, fatch }  from 'react';
import SignInput from  '../../components/SingInput';
import UserContext from '../../contexts/UserContext';
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

//KAS - API Context 
  const { stgNome,     setStgNome,
          stgUserId,   setStgUserId,
          stgEmail,    setStgEmail,
          stgPassword, setStgPassword,
          stgCelular,  setStgCelular,
          stgApelido,  setStgApelido,
          stgDataNasc, setStgDataNasc } = useContext(UserContext);
      
//...........................................................................
/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/

  const [id, setId] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [email, setEmail] = useState('');
//...........................................................................
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = async () =>{
 
     if( id != '' && passwordField != ''){   
     // if( email != '' && passwordField != ''){  
      let json = await Api.getUser(id);
         //let json = await Api.getUser2(email);
       if( json.id == id ){
        
         // if( json.email == email ){
            if(json.password == passwordField ) {
                //Preenchimento do context api
                setStgUserId(json.id);
                setStgNome(json.name);
                setStgEmail(json.email);
                setStgCelular(json.celular);
                setStgApelido(json.apelido);
                setStgDataNasc(json.dataNascimento);
                setStgPassword(json.password);

                navigation.reset({routes: [{name: 'HomeUser'}]});
                
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

//...........................................................................
/*Cadastrar usuário*/
  const handlerLinkClick = ()=>{
   navigation.reset({
     routes: [{name: 'SignUp'}]
    });
  }

//...........................................................................
/*Trocar de conta*/
const handlerLinkBabearias = ()=>{
  navigation.reset({
    routes: [{name: 'SignInBarbearia'}]
   });
 }

//...........................................................................

    return (

        <Container>

          <Title>BarberMob</Title>
       
          <InputArea>
          <SignInput
             placeholder = "Usuário"
             value={id}
             onChangeText={t=>setId(t)}>
          </SignInput> 

          {/*<SignInput
             placeholder = "Usuário"
             value={email}
             onChangeText={t=>setEmail(t)}>
          </SignInput>  */}

          {/* Input da senha personalizado*/} 
          <SignInput
             placeholder = "Senha"
             value={passwordField}
             onChangeText={t=>setPasswordField(t)}
             password={true}
             />
          
          </InputArea>
          
          <CustomButton onPress={handlerButtonLoginClick}>
            <CustomButtonText>Login</CustomButtonText>
          </CustomButton>

          {/* Botão do tipo link*/}
          <SingButtonArea onPress={handlerLinkClick}>
            <SingButtonTextBold>Cadastre-se</SingButtonTextBold>
          </SingButtonArea>

          
          {/* Botão do tipo link*/}
          <SingButtonArea onPress={handlerLinkBabearias}>
          <SingButtonTextBold>Barbearias</SingButtonTextBold>
        </SingButtonArea>
      
      </Container>
    );
  }
  

