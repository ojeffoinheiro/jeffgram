import React from 'react'

import {
  Container,
  ContainerHeader,
  GroupLabel,
  Label,
  ContainerScrollStory,
  ContaineItemStory,
  ContainePhotoStory,
  Photo,
  UserName
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

import photo1 from '~/assets/img/photo2.jpg'
import stories from './stories'

const Stories = () => {
  return(
    <Container>
      <ContainerHeader>
        <Label>Stories</Label>
        <GroupLabel>
          <Icon name='caret-right' size={20}/>
          <Label>Watch all</Label>
        </GroupLabel>
      </ContainerHeader>
      <ContainerScrollStory>
        { stories && stories.map((story, index) => (
          <ContaineItemStory key={index} >
            <ContainePhotoStory>
              <Photo source={{ uri: story.avatar }} />
            </ContainePhotoStory>
            <UserName>{story.name}</UserName>
        </ContaineItemStory>
        ))}
      </ContainerScrollStory>
    </Container>
  )
};

export default Stories;
