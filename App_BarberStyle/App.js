import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stack/MainStack';
import UserContextProvider from './src/contexts/UserContext';


export default function App(){
  return (
     <NavigationContainer>
       <MainStack/>
     </NavigationContainer>
  );
}
