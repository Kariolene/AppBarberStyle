import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Title, 
  Scroller, 
  SubTitle,
  SearchArea,
  SearchInput,
  SearchFinder,
  LoadingIcon,
} from './style';

import { Fontisto } from '@expo/vector-icons';


export default function Buscar({navigation}) {
//Buscar Barbeiros
    /*const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    
    const handleSearchBarber = () =>{
      setLoading(true);
      setList([]);

      getBarbers();
    }

    const getBarbers = ()=>{

    }
    */
    return (
      <Container>
            
          <Title>BarberStyle</Title>
          <SubTitle>Buscar</SubTitle>
          <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
        <Scroller >
          <SearchArea>
            <SearchInput 
              placeholder="Buscar por seu barbeiro"
              placeholderTextColor="#FFFFFF" />
            <SearchFinder /*onPress={handleSearchBarber}*/>
              <Fontisto name="search" size={24} color="white" />
            </SearchFinder>
          </SearchArea>    

          
            <LoadingIcon size="small" color="#FFF"/>



        </Scroller>
      </Container>
    );
  }
  

/*
Falta pegar a informação e levar para outro campo
*/
  