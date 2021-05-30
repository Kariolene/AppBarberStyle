import React, {useState, useEffect } from 'react';
import { View ,Text, FlatList, StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';



export default function FlatlistServico () {

const [dados, setDados]=useState([]);
const [carregarServ, setCarregarServ]=useState(true);

useEffect(()=>{
         fetch('https://607a5bfdbd56a60017ba29de.mockapi.io/api/appBarberStyle/servicosBarbearia')
         .then((resp)=>resp.json())
         .then((json)=>setDados(JSON.stringify(json.items)))
         .catch(()=>(alert('Erro ao carregar os serviços')))
         .finally(()=>setCarregarServ(false))
    },[]
)

alert(dados);
    return(
        <SafeAreaView style={style.container}>    
          {
              carregarServ ? <ActivityIndicator/> : (
                <FlatList
                data={dados}
                renderItem={({item}) =>( 
                <Text title={item.nomeServoco} /> 
                )}
                keyExtractor={item => item.id}/>
              )
          }
       </SafeAreaView >
    )

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

      marginTop: 20,
      padding: 30,
        backgroundColor:' #0F0F0E',
        opacity: 80,
        flex: 1,
        alignItems: 'center',

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