import { StyleSheet } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View.attrs({
    ...StyleSheet.absoluteFillObject,
})`
    background-color: #000;
`;