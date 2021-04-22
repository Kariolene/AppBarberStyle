import { createStackNavigator } from '@react-navigation/stack';
import { creatDrawerNavigator } from '@react-navigation/drawer'
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import HomeUser from '../screens/HomeUser';
import PerfilUser from '../screens/PerfilUser';
<<<<<<< Updated upstream
import MainTab from './MainTab';

import Agenda from '../screens/Agenda';
import Search from '../screens/Search';
import Favoritos from '../screens/Favoritos';
=======
import DrawerStack from '../stack/DrawerStack'

>>>>>>> Stashed changes



const Stack = createStackNavigator();


export default function MainStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn"    component={SignIn}/>
        <Stack.Screen name="SignUp"    component={SignUp}/>
<<<<<<< Updated upstream
        <Stack.Screen name="HomeUser"  component={HomeUser}/>
        <Stack.Screen name="PerfilUser"  component={PerfilUser}/>
        <Stack.Screen name="MainTab"  component={MainTab}/>
        <Stack.Screen name="Agenda"  component={Agenda}/>
        <Stack.Screen name="Search"  component={Search}/>
        <Stack.Screen name="Favoritos"  component={Favoritos}/>
=======
        <Stack.Screen name="HomeUser"  component={DrawerStack}/>
        {/*<Stack.Screen name="PerfilUser"  component={PerfilUser}/>*/}
>>>>>>> Stashed changes
    </Stack.Navigator>
  );
}