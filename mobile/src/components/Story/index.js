import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { 
    Container,
    Header,
    InfoUser,
    AvatarUser,
    Username,
    Footer,
    Image,
    Mensage,
    MensageText,
    Button,
} from './styles'

export default function Story({ story, properties }) {
    const [message, setMessage] = useState('')
    const navigation = useNavigation();

    const handleBackButton = () => {
        navigation.goBack();
      };

    return(
        <Container {...properties} >
            <Header>
                <InfoUser>
                    <AvatarUser source={{ uri: story.avatar }} resizeMode = 'contain' />
                    <Username>{story.username}</Username>
                </InfoUser>
                <Button onPress={handleBackButton}>
                    <Icon name="close" color="white" size={20} style={{ marginRight: 5 }} />
                </Button>
            </Header>
            <Image source={{ uri: story.img }} resizeMode = 'stretch'/>
            <Footer>
                <Icon name="camera" color="white" size={28} />
                <MensageText 
                    placeholder='Enviar mensagem' 
                    placeholderTextColor='white'
                    autoFocus={true}
                    value= {message}
                    onChangeText={message => setMessage(message)}
                    />
                <Icon name="paper-plane" color="white" size={28} />
            </Footer>
        </Container>
    )
}
