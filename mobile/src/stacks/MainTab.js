import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '~/pages/Home';

export default () => (
  <Tab.Navigator tabBar={props => <CusttomTabBar {...props} /> } >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Home} />
    <Tab.Screen name="Appointments" component={Home} />
    <Tab.Screen name="Favorites" component={Home} />
    <Tab.Screen name="Profile" component={Home} />
  </Tab.Navigator>
)