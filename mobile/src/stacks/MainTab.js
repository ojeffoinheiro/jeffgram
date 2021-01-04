import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '~/pages/Tab/Home';
import AddPhoto from '~/pages/Tab/AddPhoto';
import Search from '~/pages/Tab/Search';
import Notification from '~/pages/Tab/Notification';
import Profile from '~/pages/Tab/Profile';
import Tabbar from '~/components/Tabbar';

export default () => (
  <Tab.Navigator tabBar={props => <Tabbar {...props} /> } >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="AddPhoto" component={AddPhoto} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)