import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Input, TextInput} from 'react-native';
import { Container } from './style';
import Api from '../../services/Api';
import { useState }  from 'react';

export default function Cartao({navigation}) {
  const [id, setId] = useState('');
  const [numeroCartao, SetnumeroCartao] = useState('')

    return (
      <Container>
        <Text style={style.title}>BarberStyle</Text>
        <Text style={style.subTitle}>Cartão</Text>
        <TextInput style={style.cartaoInput} placeholder="Numero do cartao" keyboardType="numeric"></TextInput>
        <Button style={style.subTitle} title="Cadastrar"></Button>

        <TextInput style={style.cartaoInput} placeholder="Numero do cartao" keyboardType="numeric"></TextInput>
        <Button style={style.subTitle} title="Deletar"></Button>

        <TextInput></TextInput>
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
    },
    cartaoInput:{
      color: '#FFC82C',
      fontSize: 20,
    }
  
  });