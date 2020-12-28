import React, { useState } from 'react';

import Header from '~/components/Header'
import Stories from '~/components/Stories'
import Posts from '~/components/Posts'
import Tabbar from '~/components/Tabbar';
import StoryModal from '~/components/StoryModal';
import { ScrollView } from 'react-native';

const Main = () => {
  const [showStory, setShowStory] =  useState(false);

  function onShowStory(){
    setShowStory(true);
  }

  return(
    <React.Fragment>
      <ScrollView>
        <Header />
        <Stories onShowStory={onShowStory} />
        <Posts />
      </ScrollView>
      <Tabbar />
      {showStory && <StoryModal />}
    </React.Fragment>
  );
};

export default Main;
