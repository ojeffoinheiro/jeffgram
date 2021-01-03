import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  Title,
  ImageContainer,
  Image,
  Buttom,
  Btn,
  ButtomText,
  Input
} from './style'
import PhotoModal from '~/components/PhotoModal';

const Main = () => {
  const navigation = useNavigation();
  
  const [showModal, setShowModal] = useState(true)
  const [image, setImage] =  useState(null);
  const [account, setAccount] =  useState(null);

  const handleBackButton = () => {
    navigation.goBack();
  };

  return(
    <Container>
      <Header>
        <Btn onPress={handleBackButton}>
          <Icon name='angle-left' size={30} color='#555' />
        </Btn>
        <Title>Novo Post</Title>
        <Buttom>
            <ButtomText>Compartilhar</ButtomText>
        </Buttom>
      </Header>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Buttom>
        <ButtomText>Selecione uma foto</ButtomText>
      </Buttom>
      <Input placeholder='Adicione uma descrição'
        value={account}
        onChangeText={(t) => setAccount(t)} />
    
      {showModal && <PhotoModal />}
    </Container>
  );
};

export default Main;

{/* titulo
                marginTop: Platform.OS === 'ios' ? 30 : 10,
              imagecontainer
                height: Dimensions.get('window').width / 2,
              image
                height: Dimensions.get('window').width / 2,

          */}