import  React, {useContext, useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import { Container,  } from './style';
import UserContext from '../../contexts/UserContext';
import Api from '../../services/Api';
import FlatlistServico from '../../components/FlatlistServico';



 export default function HomeBarbearia({navigation}) {
   
  const {stgNome, setStgNome, stgUserId, setStgUserId} = useContext(UserContext);


  return (
   <Container>

      <View style={ style.contButtomHome}>
      <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      </View>

       <View style={ style.contText }>
        <Text style={style.title}>BarberStyle</Text>
        <Text style={style.subTitle}>HomeBarbearia</Text>
       </View>

       <SafeAreaView style={style.container}>
        <FlatlistServico/>
       </SafeAreaView>

    </Container>
  );
}


const style = StyleSheet.create({

  /*Style para o titulo da screen*/
  title:{
    marginTop:15,
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

  contButtomHome:{
    padding:10,
    alignItems:'flex-end',
    justifyContent:"flex-end",
  },

  contText:{
  justifyContent: 'center',
  alignItems:'center',
  },

  container: {
    flex: 1,
    marginTop: 20,
    padding: 30,
  },
  itemText:{
   color:'#0F0F0E',
  },
  item: {
    backgroundColor: '#CFD1D4'  ,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 30,
  }

});

  
