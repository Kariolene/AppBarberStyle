<<<<<<< Updated upstream
import React from 'react'
import {Text} from 'react-native'
import {Container} from './styles'

export default ()=> {
    return (
        <Container>
            <Text>Agenda</Text>
        </Container>
    )
}
=======
import * as React from 'react';
import { ImageBackground } from 'react-native';
import { View, Text, Button} from 'react-native';
import { Container } from './style';



export default function Agenda({navigation}) {
    return (
      <View style={{display:"flex", justifyContent:"flex-end", width:"100px"}}>
        <Text>Agenda</Text>
                <Button title="Abrir Menu"  onPress={ () => navigation.toggleDrawer() }/>
                
               
      </View>
    );
  }
  
>>>>>>> Stashed changes
