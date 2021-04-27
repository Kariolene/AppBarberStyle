import * as React from 'react';
import { View, Text, Button, row, StyleSheet} from 'react-native';
import { 
  Container, 
 } from './style';
 import FooterBar from '../../components/FooterBar';


 export default function HomeBarbearia({navigation}) {
  return (
    <Container >
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Meu Perfil</Text>
          <row>
            <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
          </row>
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

});

  
