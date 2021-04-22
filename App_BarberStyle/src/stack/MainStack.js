import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomeUser from '../screens/HomeUser';
import Search from '../screens/Search';
import MainTab from '../stack/MainTab';


const Stack = createStackNavigator();


export default function MainStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn"    component={SignIn}/>
        <Stack.Screen name="SignUp"    component={SignUp}/>
        <Stack.Screen name="HomeUser"  component={HomeUser}/>
        <Stack.Screen name="Search"    component={Search}/>
        <Stack.Screen name="MainTab"   component={MainTab} />
    </Stack.Navigator>
  );
}
