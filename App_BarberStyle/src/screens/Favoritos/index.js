import * as React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Container } from './style';



export default function Favoritos({navigation}) {
    return (
      <Container>
        <Text style={style.title}>BarberStyle</Text>
        <Text style={style.subTitle}>Favoritos</Text>
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