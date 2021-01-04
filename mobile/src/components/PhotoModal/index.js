import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
    Modal,
    ModalArea,
    ModalBody,
    Container,
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

const PhotoModal = ({show, setShow}) => {
    const navigation = useNavigation();
    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');

    const handleBackButton = () => {
        setShow(false)
    };

    const takePhotoFromCamera = () => {

    }
    const choosePhotoFromLibrary = () => {

    }

    return (
        <Modal 
            transparent={true} 
            visible={show} 
            animationType="slide">
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
    );
};

export default PhotoModal;
