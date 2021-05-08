import  React , {useContext, useState, useEffect }from 'react';
import { View, Text, Button, row, StyleSheet, Image, TouchableOpacity, TextInput, FlatList,data  } from 'react-native';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components/native';
import { 
  Container,
  } from './style';

const NomeServicos = styled.TouchableOpacity`
  background-color: #FFFFFF;
`;

 export default function HomeUser({navigation}) {
   
   const { stgNome,     setStgNome,
          stgUserId,   setStgUserId,
          stgEmail,    setStgEmail,
          stgPassword, setStgPassword,
          stgApelido,  setStgApelido,
          stgCelular,  setStgCelular,
          stgDataNasc, setStgDataNasc } = useContext(UserContext);
          
          const [dados, setDados] = useState([])
          const[carregando, setCarregando] = useState(true)
          
          useEffect( ()=> {
            fetch('https://607a5bfdbd56a60017ba29de.mockapi.io/api/appBarberStyle/servicosBarbearia')
            .then((reqServicos) => reqServicos.json() ) 
            .then((JSON) =>setDados(json.itens) ) 
            .catch(()=>(alert('Erro ao carregar'))) 
            .finally(()=> setCarregando(false))
            
          },[

          ])
          
          const handlerObterServicos = () =>{   
            navigation.navigate('HomeUser',{
              id: data.id,
              nomeServicos: data.nomeServicos,
              valores: data.valores
            
            })
            //let reqServicos = await Api.getServicos(()=>{
            ;
            
          };


  return (
    <Container >
         <Text style={style.title}>BarberStyle</Text>
         <Text style={style.subTitle}>Home</Text>
          <row>
            <View
            style={{
              
              background: '#FFC82C',
              marginTop:11,
              
              

          }}
            

            >
            <Button title="Logout" onPress={ () => navigation.navigate('SignIn') }/>
            </View>

            <View 
             style={{

              color: '#FFC82C',
              marginTop:11,
              
              

          }}
            >
            <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
            </View>
          </row>





          <TouchableOpacity 
                
            style={style.btnCanada}>
                <Text style={{
                    color:'white',  
                    marginLeft:10,  
                }}>
                  Corte de cabelo (MASCULINO)
                </Text>

                <View>
                <Image
                    style={{
                        width: 45,
                        height: 30,
                        position: 'absolute',
                        marginLeft:300,
                        marginTop:-11,
                        
                        

                    }}
                    source={require('../../assets/maquina.png')}
                />
            </View>

                <Text style={{
                    color:"#FFF",
                    marginLeft:10,
                }}>
                   R$ 18,00
                </Text>
            </TouchableOpacity>



<FlatList
                
data={data}
renderItens={({Itens})=>{
  <View onPress={handlerObterServicos}>
      <NomeServicos>{itens.nomeServico}</NomeServicos>


  </View>
}}



/>

            <TextInput
            style={style.input}
            placeholder="Local"
            autoCorrect={false}
            onChangeText={() => { }}
               />

            <TextInput
            style={style.input}
            placeholder="Nome"
            autoCorrect={false}
            onChangeText={() => { }}
               />

            <TextInput
            style={style.input}
            placeholder="Telefone"
            autoCorrect={false}
            onChangeText={() => { }}
               />

            <TextInput
            style={style.input}
            placeholder="Horario"
            autoCorrect={false}
            onChangeText={() => { }}
               />























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

  btnCanada:{
    backgroundColor:"#79F027",
    borderColor:"#FFF",
    borderRadius: 7,
    width: "90%",
    height: 50,
    marginLeft:10,
    borderWidth:2,
    marginTop:70,
     },

});

  
