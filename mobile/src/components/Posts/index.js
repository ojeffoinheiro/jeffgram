import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'

import posts from './post.json'
import Comment from '../Comment'

import {
  Container,
  Scroll,
  ContainerHeader,
  StoryItem,
  ContainerPhoto,
  UserPhoto,
  UsernameStory,
  PhotoPost,
  Subcontainer,
  UsernamePost,
  UsernameLiked,
  ContainerActions,
  ContainerActionsIcons,
  GroupIcons,
  Button, 
  Account,
  AccountText,
  Likes
} from './styles'

const Posts = () => {
  const navigation = useNavigation();
  
  const handleClick = () => {
    navigation.navigate('Story')
  }

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
            <ContainerPhoto onPress={handleClick} >
              <UserPhoto source = {{ uri: post.profile.avatar }} />
            </ContainerPhoto>
            <UsernameStory>{post.profile.username}</UsernameStory>
          </StoryItem>
          <Icon name='ellipsis-h' size={14} color="#888" />
        </ContainerHeader>
        <PhotoPost 
          source={{ uri: post.postPhoto }} 
          style={{     
            height: Dimensions.get('screen').height / 4,
            width: Dimensions.get('screen').width,
          }} 
        />
        <Subcontainer>
        <ContainerActions>
          <ContainerActionsIcons>
            <GroupIcons>
              <Button><Icon name='heart' {...iconConfigure}/></Button>
              <Button><Icon name='comment-alt' {...iconConfigure}/></Button>
              <Button><Icon name='paper-plane' {...iconConfigure}/></Button>
            </GroupIcons>
            <Button><Icon name='bookmark' {...iconConfigure} /></Button>
          </ContainerActionsIcons>
        </ContainerActions>
        <Likes>
          <UserPhoto source={{ uri: post.liked.avatar }} />
          <UsernameLiked >Curtido por {post.liked.username} e outras x pessoas</UsernameLiked>
        </Likes>
        <Account>
          <UsernamePost>{post.profile.username}:</UsernamePost>
          <AccountText>{post.account}</AccountText>
        </Account>
        <Comment />
        </Subcontainer>
      </Container>
    ))}
    </Scroll>
  )
};

export default Posts;
