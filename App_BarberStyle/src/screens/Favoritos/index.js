import * as React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button} from 'react-native';
import { Container } from './style';



export default function Agenda({navigation}) {
    return (
      <View style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>
        <Text>Favoritos</Text>
                <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
                
               
      </View>
    );
  }
  
