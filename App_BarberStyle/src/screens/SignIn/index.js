import  React , { useState, useContext }  from 'react';
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


  const { stgNome,     setStgNome,
          stgUserId,   setStgUserId,
          stgEmail,    setStgEmail,
          stgPassword, setStgPassword,
          stgCelular,  setStgCelular,
          stgApelido,  setStgApelido,
          stgDataNasc, setStgDataNasc } = useContext(UserContext);
      
//...........................................................................
/*Hooks que permitem digitar e-mail/senha na tela ou alterar o que foi digitado*/

  const [id,            setId]            = useState('');
  const [passwordField, setPasswordField] = useState('');
  
//...........................................................................
/*Ação do botão de login do usuário*/
  const handlerButtonLoginClick = async () =>{
 
     if(id != '' && passwordField != ''){   

        let json = await Api.getUser(id);

        if( json.id == id ){
          
            if(json.password == passwordField ) {
                
                setStgUserId(id);
                navigation.reset({routes: [{name: 'HomeUser'}]});
                
            }else{
              alert("Senha inválida.");
            }
        
        } else {
          alert("Usuário não cadastrado ou e-mail inválido.");
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
  

