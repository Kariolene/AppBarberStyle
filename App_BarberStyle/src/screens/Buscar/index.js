import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, RefreshControl, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import SignInput from '../../components/SingInput';
import Rede from '../../components/Fetch';
import Api from '../../services/Api';
import Barbeiro from '../../components/Barbeiro';

import { Feather } from '@expo/vector-icons';

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
  
} from './style';

export default function Buscar({navigation}) {
//Buscar Barbeiros

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    
    
    const getBarbers = async ()=>{
      setLoading(true);
      setList([]);

      let res = await Api.getBarbers();
      if(res.error == ''){
        setList(res.data);
      }else{
        alert("Erro "+res.error);
      }
      setLoading(false);
    }    

    const onRefresh = ()=>{
      setRefreshing(false);
      getBarbers();
      getBarber();
    }

    return (
      <Container>
            
          <Title>BarberStyle</Title>
          <SubTitle>Buscar</SubTitle>
          <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
          <SearchArea RefreshControl={
          <RefreshControl
          refreshing={refreshing} onRefresh={onRefresh}
      />
        }>
            <SearchInput 
              placeholder="Buscar por seu barbeiro"
              placeholderTextColor="#FFFFFF" />

              
            {/* <SignInput
             placeholder = "Buscar por seu barbeiro"
             value={idBarber}
             onChangeText={t=>setIdBarber(t)}/>
             <Button  onClick={()=> this.Rede()} />
             
             */}
            
          </SearchArea>
            <Feather name="refresh-ccw" size={24} color="black" />
        <Scroller >
{/*<button onClick={() => this.handleClick()}>Clique em mim!</button>;*/}
          {loading &&
            <LoadingIcon size="small" color="#FFF"/>
          }
            
            <ListArea>
              
              <Rede />

            </ListArea>
       
        </Scroller>
      </Container>
    );
  }
  

/*
Falta pegar a informação e levar para outro campo
*/
  