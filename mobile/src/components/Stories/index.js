import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';


import {
  Container,
  AddStory,
  ContainerScrollStory,
  ContaineItemStory,
  ContainePhotoStory,
  Photo,
  UserName,
} from './styles';

import stories from './stories';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stories = () => {
  const [image, setImage] =  useState(null);
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Story');
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 600,
      compressImageMaxHeight: 600,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setShowModal(false);
      bs.current.snapTo(1);
    });
  }

  return (
    <Container>
      <ContainerScrollStory showsHorizontalScrollIndicator={false}>
        <AddStory onPress={takePhotoFromCamera}>
          <Icon name="plus" size={40} color='#f89b3b' />
        </AddStory>
        {stories &&
          stories.map((story, index) => (
            <ContaineItemStory key={index} onPress={handleClick}>
              <ContainePhotoStory>
                <Photo source={{uri: story.avatar}} />
              </ContainePhotoStory>
              <UserName>{story.name}</UserName>
            </ContaineItemStory>
          ))}
      </ContainerScrollStory>
    </Container>
  );
};

export default Stories;
