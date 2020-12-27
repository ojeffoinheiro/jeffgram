import React, { useState } from 'react'
import { TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { 
    Container,
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
            <Image source={{ uri: story.img }} resizeMode = 'stretch'/>
            <InfoUser>
                <AvatarUser source={{ uri: story.avatar }} resizeMode = 'contain' />
                <Username>{story.username}</Username>
            </InfoUser>
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
