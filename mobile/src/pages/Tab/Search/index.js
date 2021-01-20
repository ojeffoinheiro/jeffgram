import React, {useState} from 'react';
import {Dimensions, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import tags from './tags.json';
import posts from './posts.json';

import {
  Container,
  ContainerTags,
  TagButton,
  TagText,
  SearchContainer,
  Input,
  PostsScroll,
  PostItem,
  Image,
} from './style';

const Search = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <Container>
      <SearchContainer>
        <Icon name="search" size={15} />
        <Input
          placeholder="Procuar..."
          placeholderTextColor={'#8e8e8e'}
          style={{}}
        />
      </SearchContainer>
      <ContainerTags horizontal>
        {tags.map((tag, index) => (
          <TagButton key={index}>
            <TagText>{tag.name}</TagText>
          </TagButton>
        ))}
      </ContainerTags>
      <PostsScroll>
        {posts.map((post, index) => (
          <PostItem key={index}>
            <Image source={{uri: post.img}} />
          </PostItem>
        ))}
      </PostsScroll>
    </Container>
  );
};

export default Search;
