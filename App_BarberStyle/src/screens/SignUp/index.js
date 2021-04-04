import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function SignUp({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Cadastro</Text>
        <Button title="Logon" onPress={ () => navigation.navigate('SignIn') }/>
      </View>
    );
  }
  