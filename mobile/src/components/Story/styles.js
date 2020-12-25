import styled from 'styled-components/native'
import { Animated, StyleSheet } from 'react-native'

export const Container = styled(Animated.View).attrs({
    ...StyleSheet.absoluteFillObject,
})``;

export const InfoUser = styled.View`
    margin: 10px;
    flex-direction: row;
    justifyContent: center;
    position: absolute;
`;
export const AvatarUser = styled.Image.attrs({
    resizeMode: 'cover'
})`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border-width: 1px;
  border-color: #fff
`;
export const Username = styled.Text`
    margin-left: 5px;
    font-weight: bold,
    color: white;
    fontSize: 20px;
`;

export const Image = styled.Image.attrs({
    width: null,
    height: null,
    flex: 1,
    position: 'relative'
})``;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
`;

export const Mensage = styled.View`
    border-width: 2px;
    border-color: white;
    border-radius: 10px;
    height: 28px;
    width: 270px;
`;
export const MensageText = styled.TextInput`
flex: 1;
font-size: 16px;
color: #268596;
margin-left: 10px;
`;