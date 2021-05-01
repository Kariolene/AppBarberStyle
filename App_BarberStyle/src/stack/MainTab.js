import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FooterBar from '../components/FooterBar';
import HomeUser from '../screens/HomeUser';
import Favoritos from '../screens/Favoritos';
import Profile from '../screens/PerfilUser';
import Agenda from '../screens/Agenda';
import Buscar from '../screens/Buscar';

import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function MainTab() {(
    <Tab.Navigator tabBar={props=><FooterBar {...props} />}>
        <Tab.Screen name="HomeUser"   component={HomeUser} />
        <Tab.Screen name="Agenda"     component={Agenda} />
        <Tab.Screen name="Favoritos"  component={Favoritos} />
        <Tab.Screen name="PerfilUser" component={Profile} />
        <Tab.Screen name="Buscar"     component={Buscar} />
    </Tab.Navigator>
);
}