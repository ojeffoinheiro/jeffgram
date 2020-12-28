import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '~/pages/Home'
import MainTab from './MainTab';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="Preload" 
                component={Home} />
            <Stack.Screen 
                name="SignIn" 
                component={Home} 
                />
            <Stack.Screen 
                name="SignUp" 
                component={Home} 
                />
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen 
                name="Home" 
                component={Home} 
                />
        </Stack.Navigator>
    )
}

export default () => <MyStack />;