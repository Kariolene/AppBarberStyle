import * as React from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import { 
  Container, 
  Title,
  CustomButton,
  CustomButtonText,
  SingButtonTextBold,
  SingButtonArea,
  InputArea,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  ListArea

 } from './style';
//import SearchIcon from '../../assets/search.svg'
import Barbeiro from '../../components/Barbeiro'


export default function HomeUser({navigation}) {
    return (
      <Container>
          <HeaderArea>
            <HeaderTitle>
              Encontre Seu Barbeiro Favorito com um só clique
            </HeaderTitle>
            <SearchButton>                
            </SearchButton>            
          </HeaderArea>
          <ListArea>
            <Barbeiro></Barbeiro>
          </ListArea>
      </Container>
    );
  }
  