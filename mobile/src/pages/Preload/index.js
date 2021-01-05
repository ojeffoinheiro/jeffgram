import React from 'react';
import LottieView from 'lottie-react-native'

import animated from '~/assets/animation.json'
import { Container, LoadingIcon } from './style';

export default () => {    
    return (
        <Container>
            <LottieView source={require('../../assets/6749-instagram-social-media-icon.json')} autoPlay loop />
        </Container>
    )
}