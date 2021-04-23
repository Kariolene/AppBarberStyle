import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FooterBar from '../components/FooterBar';

import HomeUser from '../screens/HomeUser';
import Search from '../screens/Search';
import Agenda from '../screens/Agenda';
import favoritos from '../screens/Favoritos';
import Profile from '../screens/PerfilUser';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><FooterBar {...props} />}>
        <Tab.Screen name="HomeUser" component={HomeUser} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Agenda" component={Agenda} />
        <Tab.Screen name="Favoritos" component={favoritos} />
        <Tab.Screen name="PerfilUser" component={Profile} />
    </Tab.Navigator>
);