import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Container } from './style';



export default function HomeUser({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
      </View>
    );
  }
  