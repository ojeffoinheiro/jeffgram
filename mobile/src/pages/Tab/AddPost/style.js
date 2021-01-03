import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
`;
export const Header = styled.View`
    width: 100%
    margin-top: 15px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const ImageContainer = styled.View`
    width: 90%;
    background-color: #EEE;
    margin-top: 10px;
`;
export const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
  width: 300px;
  height: 40px;
`
export const Btn = styled.TouchableOpacity`

`;
export const Buttom = styled.TouchableOpacity`
`;
export const ButtomText = styled.Text`
    font-size: 15px;
    color: #4286f4;
`;
export const Input = styled.TextInput`
    margin-top: 20px;
    width: 90%;
`;