import  React , {useContext, useState }from 'react';
import { View, Text, Button, row, StyleSheet} from 'react-native';
import UserContext from '../../contexts/UserContext';
import { 
  Container, 
 } from './style';


 export default function HomeUser({navigation}) {

  const { stgNome,     setStgNome,
          stgUserId,   setStgUserId,
          stgEmail,    setStgEmail,
          stgPassword, setStgPassword,
          stgCelular,  setStgCelular,
          stgApelido,  setStgApelido,
          stgDataNasc, setStgDataNasc } = useContext(UserContext);
  
  return (
    <Container >
        <View style={style.subContainer}>
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
        </View>
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Home</Text>
        
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
  subContainer:{
    alignItems:'center', 
    justifyContent:'center',
    padding: 30,
  },
});

  
