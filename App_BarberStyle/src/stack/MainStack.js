import { createStackNavigator } from '@react-navigation/stack';
import { creatDrawerNavigator, DrawerButton  } from '@react-navigation/drawer'
import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import PerfilUser from '../screens/PerfilUser';
import DrawerStack from './DrawerStack';
import Agenda from '../screens/Agenda';
import Favoritos from '../screens/Favoritos';
import SearchBarber from '../screens/SearchBarber';
import SignUpBarbearia from '../screens/SignUpBarbearia';
import SignInBarbearia from '../screens/SignInBarbearia';
import HomeBarbearia from '../screens/HomeBarbearia';
import PerfilBarbearia from '../screens/PerfilBarbearia';
import Cartao from '../screens/Cartao'



const Stack = createStackNavigator();


export default function MainStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="SignIn"          component={SignIn} />
        <Stack.Screen name="SignUp"          component={SignUp} />
        <Stack.Screen name="HomeUser"        component={DrawerStack}/>
        <Stack.Screen name="PerfilUser"      component={PerfilUser}/>
        <Stack.Screen name="Agenda"          component={Agenda}/>
        <Stack.Screen name="SearchBarber"    component={SearchBarber}/>
        <Stack.Screen name="Favoritos"       component={Favoritos}/>

        <Stack.Screen name="SignInBarbearia" component={SignInBarbearia} />
        <Stack.Screen name="SignUpBarbearia" component={SignUpBarbearia} />
        <Stack.Screen name="HomeBarbearia"   component={HomeBarbearia}/>
        <Stack.Screen name="PerfilBarbearia" component={PerfilBarbearia}/>
        <Stack.Screen name="Cartao" component={Cartao}/>

    </Stack.Navigator>
  );
}
