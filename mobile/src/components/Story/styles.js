import styled from 'styled-components/native'
import { Animated, StyleSheet } from 'react-native'

export const Container = styled(Animated.View).attrs({
    ...StyleSheet.absoluteFillObject,
})``;

export const Image = styled.Image.attrs({
    width: null,
    height: null,
    flex: 1
})``;