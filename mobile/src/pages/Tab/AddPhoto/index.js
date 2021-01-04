import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderButtom,
  HeaderText,
  HeaderTitle,
  Buttom,
  ButtomText,
  ImageContainer,
  Image,
  Input,
  Modal,
  ModalArea,
  ModalBody,
  HeaderModal,
  PanelHeader,
  PanelHandle,
  Panel,
  SubPanel,
  PanelTitle,
  PanelSubtitle,
  PanelButton,
  PanelButtonTitle
} from './style'

const AddPhoto = () => {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false)
  const [image, setImage] =  useState(null);
  const [account, setAccount] =  useState('')

  const handleClickPhoto = () => {
    setShowModal(true)
  };
  const handleBackButton = () => {
    navigation.goBack();
  };
  const takePhotoFromCamera = () => {}
  const choosePhotoFromLibrary = () => {}

  const PhotoModal = (
    <Modal 
      transparent={true} 
      animationType='slide'>
        <ModalArea>
            <ModalBody>
                <Container>
                    <HeaderModal>
                        <PanelHeader>
                            <PanelHandle />
                        </PanelHeader>
                    </HeaderModal>
                    <Panel>
                        <SubPanel>
                            <PanelTitle>Upload Photo</PanelTitle>
                            <PanelSubtitle>Selecione uma foto</PanelSubtitle>
                        </SubPanel>
                        <PanelButton onPress={takePhotoFromCamera}>
                            <PanelButtonTitle>Take Photo</PanelButtonTitle>
                        </PanelButton>
                        <PanelButton onPress={choosePhotoFromLibrary}>
                            <PanelButtonTitle>Choose From Library</PanelButtonTitle>
                        </PanelButton>
                        <PanelButton onPress={handleBackButton}>
                            <PanelButtonTitle>Cancel</PanelButtonTitle>
                        </PanelButton>
                    </Panel>
                </Container>
            </ModalBody>
        </ModalArea>
    </Modal>
  )

  return(
    <Container>
      <Header>
        <HeaderButtom onPress={handleBackButton} >
          <Icon name='angle-left' size={30} color='#555' />
        </HeaderButtom>
        <HeaderTitle>Novo Post</HeaderTitle>
        <HeaderButtom>
          <HeaderText>Share</HeaderText>
        </HeaderButtom>
      </Header>
      <Buttom onPress={handleClickPhoto} >
        <ButtomText>Selecione uma foto</ButtomText>
      </Buttom>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <Input placeholder='Adicione uma descrição' 
        value={account}
        onChangeText={t => setAccount(t)} />
    </Container>
  );
};

export default AddPhoto;