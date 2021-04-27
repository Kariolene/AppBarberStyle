import * as React from 'react';
import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Container, Scroller, HeaderArea } from './style';



export default function Favoritos({navigation}) {
    return (
      <Container>
          <HeaderArea >
              <Text style={style.title}>BarberStyle</Text>
            <Text style={style.subTitle}>Buscar</Text>
              <Button style={style.Buton} title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
            <Scroller >
              <Text style={style.Scroll}>Digite o nome do seu babeiro </Text>
            </Scroller>
          </HeaderArea >

          <SearchButton></SearchButton>
      </Container>
    );
  }
  


  const style = StyleSheet.create({

    /*Style para o titulo da screen*/
    title:{
      alignItems: 'center',
      marginTop:20,
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 45,
      padding: 20,

    },
  
    /*Style para o subtitulo da screen*/
    subTitle:{
      alignItems: 'center',
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 30,
      fontWeight: 'bold',
    },

    Buton:{
      paddingleft: 100,
      fill: '#AAA'
    },

    Scroll:{
      width:100,
      flex:1,
      padding: 500,
      color: '#FFF',
      backgroundColor: '#AAAAAA'
    },
  });