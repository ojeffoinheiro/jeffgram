import React, { useState } from 'react'

import {
  Container,
  Scroll,
  ContainerHeader,
  StoryItem,
  ContainerPhoto,
  UserPhoto,
  Username,
  PhotoPost,
  ContainerActions,
  ContainerActionsIcons,
  GroupIcons,
  Label,
} from './styles'

import Icon from 'react-native-vector-icons/FontAwesome5'

import posts from './post.json'

const Posts = () => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 20,
    style: {
      paddingRight: 15
    }
  })

  return(
    <Scroll>
      {posts && posts.map((post, index) => (
      <Container key={index} >
        <ContainerHeader>
          <StoryItem>
            <ContainerPhoto>
              <UserPhoto source = {{ uri: post.profile.avatar }} />
            </ContainerPhoto>
            <Username>{post.profile.username}</Username>
          </StoryItem>
          <Icon name='ellipsis-h' size={14} color="#888" />
        </ContainerHeader>
        <PhotoPost source={{ uri: post.postPhoto }} />
        <ContainerActions>
          <ContainerActionsIcons>
            <GroupIcons>
              <Icon name='heart' {...iconConfigure} />
              <Icon name='comment-alt' {...iconConfigure} />
              <Icon name='paper-plane' {...iconConfigure} />
            </GroupIcons>
            <Icon name='bookmark' {...iconConfigure} />
          </ContainerActionsIcons>
          <Label>2.850 likes</Label>
          <Label>marinaii Hi !! #life </Label>
        </ContainerActions>
      </Container>
    ))}
    </Scroll>
  )
};

export default Posts;
