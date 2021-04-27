
import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
background-color: #0F0F0E;
opacity: 80%;
flex: 1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
color: #FFC82C;
font-family: Serif;
font-size: 45px;
margin-top: 40px;
padding: 20px;
`;

export const SubTitle = styled.Text`
color: #FFC82C;
font-family: Serif;
font-size: 30px;
font-weight: bold;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
    background-color: #0F0F0E;
    Margin-horizontal: 20px;
`;


export const SearchArea = styled.View`
flex-direction: row;
align-items: center;
background-color: #0F0F0E;
height: 60px;
width: 300px;

border-radius: 30px;
border-style: ridge;
border-width: 1px;
border-color: white;

padding-left: 20px;
padding-right: 20px;
margin-top: 10px;
`;

export const SearchInput = styled.TextInput`
flex: 1;
font-size: 16px;
color: #ffffff;
`;

export const SearchFinder = styled.TouchableOpacity`
width: 24px;
height: 24px;
`;




export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;
