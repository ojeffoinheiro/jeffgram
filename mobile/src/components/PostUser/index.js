import React from 'react';
import {
    Container,
    Image,
    PostItem
} from './styles'

const PostUser = () => {
    const img = 'https://i.pinimg.com/originals/a4/31/eb/a431ebb2134bac6357bc7924d4098ada.jpg'
    return (
        <Container>
            <PostItem>
                <Image source={{ uri: img}} />
            </PostItem>
        </Container>
    )
}