import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function SignIn({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logon</Text>
        <Button title="Cadastro" onPress={ () => navigation.navigate('SignUp') }/>
      </View>
    );
  }
  