import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Preload from '~/pages/Preload';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import StoryModal from '~/pages/StoryModal';
import Saved from '~/pages/Saved';
import Meet from '~/pages/Meet';
import Settings from '~/pages/Settings';

import MainTab from '~/stacks/MainTab';
import {DrawerContent} from '~/components/Drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={StackScreen} />
        <Drawer.Screen name="Saved" component={Saved} />
        <Drawer.Screen name="Meet" component={Meet} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator> */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Story" component={StoryModal} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
