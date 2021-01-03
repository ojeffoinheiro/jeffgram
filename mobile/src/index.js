import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';

import MainStack from '~/stacks/MainStack';

export default () => {
  return (
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
  );
}