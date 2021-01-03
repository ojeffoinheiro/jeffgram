import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '~/pages/Home';
import AddPost from '~/pages/AddPost';
import Search from '~/pages/Search';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';
import Tabbar from '~/components/Tabbar';

export default () => (
  <Tab.Navigator tabBar={props => <Tabbar {...props} /> } >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="AddPost" component={AddPost} />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
)