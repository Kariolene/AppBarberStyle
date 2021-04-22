import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar'

import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />} >
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
);