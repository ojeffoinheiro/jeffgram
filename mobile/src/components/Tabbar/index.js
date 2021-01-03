import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  TabArea,
  TabItem
} from './styles'

export default ({ navigation }) => {
  const [iconConfigure] = useState({
    size: 30,
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
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
        <TabItem onPress={() => goTo("AddPhoto")}>
          <Icon name='plus-square-o' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Notification")}>
          <Icon name='heart' {...iconConfigure} />
        </TabItem>
        <TabItem onPress={() => goTo("Profile")}>
          <Icon name='user' {...iconConfigure} />
        </TabItem>
  </TabArea>
  );
}