import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Buttom,
  ButtomText
} from './style'
import PhotoModal from '~/components/PhotoModal';

const AddPhoto = () => {
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false)
  const [image, setImage] =  useState(null);
  
  const handleClickPhoto = () => {
    setShowModal(true);
  };

  return(
    <Container>
      <Buttom onPress={handleClickPhoto} >
        <ButtomText>Selecione uma foto</ButtomText>
      </Buttom>
      <PhotoModal 
        show={showModal}
        setShow={setShowModal}  />
    </Container>
  );
};

export default AddPhoto;