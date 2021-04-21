import React from 'react';
import styled from 'styled-components/native';



/*Container personalizado com fundo padão do app */
export const Container = styled.SafeAreaView`
background-color: #0F0F0E;
opacity: 80%;
flex: 1;
align-items: center;
justify-content: center;
`;

/*Nome da barbearia*/
export const Title = styled.Text`
color: #FFC82C;
font-family: Serif;
font-size: 45px;
`;

/*Area para os inputs para fazer logon*/
export const InputArea = styled.View`
padding: 10px;
border-radius: 30px;
justify-content: center;
align-items: center;
width: 80%;
`;

/*Bootão personalizado */
export const CustomButton = styled.TouchableOpacity` 
background-color:#FFC82C;
height: 40px;
width: 150px;
border-radius: 30px;
justify-content: center;
align-items: center;
margin: 10px;
`;

/*Texto: Login do botão personalizado da tela de logon */
export const CustomButtonText = styled.Text`
font-size: 18px;
color:#0F0F0E;
font-weight: bold;

`;

/* Area de click do nome :Cadastre-se */
export const SingButtonArea = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom:20px;
`;

/*Texto link para a tela de cadastro */
export const SingButtonTextBold = styled.Text` 
text-decoration: none;
color: #A6A583;
font-family: sans-serif;
font-size: 16px;
font-weight: bold;
margin-left: 5px;
`;

/*titulo da Home*/
export const HeaderTitle = styled.Text` 
color: #FFF;
font-family: sans-serif;
font-size: 24px;
font-weight: bold;
width: 250px;
`;
/*Area da home*/

export const HeaderArea = styled.Text` 
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

/*Botão de pesquisar*/
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;
/*Barbeiros*/
export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;