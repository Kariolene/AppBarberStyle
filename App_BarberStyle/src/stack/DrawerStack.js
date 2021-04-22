
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import HomeUser from '../screens/HomeUser';
import PerfilUser from '../screens/PerfilUser';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}/>
    </DrawerContentScrollView>
  );
}

 const Drawer = createDrawerNavigator();

 export default function DrawerStack({navigation}) {
 return (
  <Drawer.Navigator 
  initialRouteName="HomeUser" 
  drawerContent={props => <CustomDrawerContent {...props} />}>
       <Drawer.Screen name="HomeUser"      component={HomeUser}/>
       <Drawer.Screen name="PerfilUser"    component={PerfilUser}/>
  </Drawer.Navigator>
 );
};