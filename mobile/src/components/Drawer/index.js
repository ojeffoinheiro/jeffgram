import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';

import {View} from 'react-native';

const Drawer = createDrawerNavigator();

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        
      </View>
    </DrawerContentScrollView>
  );
};