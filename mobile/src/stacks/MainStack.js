import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import Preload from '../screens/Preload';
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';
import Preload from '~/pages/Preload'
import Home from '~/pages/Tab/Home'
import StoryModal from '~/pages/StoryModal'
import MainTab from '../stacks/MainTab';

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
            component={Preload} />
        <Stack.Screen 
            name="Home" 
            component={Home} />
        <Stack.Screen 
            name="Story" 
            component={StoryModal} />
        <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
    )
}

export default () => <MyStack />;