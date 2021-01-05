import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Animated from 'react-native-reanimated';

import {
  Container,
  Header,
  HeaderButtom,
  HeaderText,
  HeaderTitle,
  Buttom,
  ButtomText,
  BodyPost,
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

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const handleClickPhoto = () => {
    setShowModal(true)
  };
  const handleBackButton = () => {
    setImage(null)
    setAccount('')
    navigation.goBack()
  };
  const handleCancelButton = () => {
    setImage(null)
    setShowModal(false)
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 350,
      compressImageMaxHeight: 350,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setShowModal(false);
      bs.current.snapTo(1);
    });
  }
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 350,
      height: 350,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setShowModal(false);
      bs.current.snapTo(1);
    });
  }

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
      <BodyPost>
        <ImageContainer>
          <Image source={{ uri: image }}/>
        </ImageContainer>
        <Input placeholder='Adicione uma descrição' 
          value={account}
          onChangeText={t => setAccount(t)} />
      </BodyPost>
      <Modal 
        visible={showModal}
        transparent={true} 
        animationType='slide'
        >
        <ModalArea>
            <ModalBody>
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
                        <PanelButton onPress={handleCancelButton}>
                            <PanelButtonTitle>Cancel</PanelButtonTitle>
                        </PanelButton>
                    </Panel>
            </ModalBody>
        </ModalArea>
    </Modal>
    </Container>
  );
};

export default AddPhoto;