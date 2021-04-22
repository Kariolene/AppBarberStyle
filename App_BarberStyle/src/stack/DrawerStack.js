import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import HomeUser from '../screens/HomeUser'
import PerfilUser from '../screens/PerfilUser'
import Favoritos from '../screens/Favoritos'
import Agenda from '../screens/Agenda'

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
            <Drawer.Screen name = "Home" component= {HomeUser}></Drawer.Screen>             
            <Drawer.Screen name = "Favoritos" component= {Favoritos}></Drawer.Screen>
            <Drawer.Screen name = "Agenda" component= {Agenda}></Drawer.Screen>                   
        </Drawer.Navigator>
    )
}