import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { 
    Container,
    Scroller,
    HeaderArea,
    SearchTitle,
    SearchButton
 } from './style';

import SearchIcon from '../../assets/search.svg';

export default function SearchBarber() {
    return(
        <Container>
            <Scroller>
                <HeaderArea>
                    <SearchButton>
                        <SearchTitle> Digite o nome do Barbeiro</SearchTitle>
                        <SearchIcon widht="26" height="26" fill="#FFF" />
                    </SearchButton>
                </HeaderArea>


            </Scroller>
        </Container>
    );
}