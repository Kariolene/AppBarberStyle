import  React , {useContext, useState }from 'react';
import { View, Text, Button, row, StyleSheet, SafeAreaView,FlatList} from 'react-native';
import UserContext from '../../contexts/UserContext';
import { 
  Container, 
 } from './style';
import serviceUser from '../../services/serviceUser';




 export default function HomeUser({navigation}) {
   
// KAS - API Context - Recuperando dados enviados no login
  const { stgNome,     setStgNome,
          stgUserId,   setStgUserId,
          stgEmail,    setStgEmail,
          stgPassword, setStgPassword,
          stgCelular,  setStgCelular,
          stgApelido,  setStgApelido,
          stgDataNasc, setStgDataNasc } = useContext(UserContext);


  //...............................................................KAS
  const renderItem = ({ item }) => (
    <Item title={item.name} />
  );

 const ObterTodosUsers = (props) =>{
   
  const construtorUser = {
    "name": "",
    "email": "",
  }

  const [usuario , setUsuario] = useState(construtorUser);
  
  const usuarios = async = () =>{
    serviceUser.obterUser();
  }

 }

  //..................................................................


  return (

    <Container >
        <View style={style.subContainer}>
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
        </View>
       <View style={style.componentes}>
         <Text style={style.userNome}> {stgNome} Bem-vindo(a) ao </Text>
         <Text style={style.title}>BarberStyle</Text>
       </View>
    </Container>
  );
}




const style = StyleSheet.create({

  /*Style para o titulo da screen*/
  title:{
    marginTop:10,
    color: '#FFC82C',
    fontFamily: 'Serif',
    fontSize: 45,
    padding: 20,
  },

  userNome:{
    marginTop:20,
    color: '#FFC82C',
    fontFamily: 'Serif',
    fontSize: 20,
    padding: 5,
  },


  /*Style para o subtitulo da screen*/
  subTitle:{
    color: '#FFC82C',
    fontFamily: 'Serif',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subContainer:{
    alignItems:'flex-end', 
    justifyContent:'flex-end',
    padding: 30,
  },

  componentes:{
    alignItems:'center', 
    justifyContent:'center',
    padding: 30,
  },


});

  
