import * as React from 'react';
import { View, Text, Button, TextInput} from 'react-native';
import { 
  Container, 
 } from './style';


 export default function HomeUser({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title="Logout" onPress={ () => navigation.navigate('SignIn') }/>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}