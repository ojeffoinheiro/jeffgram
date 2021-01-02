import React, { useState } from 'react'
import { TextInput } from 'react-native'
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
} from './styles'

export default function Story({ story, properties }) {
    const [message, setMessage] = useState('')

    return(
        <Container {...properties} >
            <Header>
                <InfoUser>
                    <AvatarUser source={{ uri: story.avatar }} resizeMode = 'contain' />
                    <Username>{story.username}</Username>
                </InfoUser>
                <Icon name="close" color="white" size={20} style={{ marginRight: 5 }} />
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
