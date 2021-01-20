import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stories from '~/components/Stories';

import postUsers from './post-users.json';

import {
  Header,
  Username,
  AddPhoto,
  Menu,
  Container,
  SubHeader,
  StoryItem,
  ContainerPhotoUser,
  UserPhoto,
  ContainerInfo,
  InfoItem,
  InfoText,
  NumberText,
  UserBio,
  UsernameBio,
  AccountBio,
  EditInfoButton,
  EditInfoButtonText,
  Line,
  PostHeader,
  PostHeaderButton,
  ContainerPost,
  PostItem,
  Image,
} from './style';

function PostUser() {
  return <ContainerPost></ContainerPost>;
}

const Profile = () => {
  const [showStory, setShowStory] = useState(false);

  const avatar =
    'https://scontent.fpoa28-1.fna.fbcdn.net/v/t1.0-9/101185565_2178567235621824_7001971009553170432_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGAWX2xdunHhW9_tOCnGlkIPMIS3sk_jW88whLeyT-Nb2P7ye8AzZriP_bwlsxZ3pRamgeiNLdVVyu_jXF_X7oE&_nc_ohc=g9Bg4xGlqv4AX_BCYTN&_nc_ht=scontent.fpoa28-1.fna&oh=97d12b7ea1b113acf11550b8aaf59ea8&oe=6029BF95';
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Story');
  };

  return (
    <React.Fragment>
      <Header>
        <AddPhoto>
          <Icon name="plus" size={20} />
        </AddPhoto>
        <Username>nome-usuario</Username>
        <Menu onPress={() => navigation.openDrawer()} >
          <Icon name="bars" size={20} />
        </Menu>
      </Header>
      <Container>
        <SubHeader>
          <StoryItem>
            <ContainerPhotoUser onPress={handleClick}>
              <UserPhoto source={{uri: avatar}} />
            </ContainerPhotoUser>
          </StoryItem>
          <ContainerInfo>
            <InfoItem>
              <NumberText>10</NumberText>
              <InfoText>Posts</InfoText>
            </InfoItem>
            <InfoItem>
              <NumberText>100</NumberText>
              <InfoText>Followers</InfoText>
            </InfoItem>
            <InfoItem>
              <NumberText>150</NumberText>
              <InfoText>Following</InfoText>
            </InfoItem>
          </ContainerInfo>
        </SubHeader>
        <UserBio>
          <UsernameBio>nome-do-usuario</UsernameBio>
          <AccountBio>
            texto sobre o usuario teste texto grande teste texto grandeteste
            texto grandeteste texto grandeteste texto grande
          </AccountBio>
          <EditInfoButton>
            <EditInfoButtonText>Editar perfil</EditInfoButtonText>
          </EditInfoButton>
        </UserBio>
        <Stories />
        <Line />
        <PostHeader>
          <PostHeaderButton>
            <Icon name="th" size={30} />
          </PostHeaderButton>
          <PostHeaderButton>
            <Icon name="id-badge" size={30} />
          </PostHeaderButton>
        </PostHeader>
        {postUsers.map((post, index) => (
          <ContainerPost key={index} >
            <PostItem>
              <Image source={{ uri: post.img }} />
            </PostItem>
          </ContainerPost>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Profile;
