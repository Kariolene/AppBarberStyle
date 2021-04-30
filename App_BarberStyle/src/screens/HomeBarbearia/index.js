import  React, {useContext} from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { Container,  } from './style';
import UserContext from '../../contexts/UserContext';



 export default function HomeBarbearia({navigation}) {
   
  const { nome, setNome, userId ,setUserId} = useContext(UserContext);

  
  return (
    <Container>
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>HomeBarbearia</Text>
         <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
         
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

  
