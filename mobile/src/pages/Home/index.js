import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import Header from '~/components/Header'
import Stories from '~/components/Stories'
import Posts from '~/components/Posts'
import StoryModal from '~/components/StoryModal';
import { ScrollView } from 'react-native';

const Main = () => {

  return(
    <React.Fragment>
      <ScrollView>
        <Header />
        <Stories />
        <Posts />
      </ScrollView>
    </React.Fragment>
  );
};

export default Main;
