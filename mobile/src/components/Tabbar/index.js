import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  TabArea,
  TabItem
} from './styles'

export default ({ state, navigation }) => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 30
  })

  const goTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <TabArea>
        <TabItem onPress={() => goTo("Home")}>
          <Icon name='home' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Search")}>
          <Icon name='search' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Appointments")}>
          <Icon name='plus-square-o' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Favorites")}>
          <Icon name='heart' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Profile")}>
          <Icon name='user' {...iconConfigure} />
        </TabItem>
  </TabArea>
  );
}