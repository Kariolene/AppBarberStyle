import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function SignIn({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button title="OK" onPress={ () => navigation.navigate('AdmHome') }/>
        <Button title="Cadastro" onPress={ () => navigation.navigate('SignUp') }/>
      </View>
    );
  }
  