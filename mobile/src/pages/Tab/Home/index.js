import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome5'


import {
  StoriesContainer,
  ContainerHeader,
  GroupLabel,
  Label
} from './styles';

import Header from '~/components/Header';
import Posts from '~/components/Posts';
import Stories from '~/components/Stories';
import {ScrollView} from 'react-native';

const Main = () => {
  return (
    <React.Fragment>
      <ScrollView>
        <Header />
        <StoriesContainer>
          <ContainerHeader>
            <Label>Stories</Label>
            <GroupLabel>
              <Icon name="caret-right" size={20} />
              <Label>Watch all</Label>
            </GroupLabel>
          </ContainerHeader>
          <Stories />
        </StoriesContainer>
        <Posts />
      </ScrollView>
    </React.Fragment>
  );
};

export default Main;
