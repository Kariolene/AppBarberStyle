import * as React from 'react';
import { ImageBackground, Input, TextInput } from 'react-native';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Container } from './style';
import SignInput from  '../../components/SingInput';


export default function Cartao({navigation}) {
    return (
      <Container>
        <Text style={style.title}>BarberStyle</Text>
        <Text style={style.subTitle}>Cartão</Text>
        {/*<SignInput
             placeholder = "Cartão"
             value={id}
             onChangeText={t=>setId(t)}>
        </SignInput>*/}
        <Input></Input>
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