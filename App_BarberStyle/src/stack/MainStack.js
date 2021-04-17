import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomeUser from '../screens/HomeUser';




const Stack = createStackNavigator();


export default function MainStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn"    component={SignIn}/>
        <Stack.Screen name="SignUp"    component={SignUp}/>
        <Stack.Screen name="HomeUser"  component={HomeUser}/>
    </Stack.Navigator>
  );
}