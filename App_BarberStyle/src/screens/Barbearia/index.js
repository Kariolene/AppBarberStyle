import * as React from 'react';
import { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container } from './style';
import Api from  '../../services/Api';



export default function () {

  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    nameBarbearia: data.nameBarbearia,
    nameResponsavel: data.nameResponsavel,
    email: data.email 
  });

  useEffect(()=>{
    const getBarberInfo = async ()=>{
      setLoading(true);

      let json = await Api.getBarberOnly(userInfo.id);
      if(json.error == ''){
        setUserInfo(json.data);
      }else{
        alert("Erro: "+json.erro);
      }
      setLoading(false);
    }
    getBarberInfo();
  }, []);

    return (
      <Container>
        <Text style={style.title}>BarberStyle</Text>
        <Text style={style.subTitle}>Barbearia</Text>
          <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>   

        


      </Container>
    );
  }
  
  const style = StyleSheet.create({

    /*Style para o titulo da screen*/
    title:{
      marginTop:60,
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 45,
      padding: 20,
    },
  
    /*Style para o subtitulo da screen*/
    subTitle:{
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 30,
      fontWeight: 'bold',
    }
  
  });