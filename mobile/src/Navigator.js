import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Preload from '~/pages/Preload';
import StoryModal from '~/pages/StoryModal';
import Saved from '~/pages/Saved'

import MainTab from '~/stacks/MainTab';
import { DrawerContent } from '~/components/Drawer'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackScreen = () => (
  <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Story" component={StoryModal} />
        <Stack.Screen name="MainTab" component={MainTab} />
      </Stack.Navigator>
)

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right" drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen name="Home" component={StackScreen} />
        <Drawer.Screen name="Saved" component={Saved} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
