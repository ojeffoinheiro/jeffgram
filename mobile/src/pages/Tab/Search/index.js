import React, { useState } from 'react';
import { Text, View } from 'react-native';

const Main = () => {
  const [showStory, setShowStory] =  useState(false);

  return(
    <React.Fragment>
      <View>
          <Text>Search</Text>
      </View>
    </React.Fragment>
  );
};

export default Main;
