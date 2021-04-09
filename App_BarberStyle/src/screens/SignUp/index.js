import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Container } from './style';



export default function SignUp({navigation}) {
    return (
      <View style={style.container}>

         <Text style={style.title}>BarberStyle</Text>

        <View style={style.subContainer}>
          <Text style={style.subTitle}>Cadastro</Text>
        </View>
        
         {/*Container com inputs de cadastro*/}
        <View style={style.subContainer}>
          <TextInput
          placeholder={'Nome '}

          /> 
          <TextInput
          placeholder={'E-mail'}

          />

          <TextInput
          placeholder={'Senha'}
          
          />
        </View>

        <Button title="Salvar" onPress={ () => navigation.navigate('SignIn') }/>

        <Button title="Logon" onPress={ () => navigation.navigate('SignIn') }/>
      </View>
    );
  }
  

  const style = StyleSheet.create({

    /*Style para o bady*/
    container:{
      flex: 1, 
      alignItems:'center', 
      justifyContent:'center',
      backgroundColor: '#0F0F0E',
      opacity: 80,
    },

    /*Style para o titulo da screen*/
    title:{
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 45,
    },

    /*Style para o subtitulo da screen*/
    subTitle:{
      color: '#FFC82C',
      fontFamily: 'Serif',
      fontSize: 20,
    },

    subContainer:{
      alignItems:'center', 
      justifyContent:'center',
     // backgroundColor: '#FFC82C',
      padding: 50,
    },

    containerInput:{
      alignItems:'center', 
      justifyContent:'center',
      placeholderTextColor = '#0F0F0E'
    }

  });