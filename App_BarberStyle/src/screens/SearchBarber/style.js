import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #63C2D1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 20px;
`;

export const HeaderArea = styled.SafeAreaView`
    flex-direction: row;
    justify-items: center;
`;

export const SearchTitle = styled.Text`
    font-size: 14px;
    color: #FFF;
`;

export const SearchButton = styled.TouchableOpacity`
    justify-content: space-between;
`;
