import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Api from '../../services/Api';
import Barbeiro from '../../components/Barbeiro';

import { 
  Container,
  Title, 
  Scroller, 
  SubTitle,
  SearchArea,
  SearchInput,
  SearchFinder,
  LoadingIcon,

  ListArea,
  Barbeiro,
} from './style';

//import { Fontisto } from '@expo/vector-icons';


export default function Buscar({navigation}) {
//Buscar Barbeiros
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    
    const handleSearchBarber = () =>{
      setLoading(true);
      setList([]);

      getBarber();
    }

    const getBarber = async ()=>{
      setLoading(true);
      setList([]);

      let res = await Api.getBarber();
      if(res.error == ''){
        //Setar a localização
        //if(res.loc){
        //  setLocationText(res.loc);
        //}
        setList(res.data);
      }else{
        alert("Erro: "+res.error);
      }

      setLoading(false);
    }

    useEffect(()=>{
      console.log(res)
      getBarber();
    }, []);
    //*/
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

          <ListArea>
            {list.map((item, k)=>(
              <Barbeiro key={k} data={item} />
            ))}
          </ListArea>

        </Scroller>
      </Container>
    );
  }
  

/*
Falta pegar a informação e levar para outro campo
*/
  