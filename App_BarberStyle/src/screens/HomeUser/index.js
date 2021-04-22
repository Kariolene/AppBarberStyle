import * as React from 'react';
<<<<<<< Updated upstream
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
=======
import { ImageBackground } from 'react-native';
import { View, Text, Button} from 'react-native';
import { Container } from './style';
>>>>>>> Stashed changes

 } from './style';
//import SearchIcon from '../../assets/search.svg'
//import Barbeiro from '../../components/Barbeiro'


export default function HomeUser({navigation}) {
    return (
<<<<<<< Updated upstream
      <Container>
        <Text>
          HomeUser
        </Text>
          {/*<HeaderArea>
            <HeaderTitle>
              Encontre Seu Barbeiro Favorito com um só clique
            </HeaderTitle>
            <SearchButton>    
                       
            </SearchButton>            
          </HeaderArea>
          <ListArea>
            
          </ListArea>*/}
      </Container>
=======
      <View style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>
        <Text>Agenda</Text>
                <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
                
               
      </View>
>>>>>>> Stashed changes
    );
  }
  