
import React from 'react';
import styled from 'styled-components/native';


//........................................................
export const Container = styled.SafeAreaView`
background-color: #0F0F0E;
opacity: 80%;
flex: 1;
align-items: center;
justify-content: center;
padding:50px;
`;

//........................................................
/*Texto: Login do botão personalizado da tela de logon */
export const CustomButtonText = styled.Text`
font-size: 18px;
color:'#FFC82C';
font-weight: bold;

`;

//........................................................
export const CustomButton = styled.TouchableOpacity` 
background-color:#FFC82C;
height: 40px;
width: 150px;
border-radius: 30px;
justify-content: center;
align-items: center;
margin: 20px;
`;

//........................................................
/* Area de click do nome :Cadastre-se */
export const SingButtonArea = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-bottom: 30px;

`;

//........................................................
/*Texto link para a tela de cadastro */
export const SingButtonTextBold = styled.Text` 
text-decoration: none;
color: #A6A583;
font-family: sans-serif;
font-size: 16px;
font-weight: bold;
margin-left: 5px;
`;

//........................................................