import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import Favoritos from '../screens/Favoritos';
import Agenda    from '../screens/Agenda';
import SignInBarbearia from '../screens/SignInBarbearia';
import HomeBarbearia from '../screens/HomeBarbearia';
import PerfilBarbearia from '../screens/PerfilBarbearia';
import Buscar from '../screens/Buscar';

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
            <Drawer.Screen name = "Home"            component= {HomeBarbearia}/>             
            <Drawer.Screen name = "Agenda"          component= {Agenda}/>       
            <Drawer.Screen name = "Logout"          component= {SignInBarbearia}/>   
            <Drawer.Screen name = "Perfil"          component= {PerfilBarbearia}/>   
            <Drawer.Screen name = "Buscar"          component= {Buscar} />
        </Drawer.Navigator>
    )
}
