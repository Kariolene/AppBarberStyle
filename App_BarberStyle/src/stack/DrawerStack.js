import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import HomeUser  from '../screens/HomeUser';
import Favoritos from '../screens/Favoritos';
import Agenda    from '../screens/Agenda';
import SearchBarber from '../screens/SearchBarber';
import SignIn from '../screens/SignIn';
import PerfilUser from '../screens/PerfilUser';

function CustomDrawerContent(props) {
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem label = "Close Drawer"
            onPress = {() => props.navigation.toggleDrawer()}/>
        </DrawerContentScrollView>           

    )
}
const Drawer = createDrawerNavigator()

export default function DrawerStack({navigation}){
    return(
        <Drawer.Navigator initialRouteName = 'HomeUser' draweContent = {props => <CustomDrawerContent {...props}/>}> 
            <Drawer.Screen name = "Home"            component= {HomeUser}/>             
            <Drawer.Screen name = "Favoritos"       component= {Favoritos}/>
            <Drawer.Screen name = "Agenda"          component= {Agenda}/>       
            <Drawer.Screen name = "SearchBarber"    component= {SearchBarber}/>  
            <Drawer.Screen name=  "PerfilUser"      component= {PerfilUser}/>
            <Drawer.Screen name = "Logout"          component= {SignIn}/>     
        </Drawer.Navigator>
    )
}
