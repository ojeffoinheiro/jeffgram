import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

import Home from '~/pages/Tab/Home';
import AddPhoto from '~/pages/Tab/AddPhoto';
import Search from '~/pages/Tab/Search';
import Notification from '~/pages/Tab/Notification';
import Profile from '~/pages/Tab/Profile';
import Tabbar from '~/components/Tabbar';

export default () => (
  <Tab.Navigator 
    initialRouteName="Home"
    activeColor="#000"
    tabBarOptions={{
      activeTintColor: '#F89B3B',
      showLabel: false,
      showIcon: true
    }}
     >
    <Tab.Screen name="Home" component={Home} 
      options={{
        showLabel: false,
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }} />
    <Tab.Screen name="Search" component={Search} 
    options={{
      showLabel: false,
      tabBarIcon: ({ color }) => (
        <Icon name="search" color={color} size={26} />
      ),
    }}/>
    <Tab.Screen name="AddPhoto" component={AddPhoto} options={{
        showLabel: false,
        tabBarOptions: { showLabel: false},
        tabBarIcon: ({ color }) => (
          <Icon name="plus-square-o" color={color} size={26} />
        ),
      }}/>
    <Tab.Screen name="Notification" component={Notification} options={{
        showLabel: false,
        tabBarIcon: ({ color }) => (
          <Icon name="heart" color={color} size={26} />
        ),
      }}/>
    <Tab.Screen name="Profile" component={Notification} options={{
        showLabel: false,
        tabBarIcon: ({ color }) => (
          <Icon name="user" color={color} size={26} />
        ),
      }}/>
  </Tab.Navigator>
)