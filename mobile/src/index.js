import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import '~/config/ReactotronConfig';
import Routes from '~/routes';

const App = () => <Routes />;

export default function All() {
  return (
    <NavigationContainer>
        <App />
    </NavigationContainer>
  );
}

export default All;
